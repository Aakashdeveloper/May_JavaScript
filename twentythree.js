function human(name){
    this.name=name
    this.city ='NewYork'
}


function robot(name){
    this.name = name;
    this.legs =2
    this.color="red"
}


var John = new human('John');
var Robot = new robot('Pepper')

///////////////////////////

function human(name){
    this.name=name
    this.city ='NewYork'
}


function robot(name){
    this.name = name;
    this.legs =2
    this.color="red"
}

human.prototype = new robot()
var John = new human('John');

robot.prototype = new human()