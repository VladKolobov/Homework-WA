function showMultipleNums(k, n) {
	let res = [];
  
  for(let i = 0; i <= n; i++) {
  	if(i % k === 0) res.push(i)
  }
  
  return res.join(" ")
}

console.log(showMultipleNums(3, 9))