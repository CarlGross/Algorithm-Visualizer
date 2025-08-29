import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Sorting from "./pages/Sorting"
import BubbleSort from "./pages/BubbleSort"
import SelectionSort from "./pages/SelectionSort"
import InsertionSort from "./pages/InsertionSort"
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
        
      </Routes>



    </Router>
  );  
}

export default App
