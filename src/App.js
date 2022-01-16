import { Routes, Route, BrowserRouter } from "react-router-dom";
import Question from "./Components/Question";
function App() {
  return (
    <div>
      <Question/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={Question}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
