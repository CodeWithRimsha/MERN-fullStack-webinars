


import {Route , Switch} from "react-router-dom"
import Artist from '/Users/apple/fyp-webinars/webinars/src/artist/Artist.jsx'
import Navbar from "./Components/Navbar"
//import SignIn from '/Users/apple/webinars/src/signup/SignIn.jsx'
//import Slider from './homepage/Slider';
import Home from '/Users/apple/fyp-webinars/webinars/src/homepage/Home.jsx';
import { Container } from "react-bootstrap";
import ContactForm from "./Contact/ContactForm";
import Header from "./header/Header";
import SignUp from "./organizer/SignUp";
import './App.css'


function App() {
  return (
    <div className="App">

    <Header/>
    <main>
    <Container>
   <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/artist" component={Artist}/>
    <Route exact path="/contact" component={ContactForm}/>
    <Route exact path="/organizerSignUp" component={SignUp}/>
   
   </Switch>
  </Container> 
  </main>
    </div>
  );
}

export default App;
