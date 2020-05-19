var calc={
    sum:(a,b) => {return a+b},
    sub:(a,b) => {return a-b}
}

var add = calc.sum(1,2)


var db = {
    insert:(table,obj)=>{return `Insert into ${table} name value (${obj.name})` },
    select:(tablename) => {return `Select * from ${tablename}`}
}

db.select('student')
"Select * from student"


function calc(){
    this.sum = (a,b) => {return a+b},
    this.sub = (a,b) => {return a-b}
}


var mycalc = new calc()
mycalc.sum(2,1)
mycalc.sub(4,3)



var bob = new Object();
bob.age = 10;
bob.city = "Newyork"
bob.setAge = function(newAge){
    bob.age = newAge
}

var tony = new Object();
tony.age = 10;
tony.city = "Newyork"
tony.setAge = function(newAge){
    tony.age = newAge
}


let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10;
bob.city = "Newyork"
bob.setAge = createAge

var tony = new Object();
tony.age = 10;
tony.city = "Newyork"
tony.setAge = createAge


var movies = {
    name:'Avengers',
    rate:4.5
}

var x;
for(x in movies){
    console.log(x)
    console.log(movies[x])
}