var longestOnes = function(nums, k) {
    let lw = 0;
    let rw = 0; 
    let sl = 0;
    let msl = 0;
    let nz = 0;

    while (rw < nums.length) { 
        if (nums[rw] == 0) {
            nz++;
        }

        while (nz > k) {
            if (nums[lw] == 0) {
                nz--;
            }
            lw++;
        }

        sl = rw - lw + 1;

        if (sl > msl) {
            msl = sl;
        }

        rw++;
    }

    console.log(msl);
    return msl;
};

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
longestOnes(nums, k);
