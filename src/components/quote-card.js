import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const QuoteCard = ({ quoteText, quoteAuthor }) => {
    return (
        <Card>
            <CardContent>
                {quoteText}
                <br/>
                {quoteAuthor}
            </CardContent>
        </Card>
    );
}

QuoteCard.propTypes = {
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired    
}

export default QuoteCard;