const calc = (nums) => {
    if (nums === '') {
        return 0;
    }
    return nums
        .replace(/\n/g, ',')
        .split(',')
        .reduce((acc, num) => {
            return acc + parseInt(num);
        }, 0);
};

export default calc;
