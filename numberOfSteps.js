const getSteps = (n) =>{
    let numOfSteps = 0;
    let input = n;
    while (n > 0){
        if (n % 2 === 0){
            n = n/2;
            numOfSteps++;
        }
        if (n % 2 != 0){
            numOfSteps++;
            n = n - 1}
    }
    console.log("input", input , "steps", numOfSteps)
}

getSteps(14);
getSteps(8);
getSteps(123);