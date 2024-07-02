export default function getStudentsByLocation(listOfStudents, city) {
  const newList = listOfStudents.filter((listOfStudent) => listOfStudent.location === city);
  return newList;
}
