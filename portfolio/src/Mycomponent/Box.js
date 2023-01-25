import React from "react";
import './Box.css'; 
import abhi from './abhi.jpg';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";








export default function Box(){
    return(
        <>
        <div className="mains-cantainer">
    <div className="main-heading">
    <div className="main-info">
        <h1 className="personal-info">
            ABHISHEKH SINGH
            <img  className="img2" src={abhi} alt="abhi" height={250} width={200}/>
            <p>HII: MY SELF ABHISHEKH SINGH AND <br/>
            I AM A FRONTEND DEVELOPER <br/>

            </p>
           <span className="icon-items"><FaTwitter size='2.3rem'/> <FaLinkedin size='2.3rem'/> <FaGithub size='2.3rem'/> <FaInstagram size='2.3rem'/></span>

        </h1>
         </div>
        
            <div className="cantainer">
                 ABHISHEKH SINGH <br/>
                FRONTEND-DEVELOPER
                <p className="info">I am a frontend developer and <br/>
                 My skill Html,Css,javascript,reactjs.
             <br/> I am a hardworking student and i have completed project <br/>
                    1.Food website <br/>
                    2.portfolio website.
                    <br/>

                    </p>
                    
                    <button className="btn-n" >ViewPortfolio</button>


                
            </div>
            
            <img className="img1" src={abhi} alt="abhi" height={400} width={300}/>


        
            
    </div>
</div>
        </>
    )
}