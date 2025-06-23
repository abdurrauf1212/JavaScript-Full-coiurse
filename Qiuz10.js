//calculate the sum of all Array
let n = prompt("Enter the number :");
let arr = [];
for (let i = 0; i <= n; i++) {
	arr[i-1] = i ;
}
console.log(arr);
let sum = arr.reduce((pre, cur) =>{
	
    return pre+cur;
});
console.log("Sum :",sum);
let product = arr.reduce((pre, cur) =>{
	
    return pre*cur;
});
console.log("product :",product);