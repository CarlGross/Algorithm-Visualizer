import { useState } from 'react'
import 'bootstrap'
import CanvasVisualizer from './../components/CanvasVisualizer/CanvasVisualizer'
import { heapSortGetSteps } from './../utils/heapSort'
import styles from "./Sort.module.css"

export default function HeapSort(){
    const [heapSteps, setHeapSteps] = useState(null);
    const startVisualization = () => {
        const array = Array.from({length: 30}, () => Math.floor(Math.random() * 60) + 1);
        let recordedSteps = heapSortGetSteps(array);
        setHeapSteps(recordedSteps);
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
        It creates a representation of a max heap binary tree within the array. 
        This means that the tree needs to be complete at every level except the last, and every node 
        is of a larger value than all of the nodes in the sub-heap below it. It is built by calling a helper function, 
        heapify, which repairs a sub-heap with an invalid root. Then it's as simple as extracting the max and
        swapping it's position with the furthest index of the tree, making it 1 node smaller. Finally, use heapify
        to repair the root.
     </p>
    </div>
    <div className={styles.sort}>
      <button style={{left: "50%"}} className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <br></br>
      {heapSteps && <CanvasVisualizer steps={heapSteps} interval={300} text={"Heap Sort"} width={600} height={400}/>}
    </div>
    </div>
    );
    
}
