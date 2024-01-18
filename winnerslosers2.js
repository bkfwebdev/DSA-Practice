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

const findWinners = (matches) => {
    let winners = new Set();
    let losers = new Map();

    // Step 1: Create Sets for Winners and Maps for Losers
    for (let i = 0; i < matches.length; i++) {
        let winner = matches[i][0];
        let loser = matches[i][1];

        winners.add(winner);

        // Update losers map
        if (!losers.has(loser)) {
            losers.set(loser, 1); // Initialize the count to 1
        } else {
            losers.set(loser, losers.get(loser) + 1); // Increment the count for additional losses
        }
    }

    // Step 2: Find Players with No Losses and One Loss
    let no_losses = [];
    winners.forEach((player) => {
        if (!losers.has(player)) {
            no_losses.push(player);
        }
    });

    let one_loss = [];
    losers.forEach((count, player) => {
        if (count === 1) {
            one_loss.push(player);
        }
    });

    // Step 3: Sort the Results
    no_losses.sort((a, b) => a - b);
    one_loss.sort((a, b) => a - b);

    // Step 4: Return the Answer
    return [no_losses, one_loss];
};

// Test Cases
const testData1 = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
const testData2 = [[2,3],[1,3],[5,4],[6,4]];

console.log("Example 1:");
console.log(findWinners(testData1)); // Output: [[1,2,10],[4,5,7,8]]

console.log("Example 2:");
console.log(findWinners(testData2)); // Output: [[1,2,5,6],[]]

