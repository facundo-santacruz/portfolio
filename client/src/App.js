
import './scss/App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Principal from "./Components/Principal";
import About from "./Components/Contact";
import Container from "./Components/Container";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Tecnologies from "./Components/Tecnologies";

import './scss/index.scss';
import BottomBar from './Components/BottomBar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="" component={BottomBar}/>
        <Route path="" component={Nav}/>
        <Route exact path="/" component={Principal}/>
        <Route path="/initial" component={Container}/>
        <Route path="/about" component={About}/>
        <Route path="/tecnologies" component={Tecnologies}/>
        <Route path="/projects" component={Projects}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
