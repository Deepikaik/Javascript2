//given no is even or odd
var num=91

if(num%2===0){
    console.log("even")
}
else{console.log("odd")}

//check if given 3 digit is no or not

var a=30
if(a>=100 && a<=999){
    console.log("three digit number")
}
else{
    console.log("not a three digit number")
}

//ternary operators of the above
var n=91

console.log(n%2===0 ? "even" : "odd")

var b=30

console.log(a>=100 && a<=999 ? "three digit number" : "not a three digit number")