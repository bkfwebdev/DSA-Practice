var lengthOfLongestSubstring = function(s) {
    let pointer = 0;
    let maxLength = 0;
    let lengthCount = 0;
    let foundMap = new Set();

    while (pointer < s.length) {
        const char = s.charAt(pointer);

        if (!foundMap.has(char)) {
            foundMap.add(char);
            lengthCount++;
            pointer++;
        } else {
            foundMap.delete(s.charAt(pointer - lengthCount));
            lengthCount--;
        }

        if (lengthCount > maxLength) {
            maxLength = lengthCount;
        }
    }

    return maxLength;
};

let test1 = lengthOfLongestSubstring("abcabcbb");
let test2 = lengthOfLongestSubstring("bbbbb");
let test3 = lengthOfLongestSubstring("pwwkew");
console.log(test1,test2,test3);
