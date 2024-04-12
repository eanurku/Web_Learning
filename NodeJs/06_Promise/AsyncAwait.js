async function first(){
    console.log("first "); 
    return "first one"
}
async function second(){
    console.log("second"); 
    await first();
}


first().then(
    function(val){console.log(val)}
)
