
const canNest = (arr1, arr2)=>{
 return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1)< Math.max(...arr2)
}

console.log(canNest([1, 2, 3, 4], [0, 6])) 
console.log(canNest([9, 9, 8], [8, 9])) 
