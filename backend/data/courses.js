// Mirror of frontend wguData.js for backend use
// In production, this lives in a database

const DEGREE_PROGRAMS = {
  BSCS: { id: 'BSCS', name: 'B.S. Computer Science', totalCUs: 124 },
  BSIT: { id: 'BSIT', name: 'B.S. Information Technology', totalCUs: 120 },
  BSBA: { id: 'BSBA', name: 'B.S. Business Administration', totalCUs: 120 },
};

const COURSES = [
  { id: 'C100', code: 'C100', name: 'Introduction to Humanities', creditUnits: 3, category: 'General Education', type: 'OA', difficulty: 2, avgDays: 14, tags: ['humanities', 'easy'], redditKeywords: ['C100', 'humanities WGU'], programs: ['BSCS', 'BSIT', 'BSBA'] },
  { id: 'C455', code: 'C455', name: 'English Composition I', creditUnits: 3, category: 'General Education', type: 'PA', difficulty: 2, avgDays: 21, tags: ['writing', 'PA'], redditKeywords: ['C455'], programs: ['BSCS', 'BSIT', 'BSBA'] },
  { id: 'C456', code: 'C456', name: 'English Composition II', creditUnits: 3, category: 'General Education', type: 'PA', difficulty: 3, avgDays: 28, tags: ['writing', 'PA'], redditKeywords: ['C456'], programs: ['BSCS', 'BSIT', 'BSBA'], prerequisites: ['C455'] },
  { id: 'C955', code: 'C955', name: 'Applied Probability and Statistics', creditUnits: 3, category: 'Math', type: 'OA', difficulty: 3, avgDays: 21, tags: ['math', 'statistics'], redditKeywords: ['C955'], programs: ['BSCS', 'BSIT'] },
  { id: 'C958', code: 'C958', name: 'Calculus I', creditUnits: 4, category: 'Math', type: 'OA', difficulty: 4, avgDays: 35, tags: ['math', 'calculus'], redditKeywords: ['C958'], programs: ['BSCS'] },
  { id: 'C959', code: 'C959', name: 'Discrete Mathematics I', creditUnits: 4, category: 'Math', type: 'OA', difficulty: 4, avgDays: 42, tags: ['math', 'discrete math'], redditKeywords: ['C959'], programs: ['BSCS'], prerequisites: ['C958'] },
  { id: 'D315', code: 'D315', name: 'Network and Security Foundations', creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 2, avgDays: 14, tags: ['networking', 'security'], redditKeywords: ['D315'], programs: ['BSCS', 'BSIT'] },
  { id: 'D316', code: 'D316', name: 'IT Applications', creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 1, avgDays: 7, tags: ['easy', 'quick win'], redditKeywords: ['D316'], programs: ['BSCS', 'BSIT'] },
  { id: 'C173', code: 'C173', name: 'Scripting and Programming Foundations', creditUnits: 3, category: 'Core IT', type: 'OA', difficulty: 2, avgDays: 14, tags: ['programming'], redditKeywords: ['C173'], programs: ['BSCS', 'BSIT'] },
  { id: 'C949', code: 'C949', name: 'Data Structures and Algorithms I', creditUnits: 3, category: 'CS Core', type: 'OA', difficulty: 4, avgDays: 42, tags: ['DSA', 'hard'], redditKeywords: ['C949', 'DSA WGU'], programs: ['BSCS'], prerequisites: ['C173'] },
  { id: 'C950', code: 'C950', name: 'Data Structures and Algorithms II', creditUnits: 4, category: 'CS Core', type: 'PA', difficulty: 5, avgDays: 56, tags: ['DSA', 'very hard'], redditKeywords: ['C950'], programs: ['BSCS'], prerequisites: ['C949'] },
  { id: 'D286', code: 'D286', name: 'Java Fundamentals', creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 28, tags: ['Java', 'PA'], redditKeywords: ['D286'], programs: ['BSCS'] },
  { id: 'D287', code: 'D287', name: 'Java Frameworks', creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 4, avgDays: 35, tags: ['Java', 'Spring'], redditKeywords: ['D287'], programs: ['BSCS'], prerequisites: ['D286'] },
  { id: 'D191', code: 'D191', name: 'Advanced Data Management', creditUnits: 3, category: 'CS Core', type: 'PA', difficulty: 3, avgDays: 28, tags: ['SQL', 'database'], redditKeywords: ['D191'], programs: ['BSCS', 'BSIT'] },
];

module.exports = { COURSES, DEGREE_PROGRAMS };
