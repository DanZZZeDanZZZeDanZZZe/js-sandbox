let user = {
  name: 'Artem',
  suname: 'Bubov',
  _password: 'qwerty1'
}

const ERROR_MESSAGE = 'access denied'

function wrapInDefence(obj) {
  return new Proxy(obj, {
    get(obj, prop) {
      if (prop.startsWith('_')) {
        throw new Error(ERROR_MESSAGE)
      } else {
        return (prop instanceof Function) ?
            obj[prop].bind(obj) :
            obj[prop]
      } 
    },
    set(obj, prop, value) {
      if (prop.startsWith('_')) {
        throw new Error(ERROR_MESSAGE)
      } else {
        obj[prop] = value
        return true
      }
    },
    ownKeys(obj) {
      return Object.keys(obj).filter(key => !key.startsWith('_'))
    },
    deleteProperty(obj, prop) {
      if (prop.startsWith('_')) {
        throw new Error(ERROR_MESSAGE)
      } else {
        delete obj[prop]    
        return true
      } 
    }
  })
}

user = wrapInDefence(user)

try {
  console.log(user._password)  
} catch (e) {
  console.log(e.message)
}

try {try {
  user._password = "123"  
} catch (e) {
  console.log(e.message)
}
  user._password = "123"  
} catch (e) {
  console.log(e.message)
}

try {
  for (prop in user) {
    console.log(user[prop])
  }  
} catch (e) {
  console.log(e.message)
}