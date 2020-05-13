for
while
do while
for of
for in 
map 
filter


for(i=0;i<5;i++){
    console.log(i)
}

0
1
2
3
4


var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
for(i=0; i<city.length;i++){
  console.log(city[i])
}

////////Wiile Loop/////////
var i =0;
while(i<10){
    console.log(i)
    i++
}

var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
var i =0;
while(i<city.length){
    console.log(i)
    console.log(city[i])
    i++
}


/////////Do While////////
var i = 10;
do{
    console.log(i)
    i++
}
while(i<5)


var i =10;
while(i<10){
    console.log(i)
    i++
}

var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]

var i = 0;
do{
    console.log(city[i])
    i++
}
while(i<city.length)



var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
for(citi of city){
    console.log(citi)
}


var city =  ["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]
city.forEach(console.log(city))
["Nice", "NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]