//normal method.
const numbers=[3,5,6,7,8];
const square=[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result=element*element;
    square.push(result);
    
}
console.log(square);

//using map function method.
const numbers=[3,5,6,7,8];
const result= numbers.map(function(element){ // three parameters work inside the map function (element,index,array).
    return element*element;
})
console.log(result);

// //using map function with arrow function

const numbers=[3,5,6,7,8];
const result=numbers.map(element=>element*element)
console.log(result);
