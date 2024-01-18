/*
You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

Return a list answer of size 2 where:

answer[0] is a list of all players that have not lost any matches.
answer[1] is a list of all players that have lost exactly one match.
The values in the two lists should be returned in increasing order.

Note:

You should only consider the players that have played at least one match.
The testcases will be generated such that no two matches will have the same outcome.

Example 1:

Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
Output: [[1,2,10],[4,5,7,8]]
Explanation:
Players 1, 2, and 10 have not lost any matches.
Players 4, 5, 7, and 8 each have lost one match.
Players 3, 6, and 9 each have lost two matches.
Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
Example 2:

Input: matches = [[2,3],[1,3],[5,4],[6,4]]
Output: [[1,2,5,6],[]]
Explanation:
Players 1, 2, 5, and 6 have not lost any matches.
Players 3 and 4 each have lost two matches.
Thus, answer[0] = [1,2,5,6] and answer[1] = [].
*/



const testData1 = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
const testData2 = [[2,3],[1,3],[5,4],[6,4]]

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
const findWinners = (matches) => {
    let winners = new Map()
    let losers = new Map()
    let max = matches.length
    for (let i = 0 ; i < max ; i ++){
        for(let j = 0 ; j < 2 ; j ++){
            if(winners.has(matches[i][0])!= true){winners.set(matches[i][0],true)}
            if(losers.has(matches[0][j])!=true){losers.set(matches[0][j],true)}
        }
    }
    console.log(winners)
    console.log(losers)


let solution = []
let no_losses = []
let one_loss = []
winners.forEach((key,value)=>{
    if(losers.has(key)!=true){no_losses.push(value)}
})
    
console.log(no_losses)
solution[0] = no_losses
let lc = 0
losers.forEach((key,value)=>{
    for(let i = 0 ; i < max ; i ++){
        if (matches[0][i]==key){lc++}
    }
    if(lc == 1){one_loss.push(value)}
})
console.log(one_loss)
solution[1] = one_loss
return solution
}

console.log("test data one")
findWinners(testData1)
console.log("test data two")
findWinners(testData2)