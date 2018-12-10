export const quoteCardStyles = theme => ({
    card: {
        width: 600,
        minHeight: 200
    },
    progress: {
        marginLeft: theme.spacing.unit * 2,
    },
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        backgroundColor: '#ffc200'
    }
  });