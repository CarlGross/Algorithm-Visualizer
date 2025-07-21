export function bubbleSort(inputArray){
    const steps = [];
    const array = [...inputArray];
    for (let i = 0; i < array.length - 1; i++){
        //ComparedHighlight
        for (let j = 0; j < array.length - 1 - i; j++){
            steps.push({
                array: [...array],
                compared: [j, j+1],
                swapped: false

        });
        //SwappedHighlight
        if (array[j] > array[j+1]){
            //Destructuring
            [array[j], array[j+1]] = [array[j+1], array[j]];
            steps.push({
                array: [...array],
                compared: [j, j+1],
                swapped: true
            });
        }
        }
    }
    return steps;

}