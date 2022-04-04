const sum = (a, b) => {
    return a + b;
}

const fibonacci = (n) => {
    if (n < 1) {
        return [];
    } else if (n === 1) {
        return [1];
    }

    var fib_list = [];

    const fib = (lastNum, currNum) => {
        if (fib_list.length !== n) {
            fib_list.push(currNum);
            fib(currNum, lastNum + currNum);
        }
    }

    fib(0, 1);
    return fib_list;
}

const isAnagram = (a, b) => {
    if (a.length !== b.length) {
        return false;
    }
    var bArray = b.split("");

    for (var i = 0; i < a.length; i++) {
        if (!bArray.includes(a[i])) {
            return false;
        }
        var index = bArray.indexOf(a[i]);
        delete bArray[index];
    }
    return true;
}

const twoSum = (nums, target) => {
    if (nums.length < 2) {
        return [];
    }

    for (var i = 0; i < nums.length-1; i++){
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

const longestSubstring = (str) => {
    if (str.length < 1) {
        return 0;
    } else if (str.length === 1) {
        return 1;
    }

    var chars = new Array(128).fill(0);
    var right = 0;
    var left = 0;
    var max = 0;

    while (right < str.length) {
        var r = str[right];
        chars[r.charCodeAt(0)]++;
        console.log(chars[r.charCodeAt(0)]);

        while (chars[r.charCodeAt(0)] > 1) {
            var l = str[left];
            chars[l.charCodeAt(0)]--;
            left++;
        }

        max = Math.max(max, right - left + 1);
        right++;
    }
    return max;
}

module.exports = {
    sum,
    fibonacci,
    isAnagram,
    twoSum,
    longestSubstring,
};