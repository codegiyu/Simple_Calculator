function addToDisplay(val){
    document.getElementById("display").value += val;
}

function calculate(){
    var line = document.getElementById("display").value;
    var result = eval(line);
    var answer = result.toPrecision(11);
    if (answer == "Infinity"){
        document.getElementById("display").value = "∞";
    }
    else{
        document.getElementById("display").value = parseFloat(answer);
        equalsWasJustUsed = true;
    }   
}

function clearAll(){
    document.getElementById("display").value = "";
}
