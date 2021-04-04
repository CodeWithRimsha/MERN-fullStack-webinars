import React from 'react'
import {Slider} from './Slider'
import './homestyle.css';
import Top from "/Users/apple/fyp-webinars/webinars/src/homepage/Top.js"
function Home() {
    return (
   <>
    <Slider/>
    <div className="h">
    <h2 className="c">Top Selling</h2>
    <p>allyIpsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
    </div>
            <Top />
<div className="u">
<h2 className="c">Up Coming Events</h2>
<p>allyIpsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p> 
</div>
            <Top/>
     </>
    )
}

export default Home
