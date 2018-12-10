import React, { Component } from 'react';
import QuoteCard from './quote-card';
import { getQuote } from '../api/quotes-api';

class QuoteContainer extends Component {
    state = {
        quoteText: "Quote Text",
        quoteAuthor: "Author",
        isLoading: true
    }

    async componentDidMount() {
        this.generateQuote();
    }

    generateQuote = async () => {
        this.setState({ isLoading: true });

        const data = await getQuote();
        if (data !== "error") 
            this.setState({ 
                quoteText: data.quoteText,
                quoteAuthor: data.quoteAuthor
             });

        this.setState({ isLoading: false });
    }
    
    render() {
        return (
            <QuoteCard quoteText={this.state.quoteText}
                quoteAuthor={this.state.quoteAuthor}
                isLoading={this.state.isLoading} 
                onGenerateQuote={this.generateQuote}/>
        );
    }
}

export default QuoteContainer;