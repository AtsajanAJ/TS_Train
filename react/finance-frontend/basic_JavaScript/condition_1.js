let accessAllowed;
let age =10;
if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
console.log("Allow access.....",accessAllowed);
age = 20;
console.log(
    "Allow access 2.....",
    age > 18 ? "Yes" : "No"
)

