export function selectionSort(inputArray){
    const steps = [];
    const array = [...inputArray];
    for (let i = 0; i < array.length - 1; i++){
        let min = i;
        for (let j = i; j < array.length; j++){
            steps.push({
                array: [...array],
                compared: j==min ? [min]: [min, j],
                swapped: false
        });
        if (array[j] < array[min]){
            min = j;
        }
        }
        [array[i], array[min]] = [array[min], array[i]];
        steps.push({
            array: [...array],
            compared: [i, min],
            swapped: true
        })


    }

    return steps;
}