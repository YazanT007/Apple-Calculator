const displayNums = document.getElementById("displayNums");
const ACBtn = document.getElementById("ACBtn");

function toDisplay(input){
    if(displayNums.value ==="0"){
        displayNums.value = "";
    }
    if(isOperator(input) && isOperator(displayNums.value.slice(-1))){
        return;
    }
    displayNums.value += input;
    ACBtn.textContent = "⌫";
    
}

ACBtn.addEventListener("click", event=>{
    if(ACBtn.textContent === "AC"){
        clearDisplay();
        ACBtn.textContent = "AC";
    }

    else if(ACBtn.textContent === "⌫"){
        displayNums.value = displayNums.value.slice(0, -1);
        if(displayNums.value === ""){
            displayNums.value = "0";
            ACBtn.textContent = "AC";
        }
    }
})

function clearDisplay(){
    displayNums.value = "0";
}

function isOperator(chars){
    return ["-" , "+" , "*" , "/"].includes(chars);
}

function calculate(){
    try{
        displayNums.value = eval(displayNums.value);
        ACBtn.textContent = "AC";
    }
    catch{
        displayNums.value = "Error";
    }
}

function turnTo(){
    if(displayNums.value ==="0" || displayNums.value ===""){
        return;
    }

    if(displayNums.value.startsWith("-")){
        displayNums.value = displayNums.value.slice(1);
    }

    else{
        displayNums.value = "-" + displayNums.value;
    }
}
