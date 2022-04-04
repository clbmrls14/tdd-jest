const { sum, fibonacci, isAnagram, twoSum, longestSubstring } = require('./methods');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('gets first 5 numbers in fibonacci sequence', () => {
    const res = fibonacci(5);
    expect(res.length).toBe(5);
    expect(res).toStrictEqual([1,1,2,3,5]);
});

test('determines if words are anagrams', () => {
    expect(isAnagram('taco', 'dog')).toBe(false);
    expect(isAnagram('heart', 'earth')).toBe(true);
    expect(isAnagram('darned', 'errand')).toBe(false);
});

test(`given an array of integers, return indices of two numbers such that they 
    add up to a target value, if there is none then return empty list`, () => {
        expect(twoSum([], 9)).toEqual([]);
        expect(twoSum([2,7,11,15], 9)).toEqual([0,1]);
        expect(twoSum([3,2,4], 6)).toEqual([1,2]);
        expect(twoSum([3,2,4], 7)).toEqual([0,2]);
        expect(twoSum([1,2,3,4], 9)).toEqual([]);
});

test(`given a string, find the length of the longest substring without 
    repeating characters`, () => {
        expect(longestSubstring('')).toEqual(0);
        expect(longestSubstring('abcabcbb')).toEqual(3);
        expect(longestSubstring('bbbbb')).toEqual(1);
        expect(longestSubstring('pwwkew')).toEqual(3);
});