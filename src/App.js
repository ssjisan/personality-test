import { Routes, Route, BrowserRouter } from "react-router-dom";
import Question from "./Components/Question";
import StartPage from "./Components/StartPage";
import './App.css';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StartPage/>}/>
          <Route path="/Questions" element={<Question/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
