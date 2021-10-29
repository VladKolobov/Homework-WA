function getPeople(handshake) {
  let count = 1;
  let totalHadshake = 0;
  
  while(totalHadshake !== handshake) {
  	count += 1;
    
    totalHadshake += (count - 1)
  }
  
   return count
}

console.log(getPeople(120))
