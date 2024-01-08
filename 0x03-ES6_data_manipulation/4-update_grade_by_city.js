export default function updateStudentGradeByCity(students = [], city = '', newGrades = []) {
  const filtered = students.filter((obj) => obj.location === city);
  return newGrades.map((obj) => {
    const values = [];
    for (const student of filtered) {
      if (student.id === obj.id) {
        student.grade = obj.grade;
      } else {
        student.grade = 'N/A';
      }
      values.push(student);
    }
    return values;
  });
}
