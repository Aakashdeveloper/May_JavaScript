var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res) => {
    fs.readFile('db.json','utf-8',(err,data) => {
        if(err) throw err;
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With')
        res.write(data);
        res.end()
    })
})


server.listen(3400)