var display = document.querySelector("#input").innerHTML=input;
function buttonsFunction(value){
    display.value += value;
}
function deleteValue(){
    if (display === "AC"){
        display.value = '';
    }
    else {
        display.value = display.value.slice(0,0);
    };
};
function deleteLastValue(){
    if (display === "C"){
        display.value = '';
    } else {
        display.value = display.value.slice(0,-1);
    };
};
function oprator(value){
    display.value += value;
    }function eqval(){
        display.value = eval(display.value);
        if(display.value == "undefined"){
            display.value = "";
        };
    };