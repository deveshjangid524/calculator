let operator= '';
let previousValue='';
let currentValue='';

document.addEventListener("DOMContentLoaded",function (){
    let clear=document.querySelector(".clear");
    let equal=document.querySelector(".equal");
    let decimal=document.querySelector(".decimal");

    let numbers=document.querySelectorAll(".number");
    let operators=document.querySelectorAll(".operator");

    let previousScreen=document.querySelector(".previous");
    let currentScreen= document.querySelector(".current");

    for(let i=0;i<numbers.length; i++){
        numbers[i].addEventListener("click",function(e){
            handleNumber(e.target.textContent);
            currentScreen.textContent=currentValue;
            
            
        })
    }

    for(let i=0;i<operators.length;i++){
        operators[i].addEventListener("click",function(e){
            handleOperator(e.target.textContent);
            previousScreen.textContent=previousValue + " " + operator;
            currentScreen.textContent=currentValue;
        
            
        })
    }

    clear.addEventListener("click", function(){
        previousValue='';
        currentValue='';
        operator='';
        previousScreen.textContent=previousValue;
        currentScreen.textContent=currentValue;
    })

    equal.addEventListener("click", function(){
        calculate();
        currentScreen.textContent=previousValue;
        previousScreen.textContent='';
    })

    decimal.addEventListener("click",function(){
        addDecimal();
        currentScreen.textContent=currentValue;
    })
})

function handleNumber(num){
        if(currentValue.length<=10){
            currentValue+=num;
        }

  
}

function handleOperator(op){
    if(operator==''){
        operator=op;
    previousValue=currentValue;
    currentValue='';
    }
    
    else {
        calculate();
        operator=op;
        currentValue='';
    }
}

function calculate(){
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);

    if(operator==="+"){
        previousValue+=currentValue;
    }
    else if(operator==="-"){
        previousValue-=currentValue;
    }
    else if(operator==="x"){
        previousValue*=currentValue;
    }
    else {
        previousValue/=currentValue;
    }

    
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue+='.';
    }
}