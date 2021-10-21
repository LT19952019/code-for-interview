let n = 1
let arr = [[5,7,6],[2,4,3]]
const TW = (arr) => {
  let ans = []
  for(let i = 0; i<=n; i++) {
    for(let j = 0; j<100; j++) {
      x = Math.log(arr[i][2]+arr[i][1]*j) / Math.log(arr[i][0])
      if((x.toFixed(5)) % 1 === 0) {
        ans.push(x.toFixed(0))
      }
    } 
    if(ans[i] === undefined) {
      ans.push(-1)
    }
  }
  return ans
}
for(const s of TW(arr)) {
  console.log(s)
}
