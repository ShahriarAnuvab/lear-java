const x = 123;
if(x){
    console.log(`${x} is a truthy value`)
}
else{
    console.log(`${x} is a falsy value`)
}

const y =''
if(!y){
    console.log(`${y} is a falsy value`)
}
else{
    console.log(`${y} is a truthy value`)
}

const z =false;
if(!!z){
    console.log(`${z} is a truthy value`)
}
else{
    console.log(`${z} is a falsy value`)
}