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
                    quoteAuthor={this.state.quoteAuthor}/>
            </div>
        );
    }
}

export default QuotesContainer;