export function dateToArray(date) {
  const dateFormat = [date.getMonth() + 1, date.getDate(), date.getFullYear()];
  return dateFormat;
}

export function splitDate(date) {
  const dateFormat = date.split("/");
  return dateFormat;
}
