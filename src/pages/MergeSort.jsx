import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { mergeSortGetSteps } from './../utils/mergeSort'
import styles from "./Sort.module.css"

export default function MergeSort(){
    const [mergeSteps, setMergeSteps] = useState(null);
    const startVisualization = () => {
        const array = Array.from({length: 30}, () => Math.floor(Math.random() * 60) + 1);
        let recordedSteps = mergeSortGetSteps(array);
        setMergeSteps(recordedSteps);
    }
    
    return(
    <div>
    <div className={styles.text}>
    <p>
     Time Complexity: <br></br>
     Average: O(NLog(N))<br></br>
     Best: O(NLog(N)) <br></br>
     Worst: O(NLog(N)) 
     </p>
     <p>
        Description: <br></br>
        It recursively breaks subarrays in half until the arrays are of size 1. 
        Then for each recursive subarray (smallest to largest), it calls a helper function which merges them
        using two pointers. 
     </p>
    </div>
    <div className={styles.sort}>
      <button style={{left: "50%"}} className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <br></br>
      {mergeSteps && <CanvasVisualizer steps={mergeSteps} interval={300} text={"Merge Sort"} width={600} height={400}/>}
    </div>
    </div>
    );
    
}
