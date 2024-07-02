// import getListStudents from './0-get_list_students'

// arrObjs = getListStudents();
export default function getListStudentIds(arrObjs) {
  if (!(arrObjs instanceof Array)) {
    return [];
  }
  const arrIds = arrObjs.map((arrObj) => arrObj.id);
  return arrIds;
}
