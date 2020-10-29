function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2+'\n');

    //callback executes after the asynchronous action/event begins
    //but NOT before it completes.
    setTimeout(function() {
        console.log('--hello world after 2 seconds---');
    }, 2000); //wait 2 seconds

    //Override params
    param1 = 'chicken';

    //this makes the callback functional optional in the caller
    if(callback && typeof(callback) ==="function" )
        callback(param1, param2);
        //callback() will pass the params as 'undefined'
}

mySandwich('turkey', 'bacon',function(param1, param2){
    console.log('finished eating my sandwich with '
        +param1+' and '+ param2);
});

// optional

function mySandwich(param1, param2,param3, callback) {
    console.log('Started eating my sandwich.\nIt has: ' + param1 + ', ' + param2+', '+param3+'\n');
    //this makes the callback optional
    if(callback && typeof(callback) ==="function" )callback();

    //above condition can also be written like this, but my head spins.
    //(callback && typeof(callback) === "function") && callback();
}

/*mySandwich('ham', 'cheese', function() {
    console.log('\nFinished eating my sandwich.');
});*/

//throws error () since callback is not optional & function has 3 params
mySandwich('turkey', 'bacon', 'cheese','other');
mySandwich('turkey', 'bacon', 'cheese');
mySandwich('turkey', 'bacon');
mySandwich('turkey')
