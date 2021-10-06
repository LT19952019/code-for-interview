function flattern (arr) {
    let result = [];

    for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flattern(arr[i]))
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

function flattern2 (arr) {
    return arr.reduce(function (pre, cur) {
        return pre.concat(Array.isArray(cur) ? flattern(cur) :cur)
    },[])
}