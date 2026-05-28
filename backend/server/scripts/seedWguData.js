import dotenv from "dotenv";
import pg from "pg";
import { COURSES, DEGREE_PROGRAMS } from "../../../frontend/src/utils/wguData.js";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes("render.com")
    ? { rejectUnauthorized: false }
    : false,
});

async function seedDegreePrograms(client) {
  for (const program of Object.values(DEGREE_PROGRAMS)) {
    await client.query(
      `
      INSERT INTO degree_programs (
        id,
        name,
        level,
        college,
        total_cus
      )
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id)
      DO UPDATE SET
        name = EXCLUDED.name,
        level = EXCLUDED.level,
        college = EXCLUDED.college,
        total_cus = EXCLUDED.total_cus
      `,
      [
        program.id,
        program.name,
        program.level,
        program.college,
        program.totalCUs ?? null,
      ]
    );
  }
}

async function seedCourses(client) {
  const seenCodes = new Set();

  for (const course of COURSES) {
    if (seenCodes.has(course.code)) {
      console.warn(
        `Skipping duplicate course code ${course.code}: ${course.id} - ${course.name}`
      );
      continue;
    }

    seenCodes.add(course.code);

    await client.query(
      `
      INSERT INTO courses (
        code,
        name,
        credit_units,
        category,
        type,
        difficulty,
        avg_days,
        tags,
        reddit_keywords
      )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (code)
      DO UPDATE SET
        name = EXCLUDED.name,
        credit_units = EXCLUDED.credit_units,
        category = EXCLUDED.category,
        type = EXCLUDED.type,
        difficulty = EXCLUDED.difficulty,
        avg_days = EXCLUDED.avg_days,
        tags = EXCLUDED.tags,
        reddit_keywords = EXCLUDED.reddit_keywords
      `,
      [
        course.code,
        course.name,
        course.creditUnits ?? null,
        course.category ?? null,
        course.type ?? null,
        course.difficulty ?? null,
        course.avgDays ?? null,
        course.tags ?? [],
        course.redditKeywords ?? [],
      ]
    );
  }
}

async function seedCoursePrograms(client) {
  const mappings = new Set();

  for (const course of COURSES) {
    const programs = course.programs ?? [];

    for (const programId of programs) {
      if (programId === "ALL") {
        for (const realProgramId of Object.keys(DEGREE_PROGRAMS)) {
          mappings.add(`${course.code}::${realProgramId}`);
        }
      } else {
        mappings.add(`${course.code}::${programId}`);
      }
    }
  }

  for (const mapping of mappings) {
    const [courseCode, programId] = mapping.split("::");

    await client.query(
      `
      INSERT INTO course_programs (
        course_code,
        program_id
      )
      VALUES ($1, $2)
      ON CONFLICT (course_code, program_id)
      DO NOTHING
      `,
      [courseCode, programId]
    );
  }
}

async function main() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    await seedDegreePrograms(client);
    await seedCourses(client);
    await seedCoursePrograms(client);

    await client.query("COMMIT");

    const counts = await client.query(`
      SELECT
        (SELECT COUNT(*) FROM degree_programs) AS degree_programs,
        (SELECT COUNT(*) FROM courses) AS courses,
        (SELECT COUNT(*) FROM course_programs) AS course_programs
    `);

    console.log("Seed complete:", counts.rows[0]);
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", error);
    process.exitCode = 1;
  } finally {
    client.release();
    await pool.end();
  }
}

main();