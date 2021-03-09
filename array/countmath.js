
const seriesResistance = (arr)=>{
    const Reducer = (accumulator, currentvalue ) => accumulator + currentvalue

    return arr.reduce(Reducer)
}

console.log(seriesResistance([1, 5, 6, 3]))
