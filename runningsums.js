function runningSums(arr1){
    let arr2 = [];
    let sum = null;
    for ( let i = 0 ; i < arr1.length ; i++){
        sum = 0;
        for (let j = 0 ; j <= i ; j++){
            sum = sum + arr1[j]
        }
        arr2[i] = sum
    }
    console.log(arr2);
}

let testData = [3,1,2,10,1];

runningSums(testData);

