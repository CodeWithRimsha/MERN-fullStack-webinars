


import {Route , Switch} from "react-router-dom"
import Artist from '/Users/apple/fyp-webinars/webinars/src/artist/Artist.jsx'
//import Navbar from "./Components/Navbar"
//import SignIn from '/Users/apple/webinars/src/signup/SignIn.jsx'
//import Slider from './homepage/Slider';
import Home from '/Users/apple/fyp-webinars/webinars/src/homepage/Home.jsx';
import { Container } from "react-bootstrap";
import ContactForm from "./Contact/ContactForm";
import Header from "./header/Header";

import './App.css'
import SignIn from "./organizer/SignIn";
//import {audienceSignIn} from '/Users/apple/fyp-webinars/webinars/src/audience/audienceSignIn.js'
import audienceSignIn from './audience/audienceSignIn.js'
import audienceSignUp from "./audience/audienceSignUp";
import about from "./about/about";
import OSU from '/Users/apple/fyp-webinars/webinars/src/organizer/OSU.js'
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
   
 
    <Route exact path="/organizerSignIn" component={SignIn}/>
    <Route exact path="/organizerSignUp" component={OSU}/>
    <Route exact path="/audienceSignIn" component={audienceSignIn} />
    <Route exact path="/audienceSignUp" component={audienceSignUp}/>
   <Route exact path="/about" component={about}/>
   </Switch>
   
  </Container> 
    </main>
    </div>
  );
}

export default App;
