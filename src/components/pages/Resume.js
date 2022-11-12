import React from "react";

const container = {
    display: "flex",
    justifyContent: "space-evenly",    
}



export default function Resume(){
    return(
        <div>
            <h1>Resume:</h1>
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