
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { Principal } from "./Components/Principal";

import './scss/index.scss';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Principal}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
