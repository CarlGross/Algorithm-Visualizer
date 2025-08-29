export function quickSortGetSteps(inputArray){
    const steps = [];
    const arr = [...inputArray];
    quickSortStepHelper(arr, 0, arr.length, steps);
    return steps;
}

function quickSortStepHelper(arr, start, end, steps){
    const pivot = Math.floor((start+end)/2);
    const left = [];
    const right = [];
    const val = arr[pivot];
    for (let i=start; i<end; i++){
        steps.push({
            array: [...arr],
            compared: [i, pivot],
            swapped: false
        });
       if (i != pivot){
        if (arr[i] <= val){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
        }
    }
    for (let i=0;i<left.length;i++){
        arr[i+start]=left[i];
        steps.push({
            array: [...arr],
            compared: [i+start],
            swapped: true
        });
    }
    arr[start + left.length] = val;
    for (let i=0;i<right.length;i++){
        arr[start + i+ left.length + 1]=right[i];
        steps.push({
            array: [...arr],
            compared: [start + i+left.length + 1],
            swapped: true
        });
    }
    if (left.length > 1){
        quickSortStepHelper(arr, start, start+left.length, steps);
    }
    if (right.length > 1){
        quickSortStepHelper(arr, start+left.length + 1, end, steps);
    }

}
export function quickSort(inputArray){
    const arr = [...inputArray];
    quickSortHelper(arr, 0, arr.length);
}
function quickSortHelper(arr, start, end){
    const pivot = Math.floor((start+end)/2);
    const left = [];
    const right = [];
    const val = arr[pivot];
    for (let i=start; i<end; i++){
      if (i != pivot){
       if (arr[i] <= val){
        left.push(arr[i]);
       }
       else {
        right.push(arr[i]);
       }
     }
    }
    for (let i=0;i<left.length;i++){
        arr[i+start]=left[i];
    }
    arr[start+left.length] = val;
    for (let i=0;i<right.length;i++){
        arr[start + i+left.length + 1]=right[i];
    }
    if (left.length > 1){
        quickSortHelper(arr, start, start+left.length);
    }
    if (right.length > 1){
        quickSortHelper(arr, start+left.length+1, end);
    }
}