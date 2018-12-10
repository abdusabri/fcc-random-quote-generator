import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Twitter } from 'mdi-material-ui';
import { FormatQuoteOpen } from 'mdi-material-ui';
import { FormatQuoteClose } from 'mdi-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { quoteCardStyles } from './quote-card-styles';

const QuoteCard = ({ quoteText, quoteAuthor, classes, isLoading, onGenerateQuote }) => {
    return (
        <Card className={classes.card}>
            <CardHeader
                subheader={
                    <div style={{display: "flex", justifyItems: "left", justifyContent: "left"}}>
                        <Button id="new-quote" variant="outlined" color="primary"
                            disabled={isLoading} onClick={onGenerateQuote} >
                            Generate Quote
                        </Button>
                        {isLoading && <CircularProgress className={classes.progress} />}
                    </div>
                } />
            <Divider/>
            <CardContent>
                {quoteText && <FormatQuoteOpen />}
                <span id="text">
                    {quoteText}
                </span>
                {quoteText && <FormatQuoteClose />}
                <br/>
                <span id="author" style={{marginTop: "1em", display: "block"}}>
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
    quoteAuthor: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onGenerateQuote: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default withStyles(quoteCardStyles)(QuoteCard);