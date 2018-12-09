import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { Twitter } from 'mdi-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { quoteCardStyles } from './quote-card-styles';

const QuoteCard = ({ quoteText, quoteAuthor, classes}) => {
    return (
        <Card className={classes.card}>
            <CardHeader
                // classes={{
                //     content: classes.cardHeaderContent
                // }}
                subheader={
                    <Button id="new-quote" variant="outlined" color="primary">
                        Generate Quote
                    </Button>
                } />
            <Divider/>
            <CardContent>
                <span id="text">
                    {quoteText}
                </span>
                <br/>
                <span id="author">
                    {quoteAuthor}
                </span>
            </CardContent>
            <Divider />
            <CardActions>
                <a id="tweet-quote"
                    href={`https://twitter.com/intent/tweet?text="${quoteText}" by ${quoteAuthor}`}
                    target="blank">
                    <IconButton aria-label="Tweet Quote">
                        <Twitter />
                    </IconButton>
                </a>
            </CardActions>
        </Card>
    );
}

QuoteCard.propTypes = {
    quoteText: PropTypes.string.isRequired,
    quoteAuthor: PropTypes.string.isRequired    
}

export default withStyles(quoteCardStyles)(QuoteCard);