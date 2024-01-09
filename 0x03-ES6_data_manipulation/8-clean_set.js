export default function cleanSet(set = new Set(), wrd) {
  return Array.from(set).filter((item) => item.startsWith(wrd)).join('-');
}
