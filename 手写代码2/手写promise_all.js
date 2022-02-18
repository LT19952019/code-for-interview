function PromiseAll (promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
      throw new TypeError ("Error")
    }
    let resolvedCount = 0,
        promiseNum = promises.length,
        resolveResult = [];
    for(let i =0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value => {
        resolveResult[i] = value
        resolvedCount ++;
        if(resolvedCount === promiseNum) {
          return resolve(resolveResult)
        }
      }, error => {
        return reject(error)
      })
    }
  })
}