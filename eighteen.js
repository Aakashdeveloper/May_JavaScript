var a = 10

var a; //declare
a=10   // assignment

var => we can redeclare and reassign
let => we cannot redeclare but can reassign
const =>  we cannot redeclare nor reassign


> var a = 20
undefined
> a
20
> var a = 30
undefined
> a
30
> a =40
40
> a
40
> 
> let x = 6
undefined
> let x = 7
Thrown:
SyntaxError: Identifier 'x' has already been declared
> x = 8
8
> const f = 9
undefined
> f
9
> const f = 7
Thrown:
SyntaxError: Identifier 'f' has already been declared
> f=8
Thrown:
TypeError: Assignment to constant variable.





///Clouser//////
var a = 10

function add(uin){
    var out;
    var b = 20
    out = uin+a+b
    return out
}
add(4)

console.log(a)
console.log(b)

var a = 10
for(i=0;i<3;i++){
    let b = 5
    console.log(i+a+b)
}

console.log(a)
console.log(b)
//////////////

var myvar = []
for(let i =0;i<3;i++){
    myvar[i]=function(){
        console.log("I m in function ",i)
    }
}

for(j=0;j<3;j++){
    myvar[j]()
}

I m in function  3
I m in function  3
I m in function  3

I m in function  0
I m in function  1
I m in function  2