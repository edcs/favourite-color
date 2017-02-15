import React, { Component } from 'react';
import colors from '../tmp/colors.json';
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
