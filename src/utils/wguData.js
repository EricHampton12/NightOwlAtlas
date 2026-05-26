// WGU Course Data - Seeded with popular degree programs
// Each course has: id, code, name, creditUnits, type, difficulty, avgDays, tags

export const DEGREE_PROGRAMS = {
  // ── IT Bachelor's ──────────────────────────────
  BSCS:   { id: 'BSCS',   name: 'B.S. Computer Science',                  level: 'bachelors', college: 'IT',       totalCUs: 124 },
  BSIT:   { id: 'BSIT',   name: 'B.S. Information Technology',            level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSCIA:  { id: 'BSCIA',  name: 'B.S. Cybersecurity and Information Assurance', level: 'bachelors', college: 'IT', totalCUs: 120 },
  BSSD:   { id: 'BSSD',   name: 'B.S. Software Development',              level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSDA:   { id: 'BSDA',   name: 'B.S. Data Analytics',                    level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSUXD:  { id: 'BSUXD',  name: 'B.S. UX Design',                        level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSNET:  { id: 'BSNET',  name: 'B.S. Network Operations and Security',   level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSCLOUD:{ id: 'BSCLOUD',name: 'B.S. Cloud Computing',                   level: 'bachelors', college: 'IT',       totalCUs: 120 },

  // ── Business Bachelor's ────────────────────────
  BSBA:   { id: 'BSBA',   name: 'B.S. Business Administration',           level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAMG: { id: 'BSBAMG', name: 'B.S. Business Administration – Management', level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAAC: { id: 'BSBAAC', name: 'B.S. Business Administration – Accounting', level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAHC: { id: 'BSBAHC', name: 'B.S. Business Administration – Healthcare Management', level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAMK: { id: 'BSBAMK', name: 'B.S. Business Administration – Marketing', level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSHIM:  { id: 'BSHIM',  name: 'B.S. Health Information Management',     level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSPM:   { id: 'BSPM',   name: 'B.S. Project Management',                level: 'bachelors', college: 'Business', totalCUs: 120 },

  // ── IT Master's ────────────────────────────────
  MSITM:  { id: 'MSITM',  name: 'M.S. Information Technology Management', level: 'masters',   college: 'IT',       totalCUs: 30 },
  MSDA:   { id: 'MSDA',   name: 'M.S. Data Analytics',                    level: 'masters',   college: 'IT',       totalCUs: 36 },
  MSCIA:  { id: 'MSCIA',  name: 'M.S. Cybersecurity and Information Assurance', level: 'masters', college: 'IT',   totalCUs: 30 },

  // ── Business Master's ──────────────────────────
  MBA:    { id: 'MBA',    name: 'Master of Business Administration',       level: 'masters',   college: 'Business', totalCUs: 30 },
  MSHRM:  { id: 'MSHRM', name: 'M.S. Human Resource Management',          level: 'masters',   college: 'Business', totalCUs: 30 },
  MSMBA:  { id: 'MSMBA', name: 'M.S. Management and Leadership',          level: 'masters',   college: 'Business', totalCUs: 30 },
};

export const COURSES = [
  // === GENERAL EDUCATION ===
  {
    id: 'C100',
    code: 'C100',
    name: 'Introduction to Humanities',
    creditUnits: 3,
    category: 'General Education',
    type: 'OA', // OA = Objective Assessment, PA = Performance Assessment
    difficulty: 2, // 1-5
    avgDays: 14,
    tags: ['humanities', 'easy', 'OA only'],
    redditKeywords: ['C100', 'humanities WGU'],
    programs: ['BSCS', 'BSIT', 'BSBA'],
  },
  {
    id: 'C455',
    code: 'C455',
    name: 'English Composition I',
    creditUnits: 3,
    category: 'General Education',
    type: 'PA',
    difficulty: 2,
    avgDays: 21,
    tags: ['writing', 'PA', 'essays'],
    redditKeywords: ['C455', 'English Composition WGU'],
    programs: ['BSCS', 'BSIT', 'BSBA'],
  },
  {
    id: 'C456',
    code: 'C456',
    name: 'English Composition II',
    creditUnits: 3,
    category: 'General Education',
    type: 'PA',
    difficulty: 3,
    avgDays: 28,
    tags: ['writing', 'PA', 'research'],
    redditKeywords: ['C456', 'English Comp 2 WGU'],
    programs: ['BSCS', 'BSIT', 'BSBA'],
    prerequisites: ['C455'],
  },
  {
    id: 'C164',
    code: 'C164',
    name: 'Introduction to Physical and Historical Geology',
    creditUnits: 3,
    category: 'General Education',
    type: 'OA',
    difficulty: 2,
    avgDays: 10,
    tags: ['science', 'easy', 'natural science'],
    redditKeywords: ['C164', 'geology WGU'],
    programs: ['BSCS', 'BSIT', 'BSBA'],
  },

  // === MATH ===
  {
    id: 'C955',
    code: 'C955',
    name: 'Applied Probability and Statistics',
    creditUnits: 3,
    category: 'Math',
    type: 'OA',
    difficulty: 3,
    avgDays: 21,
    tags: ['math', 'statistics', 'quantitative'],
    redditKeywords: ['C955', 'statistics WGU', 'applied probability'],
    programs: ['BSCS', 'BSIT'],
  },
  {
    id: 'C958',
    code: 'C958',
    name: 'Calculus I',
    creditUnits: 4,
    category: 'Math',
    type: 'OA',
    difficulty: 4,
    avgDays: 35,
    tags: ['math', 'calculus', 'hard'],
    redditKeywords: ['C958', 'calculus WGU'],
    programs: ['BSCS'],
  },
  {
    id: 'C959',
    code: 'C959',
    name: 'Discrete Mathematics I',
    creditUnits: 4,
    category: 'Math',
    type: 'OA',
    difficulty: 4,
    avgDays: 42,
    tags: ['math', 'discrete math', 'hard', 'proof'],
    redditKeywords: ['C959', 'discrete math WGU'],
    programs: ['BSCS'],
    prerequisites: ['C958'],
  },

  // === CORE IT ===
  {
    id: 'D315',
    code: 'D315',
    name: 'Network and Security Foundations',
    creditUnits: 3,
    category: 'Core IT',
    type: 'OA',
    difficulty: 2,
    avgDays: 14,
    tags: ['networking', 'security', 'easy', 'CompTIA'],
    redditKeywords: ['D315', 'network security foundations WGU'],
    programs: ['BSCS', 'BSIT'],
  },
  {
    id: 'D316',
    code: 'D316',
    name: 'IT Applications',
    creditUnits: 3,
    category: 'Core IT',
    type: 'OA',
    difficulty: 1,
    avgDays: 7,
    tags: ['IT basics', 'very easy', 'quick win'],
    redditKeywords: ['D316', 'IT applications WGU'],
    programs: ['BSCS', 'BSIT'],
  },
  {
    id: 'C173',
    code: 'C173',
    name: 'Scripting and Programming Foundations',
    creditUnits: 3,
    category: 'Core IT',
    type: 'OA',
    difficulty: 2,
    avgDays: 14,
    tags: ['programming', 'scripting', 'beginner'],
    redditKeywords: ['C173', 'scripting foundations WGU'],
    programs: ['BSCS', 'BSIT'],
  },

  // === CS CORE ===
  {
    id: 'C949',
    code: 'C949',
    name: 'Data Structures and Algorithms I',
    creditUnits: 3,
    category: 'CS Core',
    type: 'OA',
    difficulty: 4,
    avgDays: 42,
    tags: ['DSA', 'hard', 'algorithms', 'programming'],
    redditKeywords: ['C949', 'data structures WGU', 'DSA WGU'],
    programs: ['BSCS'],
    prerequisites: ['C173'],
  },
  {
    id: 'C950',
    code: 'C950',
    name: 'Data Structures and Algorithms II',
    creditUnits: 4,
    category: 'CS Core',
    type: 'PA',
    difficulty: 5,
    avgDays: 56,
    tags: ['DSA', 'very hard', 'algorithms', 'PA', 'Python'],
    redditKeywords: ['C950', 'DSA 2 WGU', 'data structures 2'],
    programs: ['BSCS'],
    prerequisites: ['C949'],
  },
  {
    id: 'D286',
    code: 'D286',
    name: 'Java Fundamentals',
    creditUnits: 3,
    category: 'CS Core',
    type: 'PA',
    difficulty: 3,
    avgDays: 28,
    tags: ['Java', 'programming', 'PA'],
    redditKeywords: ['D286', 'Java fundamentals WGU'],
    programs: ['BSCS'],
  },
  {
    id: 'D287',
    code: 'D287',
    name: 'Java Frameworks',
    creditUnits: 3,
    category: 'CS Core',
    type: 'PA',
    difficulty: 4,
    avgDays: 35,
    tags: ['Java', 'Spring', 'frameworks', 'PA'],
    redditKeywords: ['D287', 'Java frameworks WGU', 'Spring Boot WGU'],
    programs: ['BSCS'],
    prerequisites: ['D286'],
  },
  {
    id: 'C867',
    code: 'C867',
    name: 'Scripting and Programming Applications',
    creditUnits: 3,
    category: 'CS Core',
    type: 'PA',
    difficulty: 3,
    avgDays: 21,
    tags: ['C++', 'programming', 'PA'],
    redditKeywords: ['C867', 'scripting applications WGU', 'C++ WGU'],
    programs: ['BSCS'],
  },
  {
    id: 'D191',
    code: 'D191',
    name: 'Advanced Data Management',
    creditUnits: 3,
    category: 'CS Core',
    type: 'PA',
    difficulty: 3,
    avgDays: 28,
    tags: ['SQL', 'database', 'PA', 'PostgreSQL'],
    redditKeywords: ['D191', 'advanced data management WGU', 'SQL WGU'],
    programs: ['BSCS', 'BSIT'],
  },
];

// Helper: get courses by program
export const getCoursesByProgram = (programId) =>
  COURSES.filter((c) => c.programs.includes(programId));

// Helper: difficulty label
export const difficultyLabel = (n) =>
  ['', 'Very Easy', 'Easy', 'Moderate', 'Hard', 'Very Hard'][n] || 'Unknown';

// Helper: difficulty color
export const difficultyColor = (n) => {
  const map = { 1: '#4ade80', 2: '#86efac', 3: '#fb923c', 4: '#f87171', 5: '#dc2626' };
  return map[n] || '#8892a4';
};

// WGU term info
export const WGU_TERM = {
  months: 6,
  costPerTerm: 4035, // approximate 2024 undergrad cost
};
