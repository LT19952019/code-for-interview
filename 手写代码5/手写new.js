function myNew (fn) {
   let newObj = {};
   let args = Array.prototype.shift.call(arguments);
   newObj.__proto__ = fn.prototype
   fn.apply(newObj, args)
   return newObj
}