Function.prototype.myApply = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  
  let result = null

  context = context || window

  context.fn = this;

  if(arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()s
  }
  delete context.fn
  return result
}