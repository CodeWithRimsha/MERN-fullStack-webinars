


import {Route , Switch} from "react-router-dom"
import Artist from '/Users/apple/webinars/src/artist/Artist.jsx'
import Navbar from "./Components/Navbar"
import SignUp from 'src/signup/SignUp.jsx'
//import Slider from './homepage/Slider';
import Home from './homepage/Home';
import { Container } from "react-bootstrap";


function App() {
  return (
    <div className="App">

    <Navbar/>
    <Container>
  <Switch>
    <Route exact path="/" component={Home}/>
  <Route exact path="/artist" component={Artist}/>
  <Route exact path="/signup" component={SignUp}/>
   
  </Switch>
  </Container> 
    </div>
  );
}

export default App;
