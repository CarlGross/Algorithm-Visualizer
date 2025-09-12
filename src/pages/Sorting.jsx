import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { heapSort, heapSortGetSteps } from '../utils/heapSort'
import { bubbleSort, bubbleSortGetSteps } from './../utils/bubbleSort'
import { selectionSort, selectionSortGetSteps } from './../utils/selectionSort'
import { insertionSort, insertionSortGetSteps } from './../utils/insertionSort'
import { mergeSort, mergeSortGetSteps } from './../utils/mergeSort'
import { quickSort, quickSortGetSteps } from './../utils/quickSort'
import { Link } from 'react-router-dom'
import styles from "./Sort.module.css"

function Sorting() {
  const [bubbleSteps, setBubbleSteps] = useState(null);
  const [selectionSteps, setSelectionSteps] = useState(null);
  const [insertionSteps, setInsertionSteps] = useState(null);
  const [mergeSteps, setMergeSteps] = useState(null);
  const [quickSteps, setQuickSteps] = useState(null);
  const [heapSteps, setHeapSteps] = useState(null);
  const [bubbleTime, setBT] = useState(null);
  const [selectionTime, setST] = useState(null);
  const [insertionTime, setIT] = useState(null);
  const [mergeTime, setMT] = useState(null);
  const [quickTime, setQT] = useState(null);
  const [heapTime, setHT] = useState(null);


  const startVisualization = () => {
    const array = Array.from({length: 100}, () => Math.floor(Math.random() * 60) + 1);

    let bs = bubbleSortGetSteps(array);
    let t0 = performance.now();
    bubbleSort(array);
    let t1 = performance.now();
    let bt= t1-t0;

    let ss = selectionSortGetSteps(array);
    t0 = performance.now();
    selectionSort(array);
    t1 = performance.now();
    let st = t1-t0;

    let is = insertionSortGetSteps(array);
    t0 = performance.now();
    insertionSort(array);
    t1 = performance.now();
    let it = (t1-t0);

    let ms = mergeSortGetSteps(array);
    t0 = performance.now();
    mergeSort(array);
    t1 = performance.now();
    let mt = t1-t0;
     console.log('%f', mt);

    let qs = quickSortGetSteps(array);
    t0 = performance.now();
    quickSort(array);
    t1 = performance.now();
    let qt = (t1-t0);

    let hs = heapSortGetSteps(array);
    t0 = performance.now();
    heapSort(array);
    t1 = performance.now();
    let ht = (t1-t0);
    console.log('%f', ht);

    const minTime = Math.min(bt, st, it, mt, qt, ht);
    const mult = 10000;
    console.log('%f',  mult * (mt/minTime) / ms.length);
    console.log('steps: %d', ms.length);
    console.log('%f', mt / ms.length);
    console.log('%f', mult * (ht/minTime) / hs.length);
    console.log('steps: %d', hs.length);
    console.log('%f', ht / hs.length);

    setBT(mult * (bt/minTime) / bs.length);
    setST(mult * (st/minTime) / ss.length);
    setIT(mult * (it/minTime) / is.length);
    setMT(mult * (mt/minTime) / ms.length);
    setQT(mult * (qt/minTime) / qs.length);
    setHT(mult * (ht/minTime) / hs.length);
    setBubbleSteps(bs);
    setSelectionSteps(ss);
    setInsertionSteps(is);
    setMergeSteps(ms);
    setQuickSteps(qs);
    setHeapSteps(hs);

  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
      Click button to start and click on a sort to learn more. <br></br> <br></br>
      <div className={styles.button}>
      <button className="btn btn-primary my-3"  onClick={startVisualization}>
        Start
      </button>
      </div>
      </div>
      <div className={styles.tile}>
      {bubbleSteps &&  <Link to="/bubble"><CanvasVisualizer steps={bubbleSteps} interval={bubbleTime} text={"Bubble Sort"}/></Link>}
      {selectionSteps &&  <Link to="/selection"><CanvasVisualizer steps={selectionSteps} interval={selectionTime} text={"Selection Sort"}/></Link>}
      {insertionSteps && <Link to="/insertion"><CanvasVisualizer steps={insertionSteps} interval={insertionTime} text={"Insertion Sort"}/></Link>}
      {mergeSteps && <Link to="/merge"><CanvasVisualizer steps={mergeSteps} interval={mergeTime} text={"Merge Sort"}/></Link>}
      {quickSteps && <Link to="/quick"><CanvasVisualizer steps={quickSteps} interval={quickTime} text={"Quick Sort"}/></Link>}
      {heapSteps && <Link to="/heap"><CanvasVisualizer steps={heapSteps} interval={heapTime} text={"Heap Sort"}/></Link>}
      </div>
    </div>
  );
}

export default Sorting
