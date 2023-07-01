
var findAnagrams = function (s, p) {
    const ansArr = [];
    const hash = {};
    for(let i = 0; i < p.length; i++) {
        hash[p[i]] = (hash[p[i]] ?? 0) + 1;
    };

    let l = 0;
    let r = 0;
    while(r < s.length) {
        if(hash[s[r]] > 0) {
            hash[s[r]]--;
            if(r - l + 1 === p.length) ansArr.push(l);
            r++;
        } else {
            if(hash[s[l]] !== undefined) hash[s[l]]++;
            l++;
            if(l > r) r = l;
        }
    }

    return ansArr;
};