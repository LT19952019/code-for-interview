function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1 -i; j++) {
      if(arr[j] > arr[i]){
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
}