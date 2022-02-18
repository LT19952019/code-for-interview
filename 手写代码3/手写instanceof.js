function myInstanceof (left, right) {
  let prototo = Object.getPrototypeOf(left),
      prototype = right.prototype;

  while (true) {
    if(!prototo) return false;
    if(prototo === prototype) return true

    prototo = Object.getPrototypeOf(prototo)
  }
}