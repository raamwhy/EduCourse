export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function getInitials(name = '') {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((item) => item[0])
    .join('')
    .toUpperCase()
}

export function formatCapacity(current, total) {
  return `${current}/${total} peserta`
}
