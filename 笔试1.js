const TW = (n, a, b) => {
  let dp = [1]
  let arr = [1]
  for(let i = 1; i < n; i++) {
    dp[i] = a[i-1] * b[i-1]
    dp[i] = dp[i] % 1000000007
    arr.push(dp[i])
  }
  return arr
}
let n = 3, a = [2,3], b = [1,2]
console.log(TW(n, a , b))
console.log(125%7)