let array = [1, 2, 3, 1, 3];
let repeated;
let element;
let value;

function deleteUniqueElements(arrayOfNumbers) {
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        value = arrayOfNumbers[i]
        repeated = false;
        for (let j = 0; j < arrayOfNumbers.length; j++) {
            element = arrayOfNumbers[j];
            if (value == element && i != j) {
                repeated = true;
            }
        }
        if (!repeated) {
            arrayOfNumbers.splice(i, 1);
        }
    }
    return arrayOfNumbers
}
console.log(array);
console.log(deleteUniqueElements(array));

