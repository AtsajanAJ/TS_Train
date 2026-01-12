function google(num) {
    if(num % 3 === 0 && num % 5 === 0){
        console.log("google")
    }
    else if(num % 3 === 0){
        console.log("goo")
    }
    else if(num % 5 === 0){
        console.log("gle")
    }
    else {
        console.log(num)
    }
}
google(3);
google(5);
google(15);
google(7);
