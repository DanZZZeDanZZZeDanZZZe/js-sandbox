export function attach(prefix, classes) {
  return classes
      .trim()
      .split(' ')
      .map(c => `${prefix}:${c}`)
      .join(' ')
}

export function move(arr, currentIndex, newIndex) {
  if (newIndex === currentIndex) return arr
  const [ item ] = arr.splice(currentIndex, 1)
  return insert(arr, item, newIndex)
}

export function insert(arr, item, index = arr.length) {
  const message = 'Index is in invalid range'
  const fn = () => arr.splice(index, 0, item)
  
  if (index > 0) {
    if (index > arr.length) throw new Error(message)
    fn()
    return arr
  } 
  if (index === 0) {
    arr.unshift(item)
    return arr
  }
  if (index === -1) {
    arr.push(item)
    return arr
  }
  if (index * -1 - 1 > arr.length) throw new Error(message)
  index = ++index
  fn()
  return arr
}
