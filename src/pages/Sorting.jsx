import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { bubbleSort, bubbleSortGetSteps } from './../utils/BubbleSort'
import { selectionSort, selectionSortGetSteps } from './../utils/selectionSort'
import { insertionSort, insertionSortGetSteps } from './../utils/insertionSort'
import { mergeSort, mergeSortGetSteps } from './../utils/mergeSort'
import { quickSort, quickSortGetSteps } from './../utils/quickSort'
import { Link } from 'react-router-dom'

function Sorting() {
  const [bubbleSteps, setBubbleSteps] = useState(null);
  const [selectionSteps, setSelectionSteps] = useState(null);
  const [insertionSteps, setInsertionSteps] = useState(null);
  const [mergeSteps, setMergeSteps] = useState(null);
  const [quickSteps, setQuickSteps] = useState(null);
  let bubbleTime=0, selectionTime=0, insertionTime=0, mergeTime=0, quickTime=0;

  const startVisualization = () => {
    const array = Array.from({length: 100}, () => Math.floor(Math.random() * 60) + 1);

    let recordedSteps = bubbleSortGetSteps(array);
    setBubbleSteps(recordedSteps);
    let t0 = performance.now();
    bubbleSort(array);
    let t1 = performance.now();
    bubbleTime = (t1-t0)/recordedSteps.length;

    recordedSteps = selectionSortGetSteps(array);
    setSelectionSteps(recordedSteps);
    t0 = performance.now();
    selectionSort(array);
    t1 = performance.now();
    selectionTime = (t1-t0)/recordedSteps.length;

    recordedSteps = insertionSortGetSteps(array);
    setInsertionSteps(recordedSteps);
    t0 = performance.now();
    insertionSort(array);
    t1 = performance.now();
    insertionTime = (t1-t0)/recordedSteps.length;

    recordedSteps = mergeSortGetSteps(array);
    setMergeSteps(recordedSteps);
    t0 = performance.now();
    mergeSort(array);
    t1 = performance.now();
    mergeTime = (t1-t0)/recordedSteps.length;

    recordedSteps = quickSortGetSteps(array);
    setQuickSteps(recordedSteps);
    t0 = performance.now();
    quickSort(array);
    t1 = performance.now();
    quickTime = (t1-t0)/recordedSteps.length;

    const minTime = Math.min(bubbleTime, selectionTime, insertionTime, mergeTime, quickTime);
    const mult = 400;
    bubbleTime = mult * (minTime/bubbleTime);
    selectionTime = mult * (minTime/selectionTime);
    insertionTime = mult * (minTime/insertionTime);
    mergeTime = mult * (minTime/mergeTime);
    quickTime = mult * (minTime/quickTime);


  };

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      {bubbleSteps &&  <Link to="/bubble"><CanvasVisualizer steps={bubbleSteps} interval={bubbleTime} text={"Bubble Sort"}/></Link>}
      {selectionSteps &&  <Link to="/selection"><CanvasVisualizer steps={selectionSteps} interval={selectionTime} text={"Selection Sort"}/></Link>}
      {insertionSteps && <Link to="/insertion"><CanvasVisualizer steps={insertionSteps} interval={insertionTime} text={"Insertion Sort"}/></Link>}
      {mergeSteps && <Link to="/merge"><CanvasVisualizer steps={mergeSteps} interval={mergeTime} text={"Merge Sort"}/></Link>}
      {quickSteps && <Link to="/quick"><CanvasVisualizer steps={quickSteps} interval={quickTime} text={"Quick Sort"}/></Link>}
    </div>
  );
}

export default Sorting
