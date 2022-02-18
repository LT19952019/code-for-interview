function myNew(fn) {
  let newObj = {}
  args = arguments.prototype.shift.call(arguments);
  newObj.__proto__ = fn.prototype;
  fn.apply(newObj, args)
  return newObj
}