import React, { Component } from 'react';
import QuoteCard from './quote-card';

class QuotesContainer extends Component {
    state = {
        quoteText: "Quote Text",
        quoteAuthor: "Author"
    }
    
    render() {
        return (
            <div>
                <QuoteCard quoteText={this.state.quoteText}
                    quoteAuthor={this.state.quoteText}/>
            </div>
        );
    }
}

export default QuotesContainer;