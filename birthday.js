const happyBirthday =(age)=>{
    console.log(age)
    const half = Math.floor(age /2);
    console.log(half)
    if((age % half) === 0){
       return console.log(`Mubashir is just 20, in base ${half}!`)
    }else{
        return console.log(`Mubashir is just 21, in base ${half}!`)
    }
}

happyBirthday(32)
happyBirthday(65)
happyBirthday(83)