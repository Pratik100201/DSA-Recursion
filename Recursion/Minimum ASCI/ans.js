
var minimumDeleteSum = function(s1, s2) {
    const cache = new Array(s1.length).fill([]).map(_ => new Array(s2.length).fill(0));

    function dp(i, j) {
        if (i === s1.length && j === s2.length) return 0;
        if (i < s1.length && j === s2.length) return dp(i + 1, j) + s1[i].charCodeAt();
        if (j < s2.length && i === s1.length) return dp(i, j + 1) + s2[j].charCodeAt();
        if (i === s1.length || j === s2.length) return 0;
        if (cache[i][j]) return cache[i][j];

        if (s1[i] === s2[j]) {
            cache[i][j] = dp(i + 1, j + 1);
            return cache[i][j];
        }
        cache[i][j] = Math.min(dp(i + 1, j) + s1[i].charCodeAt(), dp(i, j + 1) + s2[j].charCodeAt());
        return cache[i][j];
    }

    return dp(0, 0, 0);
};