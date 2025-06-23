let arr = [1,3,4,5];
let output = arr.reduce((pre, cur) =>{
	//sum
//return pre+cur;
	//great value print
	return pre>cur ? pre : cur;
});
console.log(output)