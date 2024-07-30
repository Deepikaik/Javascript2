// how to find if the given object is empty or not
let objs={
    id:111,
    name:"deep",
    sal:"500000"
}
let obj={}

console.log(Object.keys(objs).length)
console.log(Object.keys(obj).length)

if(Object.keys(objs).length>0){
    console.log("Not empty")
}
else{
    console.log("empty")
}
if(Object.keys(obj).length>0){
    console.log("Not empty")
}
else{
    console.log("empty")
}
