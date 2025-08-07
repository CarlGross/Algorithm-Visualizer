export function insertionSortGetSteps(inputArray){
    const steps = [];
    const array = [...inputArray];

    for (let i = 1; i < array.length; i++){
        let j = 1;
        const val = array[i];
        while (i - j >= 0 && val < array[i-j]){
            [array[i-j + 1], array[i-j]] = [array[i-j], array[i-j+1]];
            steps.push({
                array: [...array],
                compared: [i - j + 1, i-j],
                swapped: true,
                partition: false
            });
            j++;
        }
    }

    return steps;
}
export function insertionSort(inputArray){
    const array = [...inputArray];

    for (let i = 1; i < array.length; i++){
        let j = 1;
        const val = array[i];
        while (i - j >= 0 && val < array[i-j]){
            [array[i-j + 1], array[i-j]] = [array[i-j], array[i-j+1]];
            j++;
        }
    }
}