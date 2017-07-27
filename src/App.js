import React, { Component } from 'react';
import colors from '/tmp/colors.json';
import './App.css';

class App extends Component {
  listItems() {
    let items = [];

    for (let color of colors) {
      items.push(
        <li key={color.id} style={{ backgroundColor: color.color}}>
          <a href={`https://twitter.com/everycolorbot/status/${color.id}`} target="_blank">
            <span className="rts" title={`${color.retweets} Retweets`}>
              💫 {color.retweets}
              </span>
              <span className="hearts" title={`${color.favourites} Likes`}>
              💕 {color.favourites}
            </span>
          </a>
        </li>
      )
    }

    return items;
  }

  render() {
    return (
      <div>
        <h1>Favourite Color 🌈</h1>
        <p>
          This little app tries to decide what people's favourite colors are based on
          likes and retweets from <a href="https://twitter.com/everycolorbot">@everycolorbot</a>.
          To find out more, check out <a href="https://github.com/edcs/favourite-color">
          github.com/edcs/favourite-color</a>
        </p>
        <div id="remix-on-glitch">
          <a href="https://glitch.com/edit/#!/remix/favourite-colour">
            <img
              src="https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg"
              alt="Remix on Glitch"
            />
          </a>
        </div>
        <ul className="App">
          {this.listItems()}
        </ul>
      </div>
    );
  }
}

export default App;
