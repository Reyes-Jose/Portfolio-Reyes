import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

const footerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "80vh",
    // position:"absolute",
    // left:"0",
    // bottom: "0px",
    // right:"0",
}


export default function Footer() {
  return (
    <div  style={{paddingBottom:"6rem"}
    }>
      <footer style={footerStyle}>
        <div>
        <a href="https://www.linkedin.com/in/reyes-jose/">
        <BsLinkedin size={50} style={{color: "white"}}/>
        </a>
        </div>
        <div>
            <a href="https://github.com/Reyes-Jose">
        <BsGithub size={50} style={{color: "white"}}/>
        </a>
        </div>
        <div>
        <a href="https://stackoverflow.com/users/19081651/jdoom?tab=profile">
        <BsStackOverflow size={50} style={{color: "white"}}/>
        </a>
        </div>
      </footer>
    </div>
  );
}
