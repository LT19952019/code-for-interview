let p1 = new Promise((resolve, reject) => {
  resolve('成功')
})

let p2 = new Promise((resolve, reject) => {
  resolve('成功2')
})

let p3 = new Promise((resolve, reject) => {
  reject('失败')
})

Promise.all([p1, p2]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error);
})

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error);
})