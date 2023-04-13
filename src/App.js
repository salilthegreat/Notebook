import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import NoteState from './context/notes/Notestate';
function App() {
  return (
    <>
    {/* Everything wrapped between Notestate and also their childrens can use the state variable */}
    <NoteState>
      <Router>
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/about" element={<About/>}/>
        </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
