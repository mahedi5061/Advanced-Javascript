//break method
const arr=[1,2,3,4,5,6,7,8];
 for (let i = 0; i < arr.length; i++) {
     
     if (arr[i]>4) {
         break;
     }
     console.log(arr[i]);
     
 }
 //continue method
const arr=[1,-2,3,-4,5,-6,7,-8];
 for (let i = 0; i < arr.length; i++) {
     
     if (arr[i]<0) {
         continue;
     }
     console.log(arr[i]);
     
 }