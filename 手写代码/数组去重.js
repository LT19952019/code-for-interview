Array.from(new Set (array))

function uniqueArray(array) {
    let map = {}
    let res = []
    for(let i = 0; i< array.length; i++) {
        if(!map.hasOwnProperty([array[i]])) {
            map[array[i]] = 1;
            res.push(array[i])
        }
    }
    return res
}