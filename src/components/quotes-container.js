import React, { Component } from 'react';

class QuotesContainer extends Component {
    state = {
        quoteText: "Quote Text",
        quoteAuthor: "Author"
    }
    
    render() {
        return (
            <div>
                {this.state.quoteText}
                <br/>
                {this.state.quoteAuthor}
            </div>
        );
    }
}

export default QuotesContainer;