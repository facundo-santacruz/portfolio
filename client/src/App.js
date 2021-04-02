
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";

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
