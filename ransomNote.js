/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomMap = new Map();
    let magazineMap = new Map();

    // Populate ransomMap with characters from ransomNote
    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote.charAt(i);
        ransomMap.set(char, (ransomMap.get(char) || 0) + 1);
    }

    // Populate magazineMap with characters from magazine
    for (let i = 0; i < magazine.length; i++) {
        const char = magazine.charAt(i);
        magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
    }

    // Check if ransomNote can be constructed
    for (const [key, value] of ransomMap) {
        if (!magazineMap.has(key) || magazineMap.get(key) < value) {
            return false; // Character not present in magazine or not enough occurrences
        }
    }

    return true; // Ransom note can be constructed
};
