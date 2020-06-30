function binarySearch(arr, item) {
  let low = 0
  let high = arr.length - 1
  
  while (low <= high) {
    let mid = Math.floor((high + low) / 2) 
    let guess = arr[mid]

    if (guess === item) return mid

    guess < item ?
        low = mid + 1 :
        high = mid - 1
  }
  return null
}

const myArr = [1, 3, 8, 10, 100, 431]

console.log(binarySearch(myArr, 1))
console.log(binarySearch(myArr, 500))
console.log(binarySearch(myArr, 10))