function getLargestNumber(numbers) {
    return Math.max(...numbers);
}

function filterEvenNumber(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}

function sumArray(numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

function findDuplicates(numbers) {
    const duplicates = [];
    const numCount = {};

    for (const num of numbers) {
        if (numCount[num]) {
            numCount[num]++;
            if (numCount[num] === 2) {
                duplicates.push(num);
            }
        } else {
            numCount[num] = 1;
        }
    }

    return duplicates;
}

function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}

function concatenateArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

function calculateAverage(numbers) {
    const sum = sumArray(numbers);
    return sum / numbers.length;
}

function allPositive(numbers) {
    return numbers.every((num) => num > 0);
}

function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

function findIndexOf(numbers, target) {
    return numbers.indexOf(target);
}

module.exports = {
    getLargestNumber,
    filterEvenNumber,
    sumArray,
    findDuplicates,
    sortArray,
    concatenateArrays,
    calculateAverage,
    allPositive,
    removeDuplicates,
    findIndexOf,
};
