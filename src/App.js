import React, { Component } from 'react';
import colors from process.env.COLOR_SRC;
import './App.css';

class App extends Component {
    listItems() {
        let items = [];

        for (let color of colors) {
            items.push(
                <li key={color.id} style={{ backgroundColor: color.color}} />
            )
        }

        return items;
    }

    render() {
        return (
            <ul className="App">
                {this.listItems()}
            </ul>
        );
    }
}

export default App;
