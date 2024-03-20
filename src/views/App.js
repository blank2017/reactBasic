import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyComponent from "./Examples/MyComponent";
import Home from "./Examples/Home";
import Root from "../routes/root";
import ListUsers from "../components/ListUsers";
function App() {
  return (
    <Router>
      <div className="App">
        <Root />
        <header className="App-header">
          <Routes>
            <Route extract path="/" element={<Home />} />
            <Route path="/My-component" element={<MyComponent />} />
            <Route path="/users" element={<ListUsers />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
