//how to check if array is empty or not
let eids=[101,102,103]
let enames=[]
console.log(eids.length)          //====length is a property
console.log(enames.length)

if (eids.length>0){
    console.log("its not an empty array")
}
else{
    console.log("empty array")
}

if (enames.length>0){
    console.log("its not an empty array")
}
else{
    console.log("empty array")
}

//how to check given object is empty or not
let user={ }
let emp={
    id:111,
    name:"Rahul"
}
console.log(emp.id)
console.log(emp.name)
console.log(emp.length)     //undefined because "length" is not defined

/*console.log(Object.keys(emp).length)
console.log(Object.keys(user).length)

console.log(Object.keys(emp))
console.log(Object.keys(user))

console.log(Object.keys(emp).length>0)
console.log(Object.keys(user).length>0)*/

if(Object.keys(user).length>0){
    console.log("object is not empty")
}
else{
    console.log("object is empty")
}

if(Object.keys(emp).length>0){
    console.log("object is not empty")
}
else{
    console.log("object is empty")
}

//ternary
console.log(Object.keys(user).length>0? "empty":"not empty")
console.log(Object.keys(emp).length>0? "empty":"not empty")

