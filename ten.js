if(){
    //do something
}else{
 //do something
}

var a = 16778
if(a%2==0){
    console.log('Number is Even')
}else if(a%3==0){
    console.log('Number is divisible by 3')
}
else{
    console.log('Number is odd')
}


var a =15
if(a%2==0){
    console.log('Number is Even')
}else if(a%3==0 || a%5==0){
    console.log('Number is divisible by 3 or 5')
}
else{
    console.log('Number is odd')
}


var a =12
if(a%2==0){
    console.log('Number is Even')
}else if(a%3==0 && a%5==0){
    console.log('Number is divisible by 3 or 5')
}
else{
    console.log('Number is odd')
}


var a =15
if(a%2==0){
    console.log('Number is Even')
}else if(a%3==0 || a%5==0){
    if(a%3==0){
        console.log('Number is divisible by 3')
    }else{
        console.log('Number is divisible by 5')
    }
}
else{
    console.log('Number is odd')
}

var a =12
if(a%2==0){
    console.log('Number is Even')
}
else if(a%3==0){
    console.log('Number is divisible by 3')
}
else{
    console.log('Number is odd')
}


var a =12
if(a%2==0){
    console.log('Number is Even')
}
if(a%3==0){
    console.log('Number is divisible by 3')
}
else{
    console.log('Number is odd')
}


var a = "john"
if(a!=="john"){
    console.log("Allow Access")
}else{
    console.log("Do not Allow Access")
}

//////////Ternory//////////
var a = 10
a>10 ? "first":"second"
var a = 10
a>10 ? "first":"second"
"second"
a>10
false
a==10?"first":"second"
"first"

var a = 10
var b =20
a == b ? a+b:a-b
var a = 10
var b =20
a == b ? a+b:a-b
-10
var a = 10
var b =20
a != b ? a+b:a-b
30


var a = 20
if(a){
    console.log("hiii")
}else{
    console.log("bie")
}
"hiii"

var a = 0
if(a){
    console.log("hiii")
}else{
    console.log("bie")
}
"bie"


var a = 0
a?"hi":"bie"
var a = 0
a?"hi":"bie"
"bie"
var a = 20
a?"hi":"bie"
"hi"
var a = 0
a?"hi":"bie"
"bie"
var a = 20
a?"hi":"bie"
"hi"
var a = true
undefined
a?"hi":"bie"
"hi"
var a = false
undefined
a?"hi":"bie"
"bie"


var a = true
if(a==true){
 console.log("hiii")
}else{
    console.log("bie")
}
VM494:4 hiii
undefined

var a = true
if(a){
 console.log("hiii")
}else{
    console.log("bie")
}
VM506:4 hiii



var a= 20
a == 20 ? a+1: a-1 ? "hi":"bie"
var a= 20
a == 20 ? a+1: a-1 ? "hi":"bie"
21
var a= 20
a == 20 ? true:false ? "hi":"bie"
true