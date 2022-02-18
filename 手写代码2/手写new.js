function myNew () {
  let newObj = null
  let constructor = Array.prototype.shift.call(arguments)
  let result = null

  if (typeof constructor !== "function") {
    console.error("type error");
    return;
  }

  newObj = Object.create(constructor.prototype)
  result = constructor.apply(newObj, arguments)
  let flag = result && (typeof result === "object" || typeof result === "function");
  return flag ? result : newObject;
}