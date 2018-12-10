import React, { Component } from 'react';
import QuoteCard from './quote-card';

class QuoteContainer extends Component {
    state = {
        quoteText: "Quote Text",
        quoteAuthor: "Author",
        isLoading: true
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    }
    
    render() {
        return (
            <QuoteCard quoteText={this.state.quoteText}
                quoteAuthor={this.state.quoteAuthor}
                isLoading={this.state.isLoading} />
        );
    }
}

export default QuoteContainer;