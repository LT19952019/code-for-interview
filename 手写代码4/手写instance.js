function newInstance (left, right) {
  let proto = Object.getPrototypeOf(left),
      prototype = right.prototype;

  while (true) {
    if(proto === prototype) return true
    if(!proto) return false
    proto = Object.getPrototypeOf(proto)
  }

}