function returnsAnAnonymousFunction(){return ()=>{
    console.log('Stretch! Work that core!');
    console.log('Stretch! Work that core!');
}}


function receivesAFunction(returnsAnAnonymousFunction){
    return returnsAnAnonymousFunction();
    
}

function returnsANamedFunction(){
    return function r3eceivesAFunction(){console.log("r3eceivesAFunction")};
}

