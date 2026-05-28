# 🦉 NightOwlAtlas

> Your guide to graduation, whenever you study.

NightOwlAtlas is a WGU student companion app that helps you track degree progression, project your graduation date, and discover Reddit resources for every course — all in one place.

---

## Features

- 📊 **Degree Tracker** — Visual map of your entire degree plan
- 🎯 **Graduation Projector** — Set your pace, see your graduation date in real time
- 💰 **Tuition Savings Calculator** — See how finishing faster saves money
- 📚 **Reddit Resource Aggregator** — Top posts & tips from r/WGU per course
- 🤖 **AI Course Advisor** — Recommends next course based on your profile
- 🔔 **Smart Alerts** — Reminders when you're falling behind pace

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| Styling | CSS Modules + CSS Variables |
| Backend | Node.js + Express |
| Database | PostgreSQL |
| Reddit Data | Reddit API (snoowrap) |
| AI Features | Claude API (Anthropic) |
| Auth | JWT |
| Hosting | Vercel (frontend) + Railway (backend) |

---

## Project Structure

```
nightowlatlas/
├── frontend/          # React app
│   └── src/
│       ├── components/
│       │   ├── Dashboard/
│       │   ├── CourseMap/
│       │   ├── CourseDetail/
│       │   ├── Reddit/
│       │   └── shared/
│       ├── pages/
│       ├── context/
│       ├── hooks/
│       └── utils/
└── backend/           # Node/Express API
    ├── routes/
    ├── controllers/
    ├── services/
    ├── models/
    └── config/
```

---

## Getting Started

### 1. Clone & Install

```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend
cd backend
npm install
npm run dev
```

### 2. Environment Variables

**frontend/.env**
```
VITE_API_URL=http://localhost:3001
```

**backend/.env**
```
PORT=3001
DATABASE_URL=postgresql://localhost:5432/nightowlatlas
JWT_SECRET=your_jwt_secret
REDDIT_CLIENT_ID=your_reddit_client_id
REDDIT_CLIENT_SECRET=your_reddit_client_secret
ANTHROPIC_API_KEY=your_anthropic_key
```

### 3. Database Setup

```bash
cd backend
npm run db:migrate
npm run db:seed
```

---

## Monetization

- **Free**: Track up to 10 courses, 3 Reddit posts per course
- **Pro ($6.99/mo)**: Full degree map, unlimited Reddit posts, AI advisor, graduation projector
- **Lifetime ($49)**: Everything in Pro, forever

---

## Roadmap

- [ ] MVP: Course tracker + Reddit aggregator
- [ ] Graduation projector with pace calculator
- [ ] AI course recommendations
- [ ] Mobile app (React Native)
- [ ] WGU mentor integration
- [ ] Study group matching
