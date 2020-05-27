var url = "https://api.exchangeratesapi.io/latest?base="


async function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    let response = await fetch(`${url}${base}`,{method:'GET'})
    let data = await response.json()
    final = data.rates
    final = `Converted price of ${amount}${base} is ${(final[output] * parseFloat(amount)).toFixed(2)}${output}`
    document.getElementById('converted').innerHTML= final
}



/*
function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates
        //final = final[output]*amount
        //final = final.toFixed(2)
        //console.log(final)
        final = `Converted price of ${amount}${base} is ${(final[output] * parseFloat(amount)).toFixed(2)}${output}`
        document.getElementById('converted').innerHTML= final
    })
    .catch((err)=>{console.log(err)}) 
}

var rates = {
    "CAD": 1.3835079727,
    "HKD": 7.7519817768,
    "ISK": 140.410022779,
    "PHP": 50.4400911162,
    "DKK": 6.7934396355
}
*/