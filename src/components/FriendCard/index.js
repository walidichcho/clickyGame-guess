import React from "react";
import "./style.css";

function FriendCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Played By:</strong> {props.playedBy}
                    </li>

                </ul>
            </div>


        </div>
    );
}

export default FriendCard;
