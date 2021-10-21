const PENDING = "pending"
const RESOLVED = "resolved"
const REJECT = "reject"

function MyPromise(fn) {
  var self = this;

  this.state =PENDING;

  this.value = null;

  this.resolvedCallbacks = []

  this.rejectedCallbacks = []

  function resolve(value) {
    if(value instanceof MyPromise) {
      return value.then(resolve, reject);
    }

    setTimeout(() => {
      if(self.state === PENDING) {
        self.state = RESOLVED

        self.value = value;

        self.resolvedCallbacks.forEach( callback => {
          callback(value)
        })
      }
    },0)
  }

  function reject(value) {
    setTimeout(() => {
      if(self.state === PENDING) {
        self.state = REJECT;

        self.value = value

        self.rejectedCallbacks.forEach( callback => {
          callback(value)
        })
      } 
    },0)
  }
  try {
    fn(resolve, reject);
  } catch(e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' 
  ? onResolved 
  : function(value) { return value; } 

  onRejected = typeof onRejected === 'function'
  ? onRejected
  : function(error) { throw error; }

  if (this.state === PENDING) {
    this.rejectedCallbacks.push(onRejected)
    this.resolvedCallbacks.push(onResolved)
  }
  if (this.state === RESOLVED) {
    onResolved(this.value);
  }

  if (this.state === REJECTED) {
    onRejected(this.value);
  }

}