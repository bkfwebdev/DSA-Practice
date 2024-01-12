/*
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

 

Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    console.log(s)
    const alphaCheck = (char)=>{
        let regex = /^[a-zA-Z]+$/;
        let booly = regex.test(char)
        console.log(booly)
        return booly
    }
        let pointer1 = 0;
        let pointer2 = s.length-1;
        let temp = null;
        let condition1 = null;
        let condition2 = null;
        data = s.split("");
        console.log(data)
        while (pointer1 < pointer2){
            condition1 = alphaCheck(data[pointer1])
            condition2 = alphaCheck(data[pointer2])
            if (condition1 == false){pointer1++}
            if (condition2 == false){pointer2--}
            if(condition1 && condition2){
                temp = data[pointer1]
                data[pointer1] = data[pointer2]
                data[pointer2] = temp
                pointer1++
                pointer2--
            }
        }
    let solution = data.join("")
    return solution
    
    };
let testData = "Ving-Tsun-Kung-Fu-System"
let solution = reverseOnlyLetters(testData)
console.log(solution)