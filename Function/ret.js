function add(a,b){
    return (a+b)
    console.log("gm") // will not execute because its an unreachable st because return is out of the block

}
let r1=add (1,2)
console.log(r1)

//===============================================
function cal_Age(year){
   let cy=new Date().getFullYear()                     //   or let cy=2024; 
    return cy-year;

}
 let age1=cal_Age(1983)
 console.log(age1)

// or print directly by this
 console.log(cal_Age(2002))


 //============================================
function cal_Age(year){
    let cy=2024
    return cy-year;
}
let age2=cal_Age(1999)
console.log(age2)