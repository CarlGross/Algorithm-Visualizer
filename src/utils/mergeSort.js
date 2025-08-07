export function mergeSortGetSteps(inputArray){
    const steps = [];
    const array = [...inputArray];
    mergeStep(array, 0, array.length, steps);
    return steps;
}

function mergeStep(arr, start, end, steps){
    if (end - start <= 1) return;
    const mid = Math.floor((start+end)/2);
    steps.push({
        array: [...arr],
        compared: [start, end],
        swapped: false
    });
    mergeStep(arr, start, mid, steps);
    mergeStep(arr, mid, end, steps);

    mergeStepHelper(arr, start, mid, end, steps);
}

function mergeStepHelper(arr, start, mid, end, steps){
    const merged = [];
    let left=start, right=mid;
    while (left < mid && right < end){
        steps.push({
            array: [...arr],
            compared: [left, right],
            swapped: false
        });
        if (arr[left] < arr[right]){
            merged.push(arr[left++]);
        }
        else {
            merged.push(arr[right++]);
        }
    }
    while (left < mid){
        merged.push(arr[left++]);
    }
    while (right < end){
        merged.push(arr[right++]);
    }
    for (let i=0; i<merged.length;i++){
        arr[start+i]=merged[i];
        steps.push({
            array: [...arr],
            compared: [start+i],
            swapped: true
        });
    }
}

export function mergeSort(inputArray){
    const arr = [...inputArray];
    merge(arr, 0, arr.length);
}

function merge(arr, start, end){
     if (end - start <= 1) return;
    const mid = Math.floor((end+start)/2);
    merge(arr, start, mid);
    merge(arr, mid, end);
    mergeHelper(arr, start, mid, end);
}

function mergeHelper(arr, start, mid, end){
    const merged = [];
    let left=start, right=mid;
    while (left < mid && right < end){
        if (arr[left] < arr[right]){
            merged.push(arr[left++]);
        }
        else {
            merged.push(arr[right++]);
        }
    }
    while (left < mid){
        merged.push(arr[left++]);
    }
    while (right < end){
        merged.push(arr[right++]);
    }
    for (let i=0; i<merged.length;i++){
        arr[start+i]=merged[i];
    }
}