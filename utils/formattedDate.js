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
  const d = new Date(date)
  return `${months[d.getMonth()]} ${d.getDate()+1}, ${d.getFullYear()}`
}
