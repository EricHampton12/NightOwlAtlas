// WGU Course Data
export const DEGREE_PROGRAMS = {
  // ── IT Bachelor's ──────────────────────────────
  BSCS:   { id: 'BSCS',   name: 'B.S. Computer Science',                       level: 'bachelors', college: 'IT',       totalCUs: 124 },
  BSIT:   { id: 'BSIT',   name: 'B.S. Information Technology',                 level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSCIA:  { id: 'BSCIA',  name: 'B.S. Cybersecurity and Information Assurance', level: 'bachelors', college: 'IT',      totalCUs: 120 },
  BSSD:   { id: 'BSSD',   name: 'B.S. Software Development',                   level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSDA:   { id: 'BSDA',   name: 'B.S. Data Analytics',                         level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSUXD:  { id: 'BSUXD',  name: 'B.S. UX Design',                             level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSNET:  { id: 'BSNET',  name: 'B.S. Network Operations and Security',        level: 'bachelors', college: 'IT',       totalCUs: 120 },
  BSCLOUD:{ id: 'BSCLOUD',name: 'B.S. Cloud Computing',                        level: 'bachelors', college: 'IT',       totalCUs: 120 },

  // ── Business Bachelor's ────────────────────────
  BSBA:   { id: 'BSBA',   name: 'B.S. Business Administration',                level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAMG: { id: 'BSBAMG', name: 'B.S. Business Administration – Management',   level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAAC: { id: 'BSBAAC', name: 'B.S. Business Administration – Accounting',   level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAHC: { id: 'BSBAHC', name: 'B.S. Business Administration – Healthcare Management', level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSBAMK: { id: 'BSBAMK', name: 'B.S. Business Administration – Marketing',    level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSHIM:  { id: 'BSHIM',  name: 'B.S. Health Information Management',          level: 'bachelors', college: 'Business', totalCUs: 120 },
  BSPM:   { id: 'BSPM',   name: 'B.S. Project Management',                     level: 'bachelors', college: 'Business', totalCUs: 120 },

  // ── IT Master's ────────────────────────────────
  MSITM:  { id: 'MSITM',  name: 'M.S. Information Technology Management',      level: 'masters',   college: 'IT',       totalCUs: 30 },
  MSDA:   { id: 'MSDA',   name: 'M.S. Data Analytics',                         level: 'masters',   college: 'IT',       totalCUs: 36 },
  MSCIA:  { id: 'MSCIA',  name: 'M.S. Cybersecurity and Information Assurance', level: 'masters',  college: 'IT',       totalCUs: 30 },

  // ── Business Master's ──────────────────────────
  MBA:    { id: 'MBA',    name: 'Master of Business Administration',            level: 'masters',   college: 'Business', totalCUs: 30 },
  MSHRM:  { id: 'MSHRM', name: 'M.S. Human Resource Management',               level: 'masters',   college: 'Business', totalCUs: 30 },
  MSMBA:  { id: 'MSMBA', name: 'M.S. Management and Leadership',               level: 'masters',   college: 'Business', totalCUs: 30 },
};

export const COURSES = [

  // === GENERAL EDUCATION (ALL programs) ===
  {
    id: 'C100', code: 'C100', name: 'Introduction to Humanities',
    creditUnits: 3, category: 'General Education', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['humanities', 'easy', 'OA only'],
    redditKeywords: ['C100', 'humanities WGU'],
    programs: ['ALL'],
  },
  {
    id: 'C455', code: 'C455', name: 'English Composition I',
    creditUnits: 3, category: 'General Education', type: 'PA', difficulty: 2, avgDays: 21,
    tags: ['writing', 'PA', 'essays'],
    redditKeywords: ['C455', 'English Composition WGU'],
    programs: ['ALL'],
  },
  {
    id: 'C456', code: 'C456', name: 'English Composition II',
    creditUnits: 3, category: 'General Education', type: 'PA', difficulty: 3, avgDays: 28,
    tags: ['writing', 'PA', 'research'],
    redditKeywords: ['C456', 'English Comp 2 WGU'],
    programs: ['ALL'],
    prerequisites: ['C455'],
  },
  {
    id: 'C164', code: 'C164', name: 'Introduction to Physical and Historical Geology',
    creditUnits: 3, category: 'General Education', type: 'OA', difficulty: 2, avgDays: 10,
    tags: ['science', 'easy', 'natural science'],
    redditKeywords: ['C164', 'geology WGU'],
    programs: ['ALL'],
  },

  // === MATH ===
  {
    id: 'C955', code: 'C955', name: 'Applied Probability and Statistics',
    creditUnits: 3, category: 'Math', type: 'OA', difficulty: 3, avgDays: 21,
    tags: ['math', 'statistics', 'quantitative'],
    redditKeywords: ['C955', 'statistics WGU', 'applied probability'],
    programs: ['BSCS', 'BSIT', 'BSCIA', 'BSCLOUD', 'BSDA', 'BSNET', 'BSUXD'],
  },
  {
    id: 'C958', code: 'C958', name: 'Calculus I',
    creditUnits: 4, category: 'Math', type: 'OA', difficulty: 4, avgDays: 35,
    tags: ['math', 'calculus', 'hard'],
    redditKeywords: ['C958', 'calculus WGU'],
    programs: ['BSCS'],
  },
  {
    id: 'C959', code: 'C959', name: 'Discrete Mathematics I',
    creditUnits: 4, category: 'Math', type: 'OA', difficulty: 4, avgDays: 42,
    tags: ['math', 'discrete math', 'hard', 'proof'],
    redditKeywords: ['C959', 'discrete math WGU'],
    programs: ['BSCS'],
    prerequisites: ['C958'],
  },
  {
    id: 'C958-ALG', code: 'C958', name: 'Applied Algebra',
    creditUnits: 3, category: 'Math', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['math', 'algebra'],
    redditKeywords: ['C958', 'applied algebra WGU'],
    programs: ['BSSD'],
  },

  // === CORE IT ===
  {
    id: 'D315', code: 'D315', name: 'Network and Security Foundations',
    creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['networking', 'security', 'easy', 'CompTIA'],
    redditKeywords: ['D315', 'network security foundations WGU'],
    programs: ['BSCS', 'BSIT', 'BSSD', 'BSCIA', 'BSCLOUD', 'BSDA', 'BSNET'],
  },
  {
    id: 'D316', code: 'D316', name: 'IT Applications',
    creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 1, avgDays: 7,
    tags: ['IT basics', 'very easy', 'quick win'],
    redditKeywords: ['D316', 'IT applications WGU'],
    programs: ['BSCS', 'BSIT', 'BSSD', 'BSCIA', 'BSCLOUD', 'BSDA', 'BSNET'],
  },
  {
    id: 'C173', code: 'C173', name: 'Scripting and Programming Foundations',
    creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['programming', 'scripting', 'beginner'],
    redditKeywords: ['C173', 'scripting foundations WGU'],
    programs: ['BSCS', 'BSIT', 'BSSD', 'BSCIA', 'BSCLOUD', 'BSDA', 'BSNET'],
  },

  // === CS CORE (BSCS) ===
  {
    id: 'C949', code: 'C949', name: 'Data Structures and Algorithms I',
    creditUnits: 3, category: 'CS Core', type: 'OA', difficulty: 4, avgDays: 42,
    tags: ['DSA', 'hard', 'algorithms', 'programming'],
    redditKeywords: ['C949', 'data structures WGU', 'DSA WGU'],
    programs: ['BSCS'],
    prerequisites: ['C173'],
  },
  {
    id: 'C950', code: 'C950', name: 'Data Structures and Algorithms II',
    creditUnits: 4, category: 'CS Core', type: 'PA', difficulty: 5, avgDays: 56,
    tags: ['DSA', 'very hard', 'algorithms', 'PA', 'Python'],
    redditKeywords: ['C950', 'DSA 2 WGU', 'data structures 2'],
    programs: ['BSCS'],
    prerequisites: ['C949'],
  },
  {
    id: 'D286', code: 'D286', name: 'Java Fundamentals',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 28,
    tags: ['Java', 'programming', 'PA'],
    redditKeywords: ['D286', 'Java fundamentals WGU'],
    programs: ['BSCS', 'BSSD'],
  },
  {
    id: 'D287', code: 'D287', name: 'Java Frameworks',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 4, avgDays: 35,
    tags: ['Java', 'Spring', 'frameworks', 'PA'],
    redditKeywords: ['D287', 'Java frameworks WGU', 'Spring Boot WGU'],
    programs: ['BSCS', 'BSSD'],
    prerequisites: ['D286'],
  },
  {
    id: 'C867', code: 'C867', name: 'Scripting and Programming Applications',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 21,
    tags: ['C++', 'programming', 'PA'],
    redditKeywords: ['C867', 'scripting applications WGU', 'C++ WGU'],
    programs: ['BSCS'],
  },
  {
    id: 'D191', code: 'D191', name: 'Advanced Data Management',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 28,
    tags: ['SQL', 'database', 'PA', 'PostgreSQL'],
    redditKeywords: ['D191', 'advanced data management WGU', 'SQL WGU'],
    programs: ['BSCS', 'BSIT', 'BSSD', 'BSDA'],
  },

  // === BSSD - Software Development ===
  {
    id: 'D278', code: 'D278', name: 'Scripting and Programming - Foundations',
    creditUnits: 3, category: 'Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['programming', 'scripting', 'beginner'],
    redditKeywords: ['D278', 'scripting foundations WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D279', code: 'D279', name: 'Introduction to Programming in Python',
    creditUnits: 3, category: 'Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['Python', 'programming', 'beginner'],
    redditKeywords: ['D279', 'Python WGU', 'intro programming WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D280', code: 'D280', name: 'IT Leadership Foundations',
    creditUnits: 3, category: 'Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['leadership', 'IT management'],
    redditKeywords: ['D280', 'IT leadership WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D276', code: 'D276', name: 'Web Development Foundations',
    creditUnits: 3, category: 'Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['web', 'HTML', 'CSS', 'beginner'],
    redditKeywords: ['D276', 'web development foundations WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D197', code: 'D197', name: 'Version Control',
    creditUnits: 1, category: 'Core', type: 'OA', difficulty: 1, avgDays: 5,
    tags: ['git', 'version control', 'quick win'],
    redditKeywords: ['D197', 'version control WGU', 'git WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D277', code: 'D277', name: 'Front-End Web Development',
    creditUnits: 3, category: 'Core', type: 'PA', difficulty: 3, avgDays: 21,
    tags: ['web', 'frontend', 'JavaScript', 'PA'],
    redditKeywords: ['D277', 'front end web development WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D316-BSSD', code: 'D316', name: 'Introduction to IT',
    creditUnits: 4, category: 'Core', type: 'OA', difficulty: 1, avgDays: 7,
    tags: ['IT basics', 'easy'],
    redditKeywords: ['D316', 'intro IT WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C164-BSSD', code: 'C164', name: 'Natural Science Lab',
    creditUnits: 2, category: 'General Education', type: 'OA', difficulty: 1, avgDays: 7,
    tags: ['science', 'easy'],
    redditKeywords: ['C164', 'natural science WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C949-BSSD', code: 'C949', name: 'Data Structures and Algorithms I',
    creditUnits: 4, category: 'CS Core', type: 'OA', difficulty: 4, avgDays: 42,
    tags: ['DSA', 'hard', 'algorithms'],
    redditKeywords: ['C949', 'data structures WGU', 'DSA WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D281', code: 'D281', name: 'Introduction to Systems Thinking',
    creditUnits: 3, category: 'Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['systems', 'thinking'],
    redditKeywords: ['D281', 'systems thinking WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D426', code: 'D426', name: 'Data Management - Foundations',
    creditUnits: 3, category: 'CS Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['database', 'SQL', 'data'],
    redditKeywords: ['D426', 'data management foundations WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D427', code: 'D427', name: 'Data Management - Applications',
    creditUnits: 4, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 28,
    tags: ['database', 'SQL', 'PA'],
    redditKeywords: ['D427', 'data management applications WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D282', code: 'D282', name: 'JavaScript Programming',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 21,
    tags: ['JavaScript', 'programming', 'PA'],
    redditKeywords: ['D282', 'JavaScript WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D333', code: 'D333', name: 'Ethics in Technology',
    creditUnits: 3, category: 'General Education', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['ethics', 'easy'],
    redditKeywords: ['D333', 'ethics technology WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D284', code: 'D284', name: 'User Interface Design',
    creditUnits: 3, category: 'CS Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['UI', 'design', 'frontend'],
    redditKeywords: ['D284', 'UI design WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D283', code: 'D283', name: 'User Experience Design',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 21,
    tags: ['UX', 'design', 'PA'],
    redditKeywords: ['D283', 'UX design WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C220', code: 'C220', name: 'Health, Fitness, and Wellness',
    creditUnits: 4, category: 'General Education', type: 'OA', difficulty: 1, avgDays: 7,
    tags: ['health', 'easy', 'quick win'],
    redditKeywords: ['C220', 'health fitness WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D288', code: 'D288', name: 'Cloud Foundations',
    creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['cloud', 'AWS', 'easy'],
    redditKeywords: ['D288', 'cloud foundations WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D289', code: 'D289', name: 'Hardware and Operating Systems Essentials',
    creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['hardware', 'OS', 'CompTIA'],
    redditKeywords: ['D289', 'hardware operating systems WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C176', code: 'C176', name: 'Business of IT - Project Management',
    creditUnits: 4, category: 'Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['project management', 'IT', 'PMP'],
    redditKeywords: ['C176', 'project management WGU', 'business IT WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D290', code: 'D290', name: 'Back-End Programming',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 4, avgDays: 35,
    tags: ['backend', 'programming', 'PA'],
    redditKeywords: ['D290', 'back end programming WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C456-BSSD', code: 'C456', name: 'Composition: Successful Self-Expression',
    creditUnits: 3, category: 'General Education', type: 'PA', difficulty: 2, avgDays: 21,
    tags: ['writing', 'PA'],
    redditKeywords: ['C456', 'composition WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C846', code: 'C846', name: 'Business of IT - Applications',
    creditUnits: 4, category: 'Core', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['IT management', 'ITIL'],
    redditKeywords: ['C846', 'business IT applications WGU', 'ITIL WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C285', code: 'C285', name: 'Introduction to Physical and Human Geography',
    creditUnits: 3, category: 'General Education', type: 'OA', difficulty: 1, avgDays: 7,
    tags: ['geography', 'easy', 'quick win'],
    redditKeywords: ['C285', 'geography WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D291', code: 'D291', name: 'Advanced Java',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 4, avgDays: 35,
    tags: ['Java', 'advanced', 'PA'],
    redditKeywords: ['D291', 'advanced Java WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D292', code: 'D292', name: 'Software Security and Testing',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 28,
    tags: ['security', 'testing', 'PA'],
    redditKeywords: ['D292', 'software security WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D293', code: 'D293', name: 'Technical Communication',
    creditUnits: 3, category: 'General Education', type: 'PA', difficulty: 2, avgDays: 21,
    tags: ['writing', 'technical', 'PA'],
    redditKeywords: ['D293', 'technical communication WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D294', code: 'D294', name: 'Software Design and Quality Assurance',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 28,
    tags: ['software design', 'QA', 'PA'],
    redditKeywords: ['D294', 'software design WGU', 'QA WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'C963', code: 'C963', name: 'American Politics and the US Constitution',
    creditUnits: 3, category: 'General Education', type: 'OA', difficulty: 2, avgDays: 14,
    tags: ['civics', 'easy'],
    redditKeywords: ['C963', 'american politics WGU', 'US constitution WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D295', code: 'D295', name: 'Software Engineering',
    creditUnits: 4, category: 'CS Core', type: 'PA', difficulty: 4, avgDays: 42,
    tags: ['software engineering', 'PA', 'hard'],
    redditKeywords: ['D295', 'software engineering WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D296', code: 'D296', name: 'Mobile Application Development (Android)',
    creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 4, avgDays: 35,
    tags: ['Android', 'mobile', 'PA', 'Kotlin'],
    redditKeywords: ['D296', 'mobile development WGU', 'Android WGU'],
    programs: ['BSSD'],
  },
  {
    id: 'D297', code: 'D297', name: 'Software Engineering Capstone',
    creditUnits: 4, category: 'Capstone', type: 'PA', difficulty: 5, avgDays: 56,
    tags: ['capstone', 'PA', 'very hard', 'final'],
    redditKeywords: ['D297', 'software engineering capstone WGU'],
    programs: ['BSSD'],
  },
];

// Helper: get courses by program
export const getCoursesByProgram = (programId) =>
  COURSES.filter(c => c.programs.includes(programId) || c.programs.includes('ALL'));

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
  costPerTerm: 4035,
};