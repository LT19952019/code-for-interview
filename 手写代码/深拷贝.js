JSON.parse(JSON.stringify())
//这个方法可以简单粗暴的实现深拷贝，但是还存在问题，拷贝的对象中如果有函数，undefined，symbol，当使用过JSON.stringify()进行处理之后，都会消失。

function DeepClone(object) {
    if (!Object || typeof object !== "object") return
     
    let newObject = Array.isArray(object) ? [] : {};

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[key] = typeof object[key] === "object"? DeepClone(object[key]) : object
        }
    }
    return newObject
}