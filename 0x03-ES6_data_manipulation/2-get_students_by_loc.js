export default function getStudentsByLocation(listOfStudents, city) {
  const newList = listOfStudents.filter(({ location }) => location === city);
  return newList;
}
