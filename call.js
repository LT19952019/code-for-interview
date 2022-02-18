var name = '小王', age = 18;
var obj = {
  name: '小张',
  objAge : this.age,
  myFun: function () {
    console.log( this.name + "年龄" + this.age)
  }
}

var db = {
  name: '德玛',
  age: 99
}

obj.myFun.call(db)