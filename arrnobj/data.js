// how to print object in browser
let a=100;
let name="Rahul"
let discount=true
let loc=["wayanad","No"]
let emp={
    id:101,
    names:"sonia",
    sal:45000
}
document.write(a)
document.write("<br/>")
document.write(name)
document.write("<br/>")
document.write(discount)
document.write("<br/>")
document.write(loc)
document.write("<br/>")
document.write(JSON.stringify(emp))
document.write("<br/>")
document.write(emp)     //object doesnt directly print in the browser