function deepClone (object) {
  if(typeof object !== "object" || !object) return;

  let newObj = Array.isArray(object) ? [] : {};

  for(let key of object) {
    if(object.hasOwnProperty(key)) {
      newObj[key] = typeof(object(key)) === "object" ? deepClone(object(key)) : object(key)
    }
  }
  
  return newObj
}