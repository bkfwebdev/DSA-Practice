function processCustomer(arr){
let sum = null;
for (let index = 0 ; index < arr.length ; index++){
    sum = sum + arr[index]
}
return sum
}

function findRichestCustomer(arr){
    richestSum = 0;
    result = 0;
    for ( let index = 0 ; index < arr.length ; index++){
        result = processCustomer(arr[index])
        if ( result > richestSum ){richestSum = result}
    }
    return richestSum
}

let testData = [[7,1,3],[2,8,7],[1,9,5]]
let richestCustomer = findRichestCustomer(testData)
console.log(richestCustomer)

