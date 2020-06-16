
function createRange(start, end) {
  return new Proxy({start, end}, {
    has(target, prop) {
      return prop >= target.start && prop <= target.end
    }
  }) 
}

const range = createRange(6, 7)

console.log(5 in range)
console.log(7 in range)
console.log(9 in range)