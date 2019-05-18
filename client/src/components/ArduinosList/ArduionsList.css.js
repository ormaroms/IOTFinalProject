const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        height: '350px',
        width: '400px',
        paddingRight: '0px !important',
        paddingLeft: '0px !important'
    },
    header: {
        paddingTop: '10px',
        backgroundColor: 'cornflowerblue',
        color: 'whitesmoke !important'
    },
    title:{
        fontSize: "35px",
        fontWeight: "bold",
        color: "whitesmoke"
    },
    text:{
        fontSize:"16px",
        color:"black",
        // fontFamily: "Montserrat"
    },
    signUp: {
        textDecoration: "underline",
        cursor: "pointer"
    },
    addButton: {
        color: "black",
        cursor: "pointer"
    },
    tableRows: {
        height: '200px',
        maxHeight: '200px',
        overflowY: 'scroll'
    },
    error: {
        color: "red",
        fontSize: "18px",
        margin: "5px"
    }
});
export default styles;