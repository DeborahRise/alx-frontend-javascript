export default function getStudentIdsSum(listOfStudents) {
  const sumId = listOfStudents.reduce((acc, curvalue) => acc + curvalue.id, 0);
  return sumId;
}
