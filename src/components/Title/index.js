import React from "react";
import "./style.css";

function Title(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="title"> Clicky Game!! {props.children}</h1>
                <h2 className="lead">Click on an image to earn points, but don't click on any more than once!.</h2>
            </div>
        </div>



    )
}

export default Title;
