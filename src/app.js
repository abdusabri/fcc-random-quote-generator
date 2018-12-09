import React, { Component } from 'react';
import QuoteContainer from './components/quote-container';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div id="quote-box">
          <QuoteContainer />
        </div>
      </div> 
    );
  }
}

export default App;
