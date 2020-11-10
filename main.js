let arr = [33, 442, 52, 435, 3535, 64]
let newArr = [];

//map from scratch


const map = () => {
    for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] + 1;
    }

    return newArr;
}

console.log(map(arr))

//reduce from scratch
const reduce = (array, combine, start) => {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current
}

console.log(reduce(arr, (a,b) => a + b, 0))

//filter from scratch

const filter = (array, test) => {
    let passed = []
    for (let element of array) {
        if (test(element)) {
            passed.push(element)
        }
    }
    return passed
}

console.log(filter(arr, i => i > 400))