import React from 'react'
import { Link } from 'react-router-dom'
function Nav () {
    return (
        <div className="Nav">
            <Link to="/home">
                
                <div>Home</div>
                   
            </Link>
  
            <Link to="/about">
                <div>About</div>
            </Link>
  
            <Link to="/nasa">
                <div>NASAList</div>
            </Link>
        </div>
        
    )
  }
  


export default Nav