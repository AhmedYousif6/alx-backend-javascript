export default function getStudentsByLocation(listObj, city){
  return listObj.filter((obj) => obj.location === city);
}
