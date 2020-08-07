function complexExp(add){
    console.warn(add(200,300));
    console.debug("Added...");
}

complexExp(function(a,b){
    console.info("Initializing addition...");
    return a+b;
});