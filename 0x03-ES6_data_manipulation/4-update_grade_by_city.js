export default function updateStudentGradeByCity(students, city, newGrades) {
  /* return students.filter((students) => students.location === city)
        .map((student) => {
            const grades = newGrades.filter((grade) => grade.studentId === student.id);
            return {
                ...student,
                grade: grades.length > 0 ? grades[0].grade : 'N/A',
            }
        }); */
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.filter((grade) => grade.studentId === student.id)[0];
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });
}
