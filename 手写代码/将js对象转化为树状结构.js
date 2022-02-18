function jsonTree (data) {
  let result = []
  if(!Array.isArray(data)) {
    return result
  }
  let map = {}
  data.forEach(item => {
    map[item.id] = item;
  })
  data.forEach(item => {
    let parent = map[item.id];
    if(parent) {
      (parent.children || (parent.children = []).push(item))
    } else {
      result.push(item)
    }
  });
  return result
}