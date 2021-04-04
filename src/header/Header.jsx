import React from 'react'
import '/Users/apple/fyp-webinars/webinars/src/header/bootstrap.min.css';
import {Navbar , Nav , NavDropdown ,Container ,Form , FormControl , Button} from 'react-bootstrap'
import MicIcon from '@material-ui/icons/Mic';

import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
    return (
       <>
  <Navbar bg="light" expand="lg"  collapseOnselect>
  <Container>
  <Navbar.Brand className="appname" href="/">WEBINARS PK</Navbar.Brand>
  
     {/*RIGHT SIDE NAVBAR LINKS */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
   

   {/*BUILT_IN CLASS TO SET LINKS AT RIGHT SIDE */}
    <Nav className="mr-auto">

    {/*HOME NAVBAR LINKS */}
     <Nav.Link href="/">
     <i class="fas fa-home"></i>
      &nbsp;
      Home</Nav.Link>
      
      {/* ARTIST NAVBAR LINKS */}
       <Nav.Link href="/artist">
    <i class="far fa-user"></i>
      &nbsp;
      Artist</Nav.Link>
     
      {/*GALLERY NAVBAR LINKS */}
       <Nav.Link href="#link">
       <i className="fas fa-images"></i>
       &nbsp;
       Gallery</Nav.Link>
     
     {/*CATEGORIES DROPDOWN*/}
        <NavDropdown title="Categories" id="basic-nav-dropdown" className="ml-auto">
        <NavDropdown.Item href="#action/3.1">
         <i class="fas fa-book-reader"></i>
          &nbsp;
         Educational</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
        <i class="fas fa-icons"></i>
          &nbsp;
        Entertaiment</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">
        <i class="fas fa-microphone"></i>
          &nbsp;
        Motivational</NavDropdown.Item>
         <NavDropdown.Item href="#action/3.2">
       <i class="fas fa-pray"></i>
          &nbsp;
        Religious</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        {/*RIGHT SIDE END*/}

        <div class="searchbar">
    <div className="sarea">
<input type="text" placeholder="search here.." id="sinput"/>

<MicIcon className="searchIcon" />
<SearchIcon className="searchIcon"/>
</div>

</div>





         {/*LEFT SIDE*/}
         {/*DROP DOWM JOIN AS*/}
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <NavDropdown  title="Join As" id="basic-nav-dropdown">
        <NavDropdown.Item href="/organizerSignUp">
         <i className="fas fa-user"></i>
          &nbsp;
         Organizer</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
         <i className="fas fa-users"></i>
          &nbsp;
        Audience</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
      {/*LEFT SIDE END*/}
  </Container>
</Navbar>
       </>
    )
}

export default Header