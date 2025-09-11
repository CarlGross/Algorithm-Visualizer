export function heapSortGetSteps(inputArray){
    const steps = [];
    const array = [...inputArray];
    let n = array.length;
    buildHeapSteps(array, n, steps);
    extractMaxSteps(array, n, steps);
    return steps;
}

function extractMaxSteps(arr, n, steps){
    for (let i = n - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        steps.push({
        array: [...arr],
        compared: [0, i],
        swapped: true
        });
        heapifySteps(arr, i, 0, steps);
    }
}

function extractMax(arr, n){
    for (let i = n - 1; i > 0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
}

function buildHeapSteps(arr, n, steps){
    for (let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapifySteps(arr, n, i, steps);
    }
}

function buildHeap(arr, n){
    for (let i = Math.floor(n/2) - 1; i >= 0; i--){
        heapify(arr, n, i);
    }
}

function heapifySteps(arr, n, i, steps){
    let max = i;
    let left = i*2 + 1;
    let right = i*2 + 2;
    if (left < n && arr[left] > arr[i]){
        max = left; 
        steps.push({
        array: [...arr],
        compared: [i, left],
        swapped: false
        });
    } 
    if (right < n && arr[right] > arr[max]){
        max = right;
        steps.push({
        array: [...arr],
        compared: [max, right],
        swapped: false
        });
    }
    if (max != i){
        [arr[i], arr[max]] = [arr[max], arr[i]];
        heapify(arr, n, max);
        steps.push({
        array: [...arr],
        compared: [i, max],
        swapped: true
        });
    }
}

function heapify(arr, n, i){
    let max = i;
    let left = i*2 + 1;
    let right = i*2 + 2;
    if (left < n && arr[left] > arr[i]){
        max = left; 
    } 
    if (right < n && arr[right] > arr[max]){
        max = right;
    }
    if (max != i){
        [arr[i], arr[max]] = [arr[max], arr[i]];
        heapify(arr, n, max);
    }
}

export function heapSort(inputArray){
    const array = [...inputArray];
    let n = array.length;
    buildHeap(array, n);
    extractMax(array, n);
    
}