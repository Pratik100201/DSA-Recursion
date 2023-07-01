
var checkValidString = function (s) {
    let left_min = 0;
    let left_max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            left_min++;
            left_max++;
        }
        if (s[i] == ')') {
            left_min--;
            left_max--;

        }
        if (s[i] == '*') {
            left_min--;
            left_max++;

        }
        if (left_min < 0) {
            left_min = 0
        }
        if (left_max < 0) {
            return false;
        }

    }
    if (left_min == 0 || left_max == 0) {
        return true;
    }
    else {
        return false;
    }


};