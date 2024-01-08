export default function getListStudentIds(listArg = []) {
  if (typeof listArg[0] === 'object') {
    const listA = listArg.map((val) => val.id);
    return listA;
  }
  return [];
}
