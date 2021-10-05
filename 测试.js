function Parent(name,age){
    this.name=name
    this.age=age
    console.log(this)
    console.log(this.name,this.age)
}
function Children(name,age,height){
    console.log(this,arguments)
    // Parent.apply(this,[name,age,height])
    // Parent(name,age)
    this.height=height
}
let lisi=new Children("李四",12,170)
// console.log(lisi.name,lisi.age,lisi.height)
