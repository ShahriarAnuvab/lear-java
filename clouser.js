function kitchen(){
    let roast = 0;
    return function(){
        roast ++
        return roast
    }
}
const firtserver = kitchen()
console.log(firtserver());
console.log(firtserver());
console.log(firtserver());
console.log(firtserver());

function stopWatch(){
    counter = 0;
    return function(){
        counter ++;
        return counter;
    }
}

const watch =stopWatch();
console.log(watch());