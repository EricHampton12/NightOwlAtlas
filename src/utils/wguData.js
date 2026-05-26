// WGU Course Data - Seeded with popular degree programs
// Each course has: id, code, name, creditUnits, type, difficulty, avgDays, tags

export const DEGREE_PROGRAMS = {
  BSCS: {
    id: 'BSCS',
    name: 'B.S. Computer Science',
    totalCUs: 124,
    categories: ['General Education', 'Core IT', 'CS Core', 'Math', 'Electives'],
  },
  BSIT: {
    id: 'BSIT',
    name: 'B.S. Information Technology',
    totalCUs: 120,
    categories: ['General Education', 'Core IT', 'IT Core', 'Electives'],
  },
  BSBA: {
    id: 'BSBA',
    name: 'B.S. Business Administration',
    totalCUs: 120,
    categories: ['General Education', 'Business Core', 'Electives'],
  },
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
