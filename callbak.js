function prepare (ingredients, callback) {
    console.log("preparing " +ingredients);
    callback();
}

prepare ("onions and galic", () =>{
    console.log("chopping");
});



var r = comfirm("Do you really want to send the payment?");

if (r == true) {
    x = "Cleared payment";

}else {
    x = "Payment cancelled"
}

alert(x);