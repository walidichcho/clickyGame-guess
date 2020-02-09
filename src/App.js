
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topscore: 0,
    message: "",
    clickedArray: []

  };

  clickPicture = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const sufflePicture = this.sufflePicture(friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: sufflePicture });

    // if click image already exist in the clicked Array, set score to 0 and start the game.
    // empty the clicked array and send a message and update top score
    console.log('STATE', this.state.clickedArray)
    console.log('type', typeof this.state.clickedArray)
    if (this.state.clickedArray.includes(id)) {
      this.setState({
        clickedArray: [],
        message: "Sorry, Incorrect!! Game Over Click an image to start again!",
        score: 0
      })
    }
    else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        message: "Correct!!, Good Job",
        score: this.state.score + 1,
      })
    }

    // set top score:
    if (this.state.score > this.state.topscore) {
      this.setState({ topscore: this.state.score })
    }
  };

  sufflePicture = (picturesArray) => {
    for (let i = picturesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
    }
    return picturesArray;
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="row">
            <h4 className="col-sm">
              Clicky Game!
    </h4>
            <h4 className="col-sm">
              {this.state.message} </h4>

            <h4 className="col-sm">
              Score :  {this.state.score} | Top Score : {this.state.topscore}
            </h4>
          </div>
        </div>

        <Title />

        {this.state.friends.map(friend => (
          <FriendCard
            clickPicture={this.clickPicture}

            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            playedBy={friend.playedBy}

          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
