var a = ['a','b','c','d'];
var sum = [10,34,56,734,3,5]
var c = [true,false,false,true,true]

var d = [4,5,"d","g",true,'d',4,"sdf",true,8]

array can be collection of homogenous or hetrogenous

var city = ['London','NewYork','Delhi',"Nice"]
undefined
city.length
4
city[0]
"London"
city[1]
"NewYork"
city[4]
undefined
city[city.length-1]
"Nice"
city[-1]
undefined

Push => All always at the end of array
Pop  => Remove Always from the end of array
Shift  => Remove first value of array
unshift => All always at first index of array

var city = ['London','NewYork','Delhi',"Nice"]
undefined
city.push('Helsinki')
5
city
(5) ["London", "NewYork", "Delhi", "Nice", "Helsinki"]
city.push('Amsterdam')
6
city
(6) ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
city
(6) ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]

city.pop()
"Amsterdam"
city
(5) ["London", "NewYork", "Delhi", "Nice", "Helsinki"]
city.pop(2)
(6) ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
city.pop()
"Amsterdam"
city
(5) ["London", "NewYork", "Delhi", "Nice", "Helsinki"]
city.pop(2)
"Helsinki"
city
(4) ["London", "NewYork", "Delhi", "Nice"]
city.pop(876786786)
"Nice"
city
(3) ["London", "NewYork", "Delhi"]
var city = ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
undefined
city.unshift('Dubai')
7
city.unshift('InnsBurg')
8
city
(8) ["InnsBurg", "Dubai", "London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
city.shift()
"InnsBurg"
city.shift(2)
"Dubai"