function add(a,b){
    console.log(a+b)
}
add(10,20)

//========
function wish(){
    console.log("name")
}
wish()
//===========
function greet(name){
    console.log("Hi ms.",name)
}
greet("ria")

//======================================
function cal_Age(year){
    let cy=2024                               // or new Date().getFullYear()
    return(cy-year);
}

let age1=cal_Age(2000)
console.log(age1)

let age2=cal_Age(1990)
console.log(age2)