function superType() {
  this.propety = true;
}

superType.prototype.getSuperValue = function() {
  return this.propety
}

function subType() {
  this.subPropety = false;
}

subType.propety = new superType();

superType.propety.getSubValue = function() {
  return this.subproperty;
}

//
function  SuperType(){
  this.color=["red","green","blue"];
}
function  SubType(){
  //继承自SuperType
  SuperType.call(this);
}
//
function SuperType() {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
SubType.prototype = new SuperType(); 
subType.prototype.constructor = subType
SubType.prototype.sayAge = function(){
  alert(this.age);
};
//
function object(obj){
  function F(){}
  F.prototype = obj;
  return new F();
}
//
function createAnother(original){
  var clone = object(original); // 通过调用 object() 函数创建一个新对象
  clone.sayHi = function(){  // 以某种方式来增强对象
    alert("hi");
  };
  return clone; // 返回这个对象
}
//
