const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        // paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        height: '370px',
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
    chart: {
        width: "100%",
        height: "300px"
    }
});
export default styles;