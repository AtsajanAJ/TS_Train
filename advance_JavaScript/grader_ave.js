const students = [ {"name" : "Alice", "score" : 63}, {"name" : "Bob", "score" : 80}]
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
const numberOfStudents = students.length;
const averageScore = totalScore / numberOfStudents;

console.log(`Totalscore: ${totalScore}`);
console.log(`Average Score: ${averageScore}`);

