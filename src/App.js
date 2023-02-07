import { Routes, Route, BrowserRouter } from "react-router-dom";
import Question from "./Components/Question";
import "./App.css";
import Result from "./Components/Result";
import MarksStore from "./Components/MarksStore";
import HomePage from "./Pages/HomePage";
import TestStart from "./Pages/TestStart";
function App() {
  return (
    <div>
      <BrowserRouter>
        <MarksStore>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/Questions" element={<Question />} />
            <Route path="/test" element={<TestStart />} />
            <Route path="/Results" element={<Result />} />
          </Routes>
        </MarksStore>
      </BrowserRouter>
    </div>
  );
}

export default App;
