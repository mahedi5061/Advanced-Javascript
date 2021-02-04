function stopWatch(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const clock1=stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

function stopWatch1(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const clock2=stopWatch1();
console.log(clock2());
console.log(clock2());
console.log(clock1());
console.log(clock1());

