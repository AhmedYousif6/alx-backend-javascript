export default function getStudentIdsSum(listObj){
  return listObj.reduce((acc, cur) => acc + cur.id, 0);
}
