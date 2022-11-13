import React from "react";
import { Card } from "react-bootstrap";
import { CardGroup } from "react-bootstrap/CardGroup";

const container = {
      
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        height: "80%",
        width: "100%",
       
}



export default function Resume(){
    return(
        <div>
            <div style={container}>
            <ul>
                <h2>Front End: </h2>
                <li>Html</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Jquery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Bulma</li>
            </ul>
            <ul>
                <h2>Back End:</h2>
                <li>Express</li>
                <li>Node</li>
                <li>mySQL</li>
                <li>noSQL(mongoDB, Mongoose)</li>
                <li>Object Relational Mapping(ORM)</li>
                <li>Model View Controller(MVC)</li>
                <li>Progressive Web Applications(PWA)</li>
                <li>GraphQL</li>
                <li>API's</li>
            </ul>
            </div>
        </div>
    )
}