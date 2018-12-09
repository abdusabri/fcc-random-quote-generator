import React, { Component } from 'react';
import QuoteCard from './quote-card';

class QuoteContainer extends Component {
    state = {
        quoteText: "Quote Text",
        quoteAuthor: "Author"
    }
    
    render() {
        return (
            <QuoteCard quoteText={this.state.quoteText}
                quoteAuthor={this.state.quoteAuthor}/>
        );
    }
}

export default QuoteContainer;