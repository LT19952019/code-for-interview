let obj = {}
let input = document.getElementById('input')
let span = document.getElementById('span')

Object.defineProperty(obj, 'text', {
  get() {
    console.log('获取数据了')
  },
  set(newValue) {
    console.log('改变数据了')
    input.value = newValue
    span.value = newValue
  }
})

input.addEventListener('keyup', function(e) {
  obj.text = e.target.value
})

const target = {
  name: 'kongzhi'
};

const handler = {
  get: function(target, key) {
    console.log(`${key} 被读取`);
    return target[key];
  },
  set: function(target, key, value) {
    console.log(`${key} 被设置为 ${value}`);
    target[key] = value;
  }
};

const testObj = new Proxy(target, handler);