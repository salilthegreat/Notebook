import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import NoteState from './context/notes/Notestate';
import Login from './components/Login';
import Signup from './components/Signup';
import Userstate from './context/user/Userstate';
import Alert from './components/Alert';
import Alertstate from './context/alert/Alertstate';
function App() {
  return (
    <>
      {/* Everything wrapped between Notestate and also their childrens can use the state variable */}
      <NoteState>
        <Userstate >
          <Alertstate>
          <Router>
            <Navbar />
            <Alert/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
            </Routes>
          </Router>
          </Alertstate>
        </Userstate>
      </NoteState>
    </>
  );
}

export default App;
