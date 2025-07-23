import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap'
import CanvasVisualizer from './components/CanvasVisualizer'
import { bubbleSort } from './utils/BubbleSort'
import { selectionSort } from './utils/selectionSort'

function App() {
  const [bubbleSteps, setBubbleSteps] = useState(null);
  const [selectionSteps, setSelectionSteps] = useState(null);

  const startVisualization = () => {
    const array = Array.from({length: 30}, () => Math.floor(Math.random() * 60) + 1);
    let recordedSteps = bubbleSort(array);
    setBubbleSteps(recordedSteps);
    recordedSteps = selectionSort(array);
    setSelectionSteps(recordedSteps);
  };

  return (
    <div className="container text-center mt-4">
      <button className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      <h1>Bubble Sort</h1>
      {bubbleSteps &&  (console.log('STEPS:', bubbleSteps), <CanvasVisualizer steps={bubbleSteps} />)}
      <h1>Selection Sort</h1>
      {selectionSteps &&  (console.log('STEPS:', selectionSteps), <CanvasVisualizer steps={selectionSteps} />)}
    </div>
  );
}

export default App
