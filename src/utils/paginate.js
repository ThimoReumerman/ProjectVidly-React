import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;

  //Create lodash object in order to chain commands, and return it as a normal array using value()
  return _(items).slice(startIndex).take(pageSize).value();
}
