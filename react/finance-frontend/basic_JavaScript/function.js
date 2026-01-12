function adder(a, b){
    return a + b;
}

console.log(adder(1, 5)); //6

let name = "Plug";
function showMessage(msg){
    return `Message: ${msg}`;
}
console.log(showMessage(name));

function showMessage2(msg, toUpper=false) {
    return toUpper ? msg.toUpperCase() : msg
}

console.log(showMessage2("hello 1"))
console.log(showMessage2("hello 2", true))
console.log(showMessage2("hello 3", toUpper=true))
