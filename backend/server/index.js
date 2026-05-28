import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("render.com")
    ? { rejectUnauthorized: false }
    : false,
});

app.get("/health", async (_req, res) => {
  try {
    const result = await pool.query("SELECT NOW() AS now");
    res.json({ ok: true, dbTime: result.rows[0].now });
  } catch (error) {
    console.error("Health check failed:", error);
    res.status(500).json({ ok: false, error: "Database connection failed" });
  }
});

app.get("/api/programs", async (_req, res) => {
  try {
    const result = await pool.query(`
      SELECT id, name, level, college, total_cus
      FROM degree_programs
      ORDER BY college, level, name
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch programs:", error);
    res.status(500).json({ error: "Failed to fetch programs" });
  }
});

app.get("/api/courses", async (_req, res) => {
  try {
    const result = await pool.query(`
      SELECT code, name, credit_units, category, type, difficulty, avg_days, tags, reddit_keywords
      FROM courses
      ORDER BY code
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const {
      id,
      email,
      name,
      program_id,
      term_start_date,
      target_cus_per_month,
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO users (
        id,
        email,
        name,
        program_id,
        term_start_date,
        target_cus_per_month
      )
      VALUES ($1, $2, $3, $4, $5, COALESCE($6, 12))
      ON CONFLICT (email)
      DO UPDATE SET
        name = EXCLUDED.name,
        program_id = EXCLUDED.program_id,
        term_start_date = EXCLUDED.term_start_date,
        target_cus_per_month = EXCLUDED.target_cus_per_month,
        updated_at = NOW()
      RETURNING *
      `,
      [id, email, name, program_id, term_start_date, target_cus_per_month]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Failed to upsert user:", error);
    res.status(500).json({ error: "Failed to save user" });
  }
});

app.get("/api/users/:id/progress", async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT id, user_id, course_code, status, start_date, end_date, notes
      FROM course_progress
      WHERE user_id = $1
      ORDER BY course_code
      `,
      [id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("Failed to fetch progress:", error);
    res.status(500).json({ error: "Failed to fetch progress" });
  }
});

app.put("/api/users/:userId/progress/:courseCode", async (req, res) => {
  try {
    const { userId, courseCode } = req.params;
    const { status, start_date, end_date, notes } = req.body;

    const result = await pool.query(
      `
      INSERT INTO course_progress (
        user_id,
        course_code,
        status,
        start_date,
        end_date,
        notes
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      ON CONFLICT (user_id, course_code)
      DO UPDATE SET
        status = EXCLUDED.status,
        start_date = EXCLUDED.start_date,
        end_date = EXCLUDED.end_date,
        notes = EXCLUDED.notes,
        updated_at = NOW()
      RETURNING *
      `,
      [userId, courseCode, status, start_date, end_date, notes]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Failed to update progress:", error);
    res.status(500).json({ error: "Failed to update progress" });
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`NightOwlAtlas API running on port ${port}`);
});