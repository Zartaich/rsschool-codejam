module.exports = function sumOfOther(arr) {
    const result = [];
    arr.forEach((num) => {
        const value = arr.reduce((ac, number) => ac + number, 0);
        result.push(value - num);
    });
    return result;
};