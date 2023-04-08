const calc = (nums) => {
    if (nums === '') {
        return 0;
    }
    const negatives = nums.match(/-\d+/g);
    if (negatives) {
        throw new Error('negatives not allowed');
    }
    const beginRegex = /^\/\/(.*)\n/;
    let delim = ','; // default
    if (nums.startsWith('//')) {
        [, delim] = nums.match(beginRegex);
        nums = nums.replace(beginRegex, '');
    }
    return nums
        .replace(/\n/g, delim)
        .split(delim)
        .reduce((acc, num) => {
            return num > 1000 ? acc : acc + parseInt(num);
        }, 0);
};

export default calc;
