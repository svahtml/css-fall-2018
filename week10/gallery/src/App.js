import React, { Component } from 'react';
import Gallery from './components/gallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 10
    };
    this.updateClicks = this.updateClicks.bind(this);
  }

  updateClicks() {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={this.updateClicks}>Times I have been Click - {this.state.clicks}</h1>
        <Gallery title="Fall 2018" />
      </div>
    );
  }
}

export default App;
