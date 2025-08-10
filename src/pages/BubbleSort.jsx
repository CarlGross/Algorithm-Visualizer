import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { bubbleSortGetSteps } from './../utils/BubbleSort'
import styles from "./Sort.module.css"

export default function BubbleSort(){
    const [bubbleSteps, setBubbleSteps] = useState(null);
    const startVisualization = () => {
        const array = Array.from({length: 30}, () => Math.floor(Math.random() * 60) + 1);
        let recordedSteps = bubbleSortGetSteps(array);
        setBubbleSteps(recordedSteps);
    }
    
    return(
    <div>
    <div className={styles.text}>
    <p>
     Time Complexity: <br></br>
     Average: O(N<sup>2</sup>)<br></br>
     Best: O(N) <br></br>
     Worst: O(N<sup>2</sup>) 
     </p>
     <p>
        Description: <br></br>
        The bubble sort works by moving the largest value to the top, like an air bubble in water. It iterates from the first index onwards, compares adjacent
         indexes, and swaps the values if the index to the left has a larger value. Then, because the largest value is on the top, the next iteration can ignore that index. The best case would occur when the list is already completely sorted. 
         This requires there to be a boolean which ends the sort if no swaps occured during an iteration.
     </p>
    </div>
    <div className={styles.sort}>
      <button style={{left: "50%"}} className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <br></br>
      {bubbleSteps &&  (console.log('BUBBLE STEPS:', bubbleSteps), <CanvasVisualizer steps={bubbleSteps} interval={300} text={"Bubble Sort"} width={600} height={400}/>)}
    </div>
    </div>
    );
    
}