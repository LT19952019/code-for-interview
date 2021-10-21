Function.prototype.Mybind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("error")
  }

  context = context || window

  let args = [...arguments].slice(1),
  fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? this
      : context,
      args.concat(...arguments)
    )
  }
}