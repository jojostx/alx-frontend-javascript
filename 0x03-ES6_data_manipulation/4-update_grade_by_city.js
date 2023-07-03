export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      let grade = newGrades.find((grade) => grade.studentId === student.id);
      grade = grade !== undefined ? grade.grade : 'N/A';

      return { ...student, grade };
    });
}
