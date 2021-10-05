function _instanceof (left, right){
    let proto = Object.getPrototypeOf(left)
    let prototype = right.prototype

    while(true){
        if(proto === prototype) return true
        if(!proto) return false
        proto = Object.getPrototypeOf(proto)
    }
}