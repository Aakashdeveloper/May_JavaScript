/////anonymous function (IFFI)///////


(function(){
   console.log("Hi To IFFI") 
}())



function sayHi(){
    return "Hi To All"
 }
 
 console.log(sayHi())



 ///////generator function//////


 function looping(userInput){
     for(i=0;i<userInput;i++){
         console.log(i)
     }
 }

 looping(5)



 function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}

looping(5)


function * looping(userInput){
    for(i=0;i<userInput;i++){
        yield i
    }
}
undefined
looping(5)
looping {<suspended>}
var data = looping(5)
undefined
data.next()
{value: 0, done: false}
data.next()
{value: 1, done: false}
data.next()
{value: 2, done: false}
data.next()
{value: 3, done: false}
data.next()
{value: 4, done: false}
data.next()
{value: undefined, done: true}
data.next()
{value: undefined, done: true}