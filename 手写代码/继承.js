// 原型链继承
function SuperType() {
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property
}

function SubType () {
  this.Subproperty = false
}

SubType.prototype = new SuperType()

SubType,prototype.getSubValue = function() {
  return this.Subproperty
}

var instance = new SubType();
console.log(instance.getSuperValue());

// 构造是继承
function SuperType1 () {
    this.color=["red","green","blue"];
}
function SubType1 () {
  SuperType1.call(this)
}

var instance1 = new SubType();
instance1.color.push("black");
alert(instance1.color);//"red,green,blue,black"

var instance2 = new SubType();
alert(instance2.color);//"red,green,blue"

// 组合继承
function SuperType2(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

function SubType2(name, age) {
  SuperType2.call(this,name)
  this.age = age
}
SubType2.prototype = new SubType2()
SubType2.prototype.constructor = SubType2;
SubType2.prototype.sayAge = function() {
  alert(this.age)
}

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors); //"red,blue,green,black"
instance1.sayName(); //"Nicholas";
instance1.sayAge(); //29

var instance2 = new SubType("Greg", 27);
alert(instance2.colors); //"red,blue,green"
instance2.sayName(); //"Greg";
instance2.sayAge(); //27

// 原型式继承
function object(obj) {
  function F() {}
  F.prototype = obj
  return new F9
}

var person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");

//寄生组合式继承
function inheritPrototype(SubType, SuperType) {
  var prototype = Object.create(superType.prototype); 
  prototype.constructor = subType;                    
  subType.prototype = prototype;  
}
function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};

function SubType(name, age){
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);
SubType.prototype.sayAge = function(){
  alert(this.age);
}
//extends
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  get area() {
    return this.calcArea()
}

// Method
calcArea() {
    return this.height * this.width;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(width, height)
    this.name = 'Square';
  }

  get area() {
    return this.height * this.width;
  }
}