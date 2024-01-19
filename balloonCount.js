/*
Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
You can use each character in text at most once. Return the maximum number of instances that can be formed.

Example 1:
Input: text = "nlaebolko"
Output: 1

Example 2:
Input: text = "loonbalxballpoon"
Output: 2

Example 3:
Input: text = "leetcode"
Output: 0
 
Constraints:
1 <= text.length <= 104
text consists of lower case English letters only.
*/

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let balloonText = "balloon";
      let balloonMap = new Map();
      
      for (let i = 0; i < balloonText.length; i++) {
        balloonMap.set(balloonText.charAt(i), 0);
      }
      
      for (let i = 0; i < text.length; i++) {
        if (balloonMap.has(text.charAt(i))) {
          balloonMap.set(text.charAt(i), balloonMap.get(text.charAt(i)) + 1);
        }
      }
      
      // Calculate the minimum count of any character in "balloon".
      let minValue = text.length;
      
      for (const [key, value] of balloonMap) {
        if (key === 'l' || key === 'o') {
          minValue = Math.min(minValue, Math.floor(value / 2)); // Divide by 2 for 'l' and 'o'.
        } else {
          minValue = Math.min(minValue, value);
        }
      }
      
      return minValue;
    };