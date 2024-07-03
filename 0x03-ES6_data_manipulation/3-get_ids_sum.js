export default function getStudentIdsSum(listOfStudents) {
  const sumId = listOfStudents.reduce((acc, { id }) => acc + id, 0);
  return sumId;
}
