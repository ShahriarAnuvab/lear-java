function greeting(greetingHandler, name){
    greetingHandler(name);
}

function morning(name){
    console.log( `Good Morning ${name}`);
}
function evening(name){
    console.log(`good evening, ${name}`);
}
function night(name){
    console.log(`Good Night ${name}`)
}

greeting(morning, `anuvab`);