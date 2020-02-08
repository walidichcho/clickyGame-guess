import React from "react";
import "./style.css";


function Nav(props) {
    return (
        <div className="container">
            <div className="row">
                <h4 className="col-sm">
                    Clicky Game!
    </h4>
                <h4 className="col-sm">
                    {this.state.message}
                </h4>
                <h4 className="col-sm">
                    {this.state.score} | {this.state.topscore}
                </h4>
            </div>
        </div>

    )
}

export default Nav;