import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
       <>
       <a href="#">LOGO</a>
        <nav>
        <ul>
          
          <li>
            <Link to='/blogs'>Blogs</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          
        </ul>
      </nav> 
       </>
    );
}

export default Home;