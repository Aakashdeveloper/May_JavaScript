function validatefname(){
    var name= document.getElementById('fname').value;
    if(name == ' '||name ==''){
        document.getElementById('fout').innerText="Please Insert FirstName";
        document.getElementById('fout').style.color='red';
        document.getElementById('fout').focus();
    
    }else{
        document.getElementById('fout').innerText=""
    }
}


function validatePass(){
    var pass = document.getElementById('pwd').value;
    if(pass.length<8){
        document.getElementById('pout').innerText="Min length is 8"
        document.getElementById('pout').style.color='red';
    }else{
        document.getElementById('pout').innerText=""
    }
}

function validateCPass(){
    var pass = document.getElementById('pwd').value;
    var cpass = document.getElementById('cpwd').value;
    if(pass !== cpass){
        document.getElementById('cout').innerText="Password Does not match"
        document.getElementById('cout').style.color='red';   
    }else{
        document.getElementById('cout').innerText=""
    }
}


const validateEmail = () => {
    var email = document.getElementById('email').value;
    document.getElementById('oemail').style.color='red';   
    if(email==' '||email==''){
        document.getElementById('oemail').innerText="Please enter email"
    }else{
        if(email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")==null){
            document.getElementById('oemail').innerText="Please enter Valid email"
        }else{
            document.getElementById('oemail').innerText=""
        }
    }
}

const checkval = ()=>{
    var data =  document.getElementById('myform').value;
    alert(data)
}