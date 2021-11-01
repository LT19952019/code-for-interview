const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";


function myPromise (fn) {
  var self = this;

  this.state = PENDING;

  this.value = null;

  this.resolvedCallbacks = [];

  this.rejectedCallbacks = [];

  function resolve (value) {
    if(value instanceof myPromise) {
      return value.then(resolve, reject)
    }

    setTimeout(() => {
      if(self.state === PENDING) {
        self.state = RESOLVED

        self.value = value

        self.resolvedCallbacks.forEach(callback => {
          callback(value)
        })
      }
    }, 0);
  }

  function rejct (value) {
    if(value instanceof myPromise) {
      return value.then(resolve, reject)
    }
    setTimeout(() => {
      if(self.state === PENDING) {
        self.state = REJECTED

        self.value = value

        self.rejectedCallbacks.forEach(callback => {
          callback(value)
        })
      }
    }, 0);
  }
  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
MyPromise.prototype.then = function(onResolved, onRejected) {
  // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
  onResolved =
    typeof onResolved === "function"
      ? onResolved
      : function(value) {
          return value;
        };

  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function(error) {
          throw error;
        };

  // 如果是等待状态，则将函数加入对应列表中
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved);
    this.rejectedCallbacks.push(onRejected);
  }

  // 如果状态已经凝固，则直接执行对应状态的函数

  if (this.state === RESOLVED) {
    onResolved(this.value);
  }

  if (this.state === REJECTED) {
    onRejected(this.value);
  }
};