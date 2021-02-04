function add(num1,num2){
    const total=num1+num2;
    if(total>8){  // we can't get the result outside of the local scope if we uses let or const variable, but we get the result if we uses var variable because var variable uses like hoisting that means var uses korle atar value ta ke tene upore niye jay parent scope ar kashe, for that reason var variable work like an global scope.
        let name='frank';
        name='brank';
        name='trunk';
        name='sunk';
        console.log(name);
    }
    console.log(name);
    console.log(day);   // though this line declared var that means it work like an hoisting but here the result will not work because hoisting declaration ta ke tene upore niye jave but atar value ta kintu jaygay thakbe for this reason it will give error.
    var day='friday';
    return total;
    
}
const result=add(3,7);
// console.log(result);