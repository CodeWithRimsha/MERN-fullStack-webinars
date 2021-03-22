import React , {useState}from 'react'
import '../App.css'
import logo from './newlogo.png'
import {BrowserRouter , Route,Switch ,Link} from 'react-router-dom';

import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MicIcon from '@material-ui/icons/Mic';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import { LiveHelpOutlined } from '@material-ui/icons';
import NaturePeopleOutlinedIcon from '@material-ui/icons/NaturePeopleOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';



function Navbar() {




//const [showLinks, setshowLinks] = useState(false);

    return (
        <div className="Navbar">
    <img id="logo"src= {logo}alt='webinar logo'></img>


<div className="menu">
   <div className="link">
   
        <ExploreOutlinedIcon className="icon"/>
       <Link to="/Home">Explore</Link>
       <NaturePeopleOutlinedIcon className="icon"/>
       <Link to="/artist">Artist</Link>
       <ScatterPlotIcon className="icon"/>
       <Link to="/Category"  > Categories</Link><ExpandMoreIcon id="category"/>
       
       <LiveHelpOutlined className="icon"/>
       <Link to="/Help">Live Help</Link>
       <RateReviewOutlinedIcon className="icon"/>
       <Link to="Review">Review Us </Link>
   
  
      
   </div>
   <button id='open'>OPEN</button>
</div>

<div class="searchbar">
    <div className="sarea">
<input type="text" placeholder="search here.." id="sinput"/>

<MicIcon className="searchIcon" />
<SearchIcon className="searchIcon"/>
</div>

</div>
<div className="UserLogin">
    <AccountCircleIcon className="login"/>
    <p className='loginword'>Sign In</p>
    <MoreVertIcon id="more"/>
</div>
            


        </div>
    )
}

export default Navbar