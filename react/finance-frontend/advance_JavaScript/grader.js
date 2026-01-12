const studentScores = [60, 82, 20, 98, 39];
function getLetterGrade(score) {
    if (score >= 80) {
        return 'A';
    } else if (score >= 70) {
        return 'B';
    } else if (score >= 60) {
        return 'C';
    } else if (score >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

function calculateGrades(scores) {
    const letterGrades = scores.map(getLetterGrade);

    const gradeCounts = letterGrades.reduce((acc, grade) => {
        acc[grade] = (acc[grade] || 0) + 1;
        return acc;
    }, {A: 0, B: 0, C: 0, D: 0, F: 0}); // Initialize with all possible grades

    return gradeCounts;
}

const gradeDistribution = calculateGrades(studentScores);
console.log("Grade Distribution: ", gradeDistribution);

const totalScore = studentScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / studentScores.length;

console.log("Total Score: ", totalScore);
console.log("Average Score: ", averageScore);

// Array ของ student objects
const students = [
    {"id": 1, "name": "Alice", "score": 63},
    {"id": 2, "name": "Bob", "score": 80}
];

// ใช้ map function เพื่อสร้าง array ใหม่สำหรับ dropdown
// โดยมี Key, Value และ Text
const dropdownData = students.map(student => ({
    key: student.id,           // Key: ใช้ id เป็น unique identifier
    value: student.id,         // Value: ค่าที่จะถูกส่งเมื่อเลือก (ใช้ id)
    text: `${student.name} (Score: ${student.score})`  // Text: ข้อความที่แสดงใน dropdown
}));

console.log("Dropdown Data: ", dropdownData);

// opptional แสดงแค่ชื่อ
const dropdownDataSimple = students.map(student => ({
    key: student.id,
    value: student.id,
    text: student.name
}));

console.log("Dropdown Data (Simple): ", dropdownDataSimple);

