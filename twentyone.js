//literal notation
//constructor notation


//literal notation
var country = {
    name:'India',
    capital:'Delhi',
    population:89778988
}
undefined
typeof(country)
"object"
country.name
"India"
country.capital
"Delhi"
country.language="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 89778988, language: "Hindi"}
country.language=["Hindi","Tamil"]
(2) ["Hindi", "Tamil"]
country
{name: "India", capital: "Delhi", population: 89778988, language: Array(2)}
country.language
(2) ["Hindi", "Tamil"]
country.language[0]
"Hindi"
delete country.population
true
country
{name: "India", capital: "Delhi", language: Array(2)}

var country = {
    name:'India',
    capital:'Delhi',
    population:89778988
}
undefined
country['capital']
"Delhi"
country['language']="Hindi"
"Hindi"
country
{name: "India", capital: "Delhi", population: 89778988, language: "Hindi"}
delete country['capital']
true
country
{name: "India", population: 89778988, language: "Hindi"}

///constructor notation
var car = new Object()
undefined
typeof(car)
"object"
car.name="Bmw"
"Bmw"
car.color="red"
"red"
car
{name: "Bmw", color: "red"}


var sayHi = {
    firstName:'John',
    lastName:'Eva',
    greet:function(){
        //return `Hi Welcome ${firstName} ${lastName}`
        return `Hi Welcome to JS}`
    }
}

sayHi.greet()
"Hi Welcome to JS}"

var firstName ='Ammy'
var lastName = 'Jackson'
var sayHi = {
    firstName:'John',
    lastName:'Eva',
    greet:function(){
        return `Hi Welcome ${this.firstName} ${this.lastName}`
    }
}

var firstName ='Ammy'
var lastName = 'Jackson'
var sayHi = {
    firstName:'John',
    lastName:'Eva',
    greet:function(){
        return `Hi Welcome ${this.firstName} ${this.lastName}`
    }
}
undefined
sayHi.greet()
"Hi Welcome John Eva"
sayHi.firstName
"John"
sayHi
{firstName: "John", lastName: "Eva", greet: ƒ}