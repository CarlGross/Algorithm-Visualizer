import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { insertionSortGetSteps } from './../utils/insertionSort'
import styles from "./Sort.module.css"

export default function InsertionSort(){
    const [insertionSteps, setInsertionSteps] = useState(null);
    const startVisualization = () => {
        const array = Array.from({length: 30}, () => Math.floor(Math.random() * 60) + 1);
        let recordedSteps = insertionSortGetSteps(array);
        setInsertionSteps(recordedSteps);
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
        It starts at the second index of the unsorted array and continously swaps the value with the one to its left, while its smaller.
        In order for the sort to have a O(N) time complexity, the list has to be completely sorted.
     </p>
    </div>
    <div className={styles.sort}>
      <button style={{left: "50%"}} className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <br></br>
      {insertionSteps && <CanvasVisualizer steps={insertionSteps} interval={300} text={"Insertion Sort"} width={600} height={400}/>}
    </div>
    </div>
    );
    
}
