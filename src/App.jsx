import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap'
import CanvasVisualizer from './components/CanvasVisualizer'
import { bubbleSort } from './utils/BubbleSort'

function App() {
  const [steps, setSteps] = useState(null);

  const startVisualization = () => {
    const array = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
    const recordedSteps = bubbleSort(array);
    setSteps(recordedSteps);
  };

  return (
    <div className="container text-center mt-4">
      <h1>Bubble Sort Visualizer</h1>
      <button className="btn btn-primary my-3" onClick={startVisualization}>
        Start
      </button>
      {steps &&  (console.log('STEPS:', steps), <CanvasVisualizer steps={steps} />)}
    </div>
  );
}

export default App
