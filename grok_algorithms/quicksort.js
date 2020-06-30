function quicksort(arr) {
  if (arr.length < 2) return arr

  const pivotIndex = Math.floor(Math.random() * arr.length)
  const pivot = arr[pivotIndex]

  const less = arr.filter((item, index) => item <= pivot && index !== pivotIndex)
  const greater = arr.filter((item, index) => item > pivot && index !== pivotIndex)
  
  return [...quicksort(less), pivot, ...quicksort(greater)]
}

const arr = [2,4,6,3,5,7,8,7,2]
console.log('quicksort(arr)', quicksort(arr))
