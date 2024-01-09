export default function getListStudentIds(listArg = []) {
  let listA = [];
  if (listArg instanceof Array) {
    listA = listArg.map((val) => val.id);
  }
  return listA;
}
