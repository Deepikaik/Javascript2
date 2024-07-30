//fnc with default value
function add(a,b,c=1){                 //c=1 default value
    console.log(a+b+c)
}
add(10,20,30)
add (10,20) // default value

//========================================

function add (a,b){
    let c=1
    return (a+b+c)
}