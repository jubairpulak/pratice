const sortByLength =(arr)=> {
	return arr.sort((a,b)=> a.length - b.length)

}
console.log(sortByLength(["Google", "Apple", "Microsoft"])) 
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])) 

