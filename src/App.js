

import './App.css';
import {Route , Switch} from "react-router-dom"
import Artist from '/Users/apple/webinars/src/artist/Artist.jsx'
import Navbar from "./Components/Navbar"
function App() {
  return (
    <div className="App">
    <Navbar/>
<Switch>
  <Route exact path="/artist" component={Artist}/>
</Switch>
    </div>
  );
}

export default App;
