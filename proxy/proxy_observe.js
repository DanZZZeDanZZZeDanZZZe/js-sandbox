function makeObservable(target) {
  target.handlers = []
  
  target.observe = handler => {
    target.handlers.push(handler)
  }
  
  return new Proxy(target, {
    set(target, prop, value) {
      const success = Reflect.set(...arguments)
      if (success) {
        target.handlers.forEach(handler => handler(prop, value))
      }
    }
  })
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
})

user.observe((key, value) => {
  console.log(`HY ${key}=${value}`);
});

user.name = "John";