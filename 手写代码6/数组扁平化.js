function flatten(arr) {
  return arr.reduce(function(pre, next){
    return pre.concat(Array.isArray(next) ? flatten(next) : next)  
  }, [])
}