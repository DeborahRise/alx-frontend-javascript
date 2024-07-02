export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const gradedArray = listOfStudents.map((lOS) => {
    const temp = newGrades.filter((nG) => nG.studentId === lOS.id);
    return {
      ...lOS,
      grade: temp.length > 0 ? temp[0].grade : 'N/A',
    };
  });
  const updatedarray = gradedArray.filter((gA) => gA.location === city);
  return updatedarray;
}
