Function.prototype.MyApply = function(context) {
  if (typeof this !== "function") {
    throw new TypeError('error')
  }

  let result = null;
  context = context || window;
  context.fn = this;
  if(arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn
  }
  delete context.fn
  return result
}