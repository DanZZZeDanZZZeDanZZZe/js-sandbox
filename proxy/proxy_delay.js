function delay(f, ms) {
  return new Proxy(f, {
    apply(f, thisArg, args) {
      setTimeout(() => {
        f.apply(thisArg, args), ms
      })
    }
  })
}

function sayHi(user) {
  console.log(`Hello, ${user}!`)
}

sayHi = delay(sayHi, 3000)

console.log(sayHi.length)

sayHi("Vanya")