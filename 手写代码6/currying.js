function add (...args) {
  return args.reduce((a,b) => a + b)
}

function curring (fn) {
  let args = [];
  return function  temp (...newArgs) {
    if(newArgs.length) {
      args = [
        ...args,
        ...newArgs
      ]
      return temp
    } else {
      let val = fn.apply(this, args)
      args = []
      return val
    }
  }
}