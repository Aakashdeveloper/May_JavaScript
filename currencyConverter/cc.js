var url = "https://api.exchangeratesapi.io/latest?base="
function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
}