/**
 * @param {number} N
 * @param {string} C
 * @return {string}
 */
function getWrongAnswers(N, C) {
    console.log(N,C);
    // Write your code here
    let solution = "";
    for ( let i = 0 ; i < N ; i++){
      if(C.charAt(i)=="A"){solution = solution + "B"}
      if(C.charAt(i)=="B"){solution = solution + "A"}
    }
    console.log(solution)
    return solution;
  }

  