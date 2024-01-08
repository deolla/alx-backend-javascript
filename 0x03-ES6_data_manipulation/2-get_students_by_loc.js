export default function getStudentsByLocation(student, city) {
  return student.filter((cunt) => cunt.location === city);
}
