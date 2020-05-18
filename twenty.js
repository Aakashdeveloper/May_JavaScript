Regex 
'^([a-z])$'

var name = "john"
name.match('^([a-z])$')
null
var name = "a"
undefined

name.match('^([a-z])$')
(2) ["a", "a", index: 0, input: "a", groups: undefined]

//Exact length match
var name = "john"
name.match('^([a-z]{4})$')
//Range of length
var name = "john"
name.match('^([a-z]{4,10})$')
//Any range of length
var name = "john"
name.match('^([a-z]+)$')
(2) ["john", "john", index: 0, input: "john", groups: undefined]
var name = "johns"
name.match('^([a-z]+)$')
(2) ["johns", "johns", index: 0, input: "johns", groups: undefined]
var name = "johnS"
name.match('^([a-z]+)$')
null

var name = "john"
name.match('^([a-zA-Z]+)$')

var name = "john"
name.match('^([0-9a-zA-Z]+)$')


var phone = 9993884784
phone.match("^[0-9]{10}$")
Error

phone.toString().match("^[0-9]{10}$")
["9993884784", index: 0, input: "9993884784", groups: undefined]

var email = "contactus@developerfunnel.com"

email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')
var email = "contactus@developerfunnel.com"

email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')
(4) ["contactus@developerfunnel.com", "contactus", "developerfunnel", "com", index: 0, input: "contactus@developerfunnel.com", groups: undefined]
var email = "@developerfunnel.com"

email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')
null
var email = "contactusdeveloperfunnel.com"

email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')
nul

"^[\w]$"
"^[\W]$"