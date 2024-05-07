function number(value){
    document.getElementById('kaart').value += value;
}

function del(){
    document.getElementById('kaart').value = '';
}

function cal(){
    try{
        var nummer = eval(document.getElementById('kaart').value);
        document.getElementById('kaart').value = nummer;
    } catch(error){
        document.getElementById('kaart').value = 'Error'
    }
}