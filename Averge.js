let marks = [85,97,44,37,76,60];
let sum = 0;
let val;
for(val of marks){
	//console.log("subjects marks is :",val);
	sum =sum+val;
		console.log("Sum of marks is :",sum);	
}
		let averge = sum / marks.length;
			console.log(`the averge of marks is : ${averge}`);