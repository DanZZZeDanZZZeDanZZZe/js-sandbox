export function attach(prefix, classes) {
  return classes
      .trim()
      .split(' ')
      .map(c => `${prefix}:${c}`)
      .join(' ')
}