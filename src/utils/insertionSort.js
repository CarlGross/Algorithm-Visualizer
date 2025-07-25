export function insertionSort(inputArray){
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
                swapped: true
            })
            j++;
        }
    }

    return steps;
}