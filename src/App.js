import { Routes, Route, BrowserRouter } from "react-router-dom";
import Question from "./Components/Question";
import StartPage from "./Components/StartPage";
import "./App.css";
import Result from "./Components/Result";
import MarksStore from "./Components/MarksStore";
function App() {
  return (
    <div>
      <BrowserRouter>
        <MarksStore>
          <Routes>
            <Route exact path="/" element={<StartPage />} />
            <Route path="/Questions" element={<Question />} />
            <Route path="/Results" element={<Result />} />
          </Routes>
        </MarksStore>
      </BrowserRouter>
    </div>
  );
}

export default App;
