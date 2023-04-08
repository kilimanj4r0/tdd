const calc = (nums) => {
    if (nums === '') {
        return 0;
    }
    return nums.split(',').reduce((acc, num) => {
        return acc + parseInt(num);
    }, 0);  
};

export default calc;
