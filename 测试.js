let map = new Map()
map.set(1,1)
map.set(2,1)
let a = map.get(1)
map.set(1, a+1)
 a = map.get(1)
map.set(1, a+1)
// console.log(map
// )
for(var value of map.values()) {
    if(value > 1) {
        console.log(map[value])
    }
}
