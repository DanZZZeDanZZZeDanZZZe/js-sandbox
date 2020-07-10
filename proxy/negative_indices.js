let arr = ['a','b','c','d']

console.log()

function negIndicesWrap(arr) {
  return new Proxy(arr, {
    get(target, prop, reciver) {
      if (prop < 0) prop = target.length + +prop
      return Reflect.get(target, prop, reciver)
    }
  })
}

arr = negIndicesWrap(arr)

console.log(arr[2])
console.log(arr[-3])