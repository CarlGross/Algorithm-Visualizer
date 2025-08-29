import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { selectionSortGetSteps } from './../utils/SelectionSort'
import styles from "./Sort.module.css"

export default function SelectionSort(){
    const [selectionSteps, setSelectionSteps] = useState(null);
    const startVisualization = () => {
        const array = Array.from({length: 30}, () => Math.floor(Math.random() * 60) + 1);
        let recordedSteps = selectionSortGetSteps(array);
        setSelectionSteps(recordedSteps);
    }
    
    return(
    <div>
    <div className={styles.text}>
    <p>
     Time Complexity: <br></br>
     Average: O(N<sup>2</sup>)<br></br>
     Best: O(N<sup>2</sup>) <br></br>
     Worst: O(N<sup>2</sup>) 
     </p>
     <p>
        Description: <br></br>
        It iterates through the unsorted array and finds the minimum value. The value will then be swapped with the first index of the 
        unsorted array, making the left side of the array sorted. It will always have O(N<sup>2</sup>) time complexity, because
        it always needs to search through the entire unsorted array each iteration.
     </p>
    </div>
    <div className={styles.sort}>
      <button style={{left: "50%"}} className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <br></br>
      {selectionSteps && <CanvasVisualizer steps={selectionSteps} interval={300} text={"Selection Sort"} width={600} height={400}/>}
    </div>
    </div>
    );
    
}
