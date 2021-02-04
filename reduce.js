const numbers=[3,5,6,7,8];
const result=numbers.reduce(function(element,sum){
    return sum=sum+element;
},1)
console.log(result);
//using arrow function.
const numbers=[3,5,6,7,8,4];
const result=numbers.reduce((element,sum)=>sum=sum+element,0)  //here value 0 is the initialization of sum parameter, we know reduce method has four parameters the 4th parameter is the state parameter here sum is the state parameter,that's initial value we set 0 ,we can set any value here as a initial value but if we don't set any value sum will denote by default a value 0 
console.log(result);

