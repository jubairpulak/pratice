const guessSequence =(n) =>{
	let start =90;
    a=0;
 for(let i=1; i<n; i++){
     if(n===1){
           console.log(start)
     }else{
         start = start + 150 + a
         a= a+60
     }
 }
 return start
}

console.log(guessSequence(1)) 
console.log(guessSequence(2)) 

console.log(guessSequence(3)) 
console.log(guessSequence(4)) 
console.log(guessSequence(5)) 
console.log(guessSequence(7)) 
console.log(guessSequence(8)) 
console.log(guessSequence(9)) 
console.log(guessSequence(10)) 
