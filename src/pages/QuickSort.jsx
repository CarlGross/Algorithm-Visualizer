import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { quickSortGetSteps } from './../utils/quickSort'
import styles from "./Sort.module.css"

export default function QuickSort(){
    const [quickSteps, setQuickSteps] = useState(null);
    const startVisualization = () => {
        const array = Array.from({length: 30}, () => Math.floor(Math.random() * 60) + 1);
        let recordedSteps = quickSortGetSteps(array);
        setQuickSteps(recordedSteps);
    }
    
    return(
    <div>
    <div className={styles.text}>
    <p>
     Time Complexity: <br></br>
     Average: O(NLog(N))<br></br>
     Best: O(NLog(N)) <br></br>
     Worst: O(N<sup>2</sup>) 
     </p>
     <p>
        Description: <br></br>
        It picks a pivot point within an array and sorts smaller elements before it and larger elements after it.
        This means that that value is in its correct index. Then the same process occurs with the left and right
        subarrays. The base case is when the subarray is of size 1 or 0. Picking a good pivot is important for the
        sort to work well with different array distributions. The best pivot would be one that is the exact median value.
        This example takes the median of the first, middle, and last index, gauranteeing at least one element will be on each side
        after sorting. It would have an O(N<sup>2</sup>) complexity if the pivot is constantly the largest or smallest value.
     </p>
    </div>
    <div className={styles.sort}>
      <button style={{left: "50%"}} className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <br></br>
      {quickSteps && <CanvasVisualizer steps={quickSteps} interval={300} text={"Quick Sort"} width={600} height={400}/>}
    </div>
    </div>
    );
    
}
