const calc = (nums) => {
    if (nums === '') {
        return 0;
    }
    const beginRegex = /^\/\/(.*)\n/;
    let delim = ','; // default
    if (nums.startsWith('//')) {
        delim = nums.match(beginRegex)[1];
        nums = nums.replace(beginRegex, '');
    }
    return nums
        .replace(/\n/g, delim)
        .split(delim)
        .reduce((acc, num) => {
            return acc + parseInt(num);
        }, 0);
};

export default calc;
