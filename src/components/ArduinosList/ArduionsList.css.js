const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        height: '450px',
        width: '85% ',
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
        color: "cornflowerblue",
        cursor: "pointer",
        marginRight: "80px"
    },
    tableRows: {
        height: '100px',
        maxHeight: '100px',
        overflowY: 'scroll'
    },
    error: {
        color: "red",
        fontSize: "18px",
        margin: "5px"
    },
    addDeviceTitle: {
        color: "darkslategray",
        float: "left",
        marginLeft: "20px",
        marginBottom: "0px",
    }
});
export default styles;