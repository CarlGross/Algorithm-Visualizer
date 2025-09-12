import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Sorting from "./pages/Sorting"
import BubbleSort from "./pages/BubbleSort"
import SelectionSort from "./pages/SelectionSort"
import InsertionSort from "./pages/InsertionSort"
import MergeSort from "./pages/MergeSort"
import QuickSort from "./pages/QuickSort"
import HeapSort from "./pages/HeapSort"
import "./App.css"

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/sorting">Sorting</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/sorting" element={<Sorting></Sorting>}/>
        <Route path="/bubble" element={<BubbleSort/>}/>
        <Route path="/selection" element={<SelectionSort/>}/>
        <Route path="/insertion" element={<InsertionSort/>}/>
        <Route path="/merge" element={<MergeSort/>}/>
        <Route path="/quick" element={<QuickSort/>}/>
        <Route path="/heap" element={<HeapSort/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>



    </Router>
  );  
}

export default App
