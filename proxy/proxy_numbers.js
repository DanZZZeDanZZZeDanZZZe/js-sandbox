let numbers = [1,2,3]

numbers = new Proxy(numbers, {
  get(numbers, number) {
    if (number in numbers) {
      return numbers[number]
    } else {
      return 'no such number'
    }
  }
})

console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[12])
 