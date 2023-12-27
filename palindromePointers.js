const isPalindrome = (myInput) => {
    let pointer1 = 0;
    let pointer2 =  myInput.length - 1;
    let evenString = pointer2 % 2 == 0;
    let palindrome = false;
if (evenString){
    while (pointer1 < pointer2){
        if(myInput.charAt(pointer1) == myInput.charAt(pointer2)){palindrome = true} else {return false}
        pointer1++;
        pointer2--;
    }
} else {
    let midpoint = (pointer2 + 1)/2
    while (pointer1 < midpoint && pointer2 > midpoint){
        if(myInput.charAt(pointer1) == myInput.charAt(pointer2)){palindrome = true} else {return false}
        pointer1++;
        pointer2--;
    }
}
console.log(myInput,palindrome);
return palindrome
} 

isPalindrome("stop");
isPalindrome("pop");
isPalindrome("deed");
isPalindrome("speed");