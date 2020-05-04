var city = "lOndOn"
undefined
city.length
6
city.toUpperCase()
"LONDON"
city.toLowerCase()
"london"


var city="   India   "
undefined
city.length
11
city.trim()
"India"
city.trim().length
5

var city="   India  . "
undefined
city.trim()
"India  ."


slice
substring
substr 

var a = "Amsterdam"
undefined
a.slice(1)
"msterdam"
a.slice(3,5)
"te"
a.slice(3)
"terdam"
a
"Amsterdam"
a.slice(2,6)
"ster"


var a = "Amsterdam"
undefined
a.charAt(0)
"A"
a.charAt(2)
"s"


var city = "lOndOn"

city.charAt(0).toUpperCase()

var city = "lOndOn"

city.charAt(0).toUpperCase()
"L"
city.slice(1)
"OndOn"
city.slice(1).toLowerCase()
"ondon"
city.charAt(0).toUpperCase()+city.slice(1).toLowerCase()
"London"


var b = "I am learning JavaScript"
undefined
b.replace('JavaScript','JS')
"I am learning JS"
var b = "I am learning JavaScript"
undefined
var b = "JavaScript I am learning JavaScript"
undefined
b.replace('JavaScript','JS')
"JS I am learning JavaScript"
b.replace(/JavaScript/g,'JS')
"JS I am learning JS"

var city="   India  . "
city.replace(/ /g,'')

var b = "JavaScript I am learning JavaScript"
b.replace(/ /g,'_')

var c= "Helsinki"
undefined
c.indexOf('e')
1
c.indexOf('i')
4
c.indexOf('a')
-1
c.indexOf('z')
-1

slice(start,end)
If first value is -ve tha output is null if second value iis -ve than i will
remove from begining and end also
> Only one is -ve it will remove from backside

substring(start,end)
If first or second is -ve than return +ve interger length of char from the begining
in case of just one -vee will return complete string

substr(start,length)
if first -ve and second +ve than remove from end
Only -ve remove from end 
if first +ve and second -ve than return nothing

var city = "Amsterdam"
undefined
city.slice(1)
"msterdam"
city.substring(1)
"msterdam"
city.substr(1)
"msterdam"

var city = "Amsterdam"
undefined
city.slice(2,5)
"ste"
city.substring(2,5)
"ste"
city.substr(2,5)
"sterd"

var city = "Amsterdam"
undefined
city.slice(2,-2)
"sterd"
city.slice(1,-4)
"mste"
city.slice(-4)
"rdam"
city.slice(4)
"erdam"

var city = "Amsterdam"
undefined
city.substring(2,-2)
"Am"
city.substring(2)
"sterdam"
city.substring(2,-2)
"Am"
city.substring(2,-3)
"Am"
city.substring(2,-4)
"Am"
city.substring(3,-1)
"Ams"
city.substring(-1)
"Amsterdam"
city.substring(-2)
"Amsterdam"
city.substring(-2,1)
"A"
city.substring(-2,2)
"Am"
city.substring(-2)
"Amsterdam"
city.slice(-2)
"am"

var city = "Amsterdam"
undefined
city.substr(-1)
"m"
city.substr(-2)
"am"
city.substr(-2,2)
"am"
city.substr(2,-2)
""
city.substr(3,-2)
""
city.substr(-2,-2)
""

