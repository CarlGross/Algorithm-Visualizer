import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap'
import CanvasVisualizer from './components/CanvasVisualizer'
import { bubbleSort } from './utils/BubbleSort'
import { bubbleSortGetSteps } from './utils/BubbleSort'
import { selectionSort } from './utils/selectionSort'
import { selectionSortGetSteps } from './utils/selectionSort'
import { insertionSort } from './utils/insertionSort'
import { insertionSortGetSteps } from './utils/insertionSort'
import { mergeSortGetSteps } from './utils/mergeSort'
import { mergeSort } from './utils/mergeSort'

function App() {
  const [bubbleSteps, setBubbleSteps] = useState(null);
  const [selectionSteps, setSelectionSteps] = useState(null);
  const [insertionSteps, setInsertionSteps] = useState(null);
  const [mergeSteps, setMergeSteps] = useState(null);
  let bubbleTime=0, selectionTime=0, insertionTime=0, mergeTime=0;

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

    const minTime = Math.min(bubbleTime, selectionTime, insertionTime, mergeTime);
    const mult = 300;
    bubbleTime = mult * (minTime/bubbleTime);
    selectionTime = mult * (minTime/selectionTime);
    insertionTime = mult * (minTime/insertionTime);
    mergeTime = mult * (minTime/mergeTime);


  };

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <h1>Bubble Sort</h1>
      {bubbleSteps &&  (console.log('BUBBLE STEPS:', bubbleSteps), <CanvasVisualizer steps={bubbleSteps} interval={bubbleTime}/>)}
      <h1>Selection Sort</h1>
      {selectionSteps &&  (console.log('SELECTION STEPS:', selectionSteps), <CanvasVisualizer steps={selectionSteps} interval={selectionTime}/>)}
      <h1>Insertion Sort</h1>
      {insertionSteps && (console.log('INSERTION STEPS:', insertionSteps), <CanvasVisualizer steps={insertionSteps} interval={insertionTime} />)}
      <h1>Merge Sort</h1>
      {mergeSteps && (console.log('Merge STEPS:', mergeSteps), <CanvasVisualizer steps={mergeSteps} interval={mergeTime}/>)}
    </div>
  );
}

export default App
