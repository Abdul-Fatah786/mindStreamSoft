import { Routes, Route } from "react-router-dom";
import Page from "./Pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  );
}

export default App;
