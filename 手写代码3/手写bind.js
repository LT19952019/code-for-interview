// Function.prototype.myBind = function(context) {
//   if (typeof this !== "function") {
//     throw new TypeError("Error");
//   }

//   let args = [...arguments].slice(1),
//       fn = this;
//   return function Fn() {
//     return fn.apply(
//       this instanceof Fn ? context,
//           args.concat(...arguments)
//     )
//   }
// }

Function.prototype.myBind = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }
  let args = [...arguments].slice(1)
      fn = this;
  return function Fn() {
    return fn.apply(
      this instanceof Fn ? context :
        args.concat(...arguments)
    )
  }
}