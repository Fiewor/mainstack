//   filter: {
//      name: String
//      value: [String]
// }

// currently only filters based on a single filtering criteria e.g. status
const filterList = (list, filter) => {
  if (!list || !list.length) return [];
  if (!filter) return list;
  const { name, value } = filter;
  if (!name || !value) return list;
  return list.filter((item) => value.includes(item[name]));
};

export default filterList;
