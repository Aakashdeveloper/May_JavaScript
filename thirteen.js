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

var city = ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]

undefined
city.slice(1)
(5) ["NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
city
(6) ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
city.slice(2,5)
(3) ["Delhi", "Nice", "Helsinki"]
city.splice()


var city = ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]

undefined
city.splice(2,0,'Paris','Boston')
[]
city
(8) ["London", "NewYork", "Paris", "Boston", "Delhi", "Nice", "Helsinki", "Amsterdam"]
city.splice(3,2)
(2) ["Boston", "Delhi"]
city
(6) ["London", "NewYork", "Paris", "Nice", "Helsinki", "Amsterdam"]
city.splice(3,1,'Dubai','Abu Dhabhi')
["Nice"]
city
(7) ["London", "NewYork", "Paris", "Dubai", "Abu Dhabhi", "Helsinki", "Amsterdam"


var city = ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]

undefined
city.indexOf('Delhi')
2
city.indexOf('Amsterdam')
5
city.indexOf('Dubai')
-1
city.indexOf('Paris')
-1


var a = ['a','b','c']
var b = [1,2,3]

var a = ['a','b','c']
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
var c = [true,true,false,false]
undefined
a.concat(b,c)
(10) ["a", "b", "c", 1, 2, 3, true, true, false, false]
c.concat(a,b)
(10) [true, true, false, false, "a", "b", "c", 1, 2, 3]


"a,b,c1,2,3"
"a,b,c1,2,3"
var a = "a,b,c1,2,3"
undefined
a.split(',')
(5) ["a", "b", "c1", "2", "3"]
var url = "https://github.com/settings/applications/1288592"
undefined
var out = url.split('/')
undefined
out
(6) ["https:", "", "github.com", "settings", "applications", "1288592"]
var url1 = "https://github.com/settings/f/applications/dd/1288592"
undefined
out[5]
"1288592"
var out = url1.split('/')
undefined
out[5]
"applications"
out[out.length-1]
"1288592"
var a = "developerfunnel"
undefined
a.split("")
(15) ["d", "e", "v", "e", "l", "o", "p", "e", "r", "f", "u", "n", "n", "e", "l"]

var city = ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
undefined
city.sort()
(6) ["Amsterdam", "Delhi", "Helsinki", "London", "NewYork", "Nice"]
city.sort(-1)
var city = ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
undefined
city.reverse()
(6) ["Amsterdam", "Helsinki", "Nice", "Delhi", "NewYork", "London"]
city.sort().reverse()
(6) ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]

var city = ["London", "NewYork", "Delhi", "Nice", "Helsinki", "Amsterdam"]
undefined
console.log(...city)
VM1466:1 London NewYork Delhi Nice Helsinki Amsterdam
undefined
var  a = ["Dubai","Paris","Dahug"]
undefined
city.splice(2,0,...a)
[]
city
(9) ["London", "NewYork", "Dubai", "Paris", "Dahug", "Delhi", "Nice", "Helsinki", "Amsterdam"]

//If any value of array satisfy the conditiion it will return true
//else false
var a = [4,5,7,2,0,1,4,5,9,8]

function checkval(val){
    return val >2
}

a.some(checkval)

var a = [4,5,7,2,0,1,4,5,9,8]

function checkval(val){
    return val >2
}

a.some(checkval)
true
var a = [0,1,1]

function checkval(val){
    return val >2
}

a.some(checkval)
false


var a = ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]


var a = ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
undefined
a.includes("delhi")
false
a.includes("Delhi")
true
a.includes("Amsterdam")
true
a.includes("Mumbai")
false


//FindIndex
//Return first index which satisfy condition
var a = [4,5,7,2,0,1,4,5,9,8]
function checkeve(val){
    return (val%2==0)
}

a.findIndex(checkeve)
0
var a = [4,5,7,2,0,1,4,5,9,8]
function checkeve(val){
    return (val%2==0)
}

a.findIndex(checkeve)
0
var a = [5,7,0,1]
function checkeve(val){
    return (val%2==0)
}

a.findIndex(checkeve)
2
var a = [5,7,1]
function checkeve(val){
    return (val%2==0)
}

a.findIndex(checkeve)
-1


var a = []
undefined
typeof(a)
"object"
a.length
0
var b = Array.of(5)
undefined
b.length
1
var b = Array.of()
undefined
b.length
0

/////////////////////
var a = [5,10,20,30]
a.fill(100)

var a = [5,10,20,30]
a.fill(100)
(4) [100, 100, 100, 100]
var a = [5,10,20,30]
a.fill(100,2)
(4) [5, 10, 100, 100]
var b = Array.of()
undefined
b.fill(100)
[]
b
[]
var a = [5,10,20,30]
a.fill(100)
(4) [100, 100, 100, 100]
var a = [4,5,7,2,0,1,4,5,9,8]
undefined
var b = Array.of(...a)
undefined
b
(10) [4, 5, 7, 2, 0, 1, 4, 5, 9, 8]




var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
city.copyWithin(2,1)
var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
city.copyWithin(2,1)
(6) ["Nice", "NewYork", "NewYork", "London", "Helsinki", "Delhi"]

var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
city.copyWithin(2,0,1)
(6) ["Nice", "NewYork", "Nice", "Helsinki", "Delhi", "Amsterdam"]

var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
city.copyWithin(2,0,3)
(6) ["Nice", "NewYork", "Nice", "NewYork", "London", "Amsterdam"]