// const numbers=[3,5,6,7,8];
// const result=numbers.filter(element=>element>5)
// console.log(result);

//filter will work when the condition will be true. if the condition is false the value will not be return. 

const numbers=[3,5,6,7,8];
const result=numbers.find(element=>element>5)  //it will return the single value that means it return the first true value others true values are not return.
console.log(result);
