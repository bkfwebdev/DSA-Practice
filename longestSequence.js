/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let foundMap = new Map();
    let pointer = 0;
    let maxLength = 0;
    let lengthCount = 0;
    while (pointer < s.length) {
        if (foundMap.has(s.charAt(pointer))) {
            if (lengthCount > maxLength) {
                maxLength = lengthCount;
            }

        } else {
            foundMap.set(s.charAt(pointer), true);
            lengthCount++;
            pointer++;
        }
    }
    return maxLength;
};

let test1 = lengthOfLongestSubstring("abcabcbb");
let test2 = lengthOfLongestSubstring("bbbbb");
let test3 = lengthOfLongestSubstring("pwwkew");
console.log(test1,test2,test3);
