function
method
arrow function
anonymous function (IFFI)
generator function

///////function/////
var a =3
var b =4
a+b

function add(a,b){
    return a+b
}


add(2,3)
5
add(4,6)
10
add('a','b')
"ab"
add(4,6,7)
10

var testval = 'a'
function isEven(mynum){
    var output = [];
    if(Array.isArray(mynum)){
        for(i=0;i<mynum.length;i++){
            if(mynum[i]%2  == 0){
               output.push({"num":mynum[i], type:'even'})
            }else{
             output.push({"num":mynum[i], type:'odd'})
            }
        }
    }else{
        output.push("No Array Provided")
    }
    
    return output
}
isEven(testval)


var a = [4,5,33,6,8,22,986,2389,298]
undefined
Array.isArray(a)
true
a.length>0
true
typeof(a)
"object"