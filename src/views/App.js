import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyComponent from "./Examples/MyComponent";
import Root from "../routes/root";
function App() {
  return (
    <Router>
      <div className="App">
        <Root />
        <header className="App-header">
          <Routes>
            <Route path="/My-component" element={<MyComponent />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
