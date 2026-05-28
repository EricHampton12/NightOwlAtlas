import { COURSES, DEGREE_PROGRAMS } from "../../src/utils/wguData.js";

const byCode = new Map();

for (const course of COURSES) {
  const code = course.code;

  if (!byCode.has(code)) {
    byCode.set(code, []);
  }

  byCode.get(code).push(course);
}

const duplicates = [...byCode.entries()].filter(([, courses]) => courses.length > 1);

console.log("Degree programs:", Object.keys(DEGREE_PROGRAMS).length);
console.log("Course records:", COURSES.length);
console.log("Unique course codes:", byCode.size);
console.log("Duplicate course codes:", duplicates.length);

for (const [code, courses] of duplicates) {
  console.log(`\n${code}`);
  for (const course of courses) {
    console.log(`- id=${course.id} | name=${course.name} | programs=${course.programs?.join(",")}`);
  }
}