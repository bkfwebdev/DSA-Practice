/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = (sentence)=> {
    let alphaMap = new Map()
        for (i = 0 ; i < sentence.length ; i++){
            if (alphaMap.has(sentence.charAt(i))!=true){
                alphaMap.set(sentence.charAt(i),true)
                }
        }
    if(alphaMap.size == 26){return true} else {return false}
        
    };