import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
