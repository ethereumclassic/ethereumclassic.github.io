const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export default function formattedDate (date) {
  var parts = date.match(/(\d+)/g);
  const d = new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
}
