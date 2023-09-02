
function display(num) {
    outputscreen.value += num
    
}
function calculate() {
    try {
        outputscreen.value = eval(outputscreen.value);
    }
    catch(err)
    {
        alert("invaild")
    }
}
function clear(){
    outputscreen.value = " ";
}
function slice(){
    outputscreen.value = outputscreen.value.slice(-0 , -1)
}
