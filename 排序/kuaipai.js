function quickSort(arr) {
  let left =[], right = []
  let midIndex = Math.floor(arr.length / 2)
  let mid = arr[midIndex]
  for(let i = 0; i < arr.length; i++) {
    if(i == midIndex) continue
    if( arr[i] < arr[midIndex]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat([mid], quickSort(right))
}