

import './App.css';
import {Route , Switch} from "react-router-dom"
import Artist from '/Users/apple/webinars/src/artist/Artist.jsx'
import Navbar from "./Components/Navbar"
import Home from '/Users/apple/webinars/src/homepage/Home.js'
function App() {
  return (
    <div className="App">
    <Navbar/>
<Switch>
  <Route exact path="/artist" component={Artist}/>
   <Route exact path="/" component={Home}/>
</Switch>
    </div>
  );
}

export default App;
