const reverseArray = (s) => {
    let pointer1 = 0;
    let pointer2 = s.length-1;
    let temp = null;
    console.log(s)
    while (pointer1 < pointer2){
        temp = s[pointer1];
        s[pointer1] = s[pointer2];
        s[pointer2] = temp;
        pointer1++
        pointer2--
    }
    console.log(s)
    return s
}

let testData = ["h","e","l","l","o"];
reverseArray(testData);