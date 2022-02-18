function curry(fn, args) {
  let length = fn.length;
  args = args || []

  return function() {
    let subArgs = args.slice(0);

    for(let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i])
    }

    if( subArgs.length >= length) {
      return fn.apply(this, subArgs);
    } else {
      return curry.call(this, fn, subArgs)
    }
  }
}

function add (...args) {
  return args.reduce((a,b) => a + b)
}

function currying (fn) {
  let args = []
  return function temp (...newArgs) {
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