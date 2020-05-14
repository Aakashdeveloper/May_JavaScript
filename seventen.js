map 
> Iterrate over the value and play logic

var a = [4,6,8,6,7,33,224,6,8]
a.map((data) => {console.log(data)})

var a = [4,6,8,6,7,33,224,6,8]

a.map((data) => {console.log(data+1)})

//Always return the same length of ouput

var a = [2,3,4,5]
a.map((data)=>{return data>3})
 [false, false, true, true]


var a = [2,3,4,5]
a.filter((data)=>{return data>3})
[4,5]

//Filter only return those value for which given condition is true


var a = [0,1,2,3]
a.map((data) => {return data*2})
[0,2,4,6]
a.filter((data) => {return data*2})
[1, 2, 3]

var a = [5,32,36,22,45,21]
a.filter((data) => {return data>20})
