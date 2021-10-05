function _new() {
    let newObj = null
    let constructor = Array.prototype.shift.call(arguments)
    let result = null

    if(typeof constructor !== "function") {
        console.error("typr error")
        return
    }
    newObj = Object.create(constructor.prototype)
    result = constructor.apply(newObj, arguments)
    let flag = result && (typeof result === "object" || typeof result === "function");
    // 判断返回结果
    return flag ? result : newObject;
}