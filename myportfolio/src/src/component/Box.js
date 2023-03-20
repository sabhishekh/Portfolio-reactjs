import React from "react";
import './Box.css'; 

import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Resume from "../component/image/Abhishekh-singh_cv-4.pdf"
export default function Box(){
    return(
        <>
        <div className="mains-cantainer">
    <div className="main-heading">
    <div className="main-info">
        <h1 className="main-name">RESUME </h1>
           
           
            <p className="Self-intro">HII: MY SELF ABHISHEKH SINGH AND <br/>
            I AM A FRONTEND DEVELOPER <br/>

            </p>
            <div>
           <a className="Icon-1" href="https://twitter.com/ashok_abhishekh?t=q-KAhKsYQSA3NYzHzmhqAA&s=08"><FaTwitter/></a>
           <a className="Icon-2" href="https://www.linkedin.com/in/abhishekh-ashok-singh-9938b7242"><FaLinkedin/></a>
           <a className="Icon-3" href="https://github.com/sabhishekh"><FaGithub/></a>
           </div>
        

        
       <a className="Resume" href={Resume} download>Cv-Download</a>
       <ul className="About-section">
        <li >Contact No :-9503028582</li>
        <li >Email id :-abhishekhsingh045@gmail.com</li>
       </ul>
         </div>
        
            <div className="cantainer">
            
              <h2 className="Main-Heading"> FRONTEND-DEVELOPER</h2>
                <p className="info">I am a frontend developer and <br/>
                 My skill Html,Css,javascript,reactjs.
             <br/> I am a hardworking student and i have completed project <br/>
             </p>
            
                <div>
                    <a className="link1" href="https://dainty-stardust-c7244c.netlify.app/">E-commerce</a><br/>
                   
                    </div>
        
        
                   
                    

                    
                    
                    <button className="btn-n" >ViewPortfolio</button>


                
            </div>
            
            


        
            
    </div>
</div>
        </>
    )
}