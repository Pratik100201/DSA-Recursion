const minDistance = function (word1, word2) {
  // the helper function finds the length of the largest common subsequence
  const memo = {};
  const helper = (i = w1.length - 1, j = w2.length - 1) => {
    let key = `${i},${j}`;
    if (memo[key] !== undefined) {
      return memo[key];
    }
    if (i < 0 || j < 0) {
      return 0;
    }
    if (w1[i] === w2[j]) {
      const res = 1 + helper(i - 1, j - 1);
      memo[key] = res;
      return memo[key];
    }
    const res = Math.max(helper(i, j - 1), helper(i - 1, j));
    memo[key] = res;
    return memo[key];
  };
  const longestSubseq = helper();
  // find the total number of deletions by finding the difference between the length of each word and the subsequence, and then adding the two up 
  const minDeletions = word1.length + word2.length - 2 * longestSubseq;
  return minDeletions;
};