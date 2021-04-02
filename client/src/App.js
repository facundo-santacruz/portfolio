
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Principal from "./Components/Principal";
import About from "./Components/About";
import Container from "./Components/Container";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Tecnologies from "./Components/Tecnologies";

import './scss/index.scss';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Principal}/>
        <Route path="/menu" component={Nav}/>
        <Route path="/menu" component={Container}/>
        <Route path="/menu/about" component={About}/>
        <Route path="/menu/tecnologies" component={Tecnologies}/>
        <Route path="/menu/projects" component={Projects}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
