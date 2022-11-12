import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer/Footer";

const bckGr = {
    background: "black",
    color: "white"
}

export default function App(){
    return(
<div style={bckGr}>
<PortfolioContainer />
<Footer/>
</div>
    )
}


