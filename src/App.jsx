import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import Sorting from "./pages/Sorting"
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
      </Routes>



    </Router>
  );  
}

export default App
