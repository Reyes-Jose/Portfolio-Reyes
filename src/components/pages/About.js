import React from "react";
import myImage from "../../images/IMG-555.jpg"





export default function About(){
    return (
    <div>

        <img src={myImage} alt="" style={{width: 300, height: 300, borderRadius: 200, }} ></img>


        <h1>About Me</h1>
        <p>
        Jose is an aspiring web developer who is on the pursuit of knowledge. Jose can help you achieve your web development needs. 
        </p>
    </div>
    )
};


