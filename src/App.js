import React, { Component } from 'react';
import QuotesContainer from './components/quotes-container';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <QuotesContainer />
      </div>
    );
  }
}

export default App;
