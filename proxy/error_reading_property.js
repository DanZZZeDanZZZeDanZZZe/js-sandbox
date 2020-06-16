const ERROR_MESSAGE = 'Error: this property does not exist'

function errorWrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      if (prop in target) {
        return Reflect.get(target, prop, receiver)
      } 
      console.log('sdsd')
      throw new ReferenceError(ERROR_MESSAGE)
    }
  })
}

let user = {
  name: 'John'
}

user = errorWrap(user);

console.log(user.name)
console.log(user.age)