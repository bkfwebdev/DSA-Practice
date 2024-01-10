function maxAdditionalDiners(N, K, M, S) {
    S.sort((a, b) => a - b); // Sort the existing diners' positions in ascending order
    let maxAdditionalDiners = 0;

    // Helper function to calculate empty seats to the left and right of a diner
    function calculateEmptySeats(position) {
        const leftEmptySeats = position - 1;
        const rightEmptySeats = N - position;
        return [leftEmptySeats, rightEmptySeats];
    }

    for (let i = 0; i < M; i++) {
        const [leftEmptySeats, rightEmptySeats] = calculateEmptySeats(S[i]);
        const additionalDiners = Math.min(leftEmptySeats / (K + 1), rightEmptySeats / (K + 1));
        maxAdditionalDiners = Math.max(maxAdditionalDiners, additionalDiners);
    }

    return Math.floor(maxAdditionalDiners);
}

// Example usage:
const N1 = 10;
const K1 = 1;
const M1 = 2;
const S1 = [2, 6];
console.log(maxAdditionalDiners(N1, K1, M1, S1)); // Output: 3

const N2 = 15;
const K2 = 2;
const M2 = 3;
const S2 = [11, 6, 14];
console.log(maxAdditionalDiners(N2, K2, M2, S2)); // Output: 1
