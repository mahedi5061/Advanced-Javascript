const arr=[1,2,3,4,5,6,7,8];
const part=arr.slice(2,6); //start 2nd index end 6th index.

const part=arr.splice(2,6); //start 2nd index and will delete 6 numbers of element.

const part=arr.splice(2,6,20,30,40); //start 2nd index and will delete 6 numbers of element. and 20,30,40 will replaced or added the deleted element, single value or multi value may be added or replaced the deleted element.

const together=arr.join(" "); // It break the array and join the all element we can use join(" ") output will: 1 2 3 4 5 6 7 8 if we use join(",") output will: 1,2,3,4,5,6,7,8
console.log(together);
// console.log(arr);