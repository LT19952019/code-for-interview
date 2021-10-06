const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
    let self = this;

    this.state = PENDING;

    this.value = null;

    this.resolvedCallbacks = [];

    this.rejectedCallbacks = [];

    function resolve (value) {
        if( value instanceof MyPromise) {
            return value.then(resolve, reject)
        }

        setTimeout(() => {
            if (self.state === PENDING) {
                self.state = RESOLVED;

                self.value = value

                self.rejectedCallbacks.forEach(callback => {
                    callback(value)
                })
            }
        },0)
    }
    try {
        fn(resolve, reject);
    } catch (e) {
        reject(e)
    }
}

MyPromise.prototype.then = function(onResolved, onRejected) {
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
    if (this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved);
        this.rejectedCallbacks.push(onRejected);
    }
    if (this.state === RESOLVED) {
        onResolved(this.value);
      }

    if (this.state === REJECTED) {
        onRejected(this.value);
      } 
}