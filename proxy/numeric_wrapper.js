const MESSAGE = 'You cannot put a number in a number array'

let array = [1,2,3,4]

function numericWrapper(arr) {
  return new Proxy(arr, {
    set(arr, prop, value) {
      if (typeof value === 'number') {
        arr[prop] = value
        return true
      } else {
        return false
      }
    }
  })
}

array = numericWrapper(array)

array.push(5) 
console.log(array)
array.push('Hy')
console.log(array)




