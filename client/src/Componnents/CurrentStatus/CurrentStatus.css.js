const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
    rowForIndicators:{
        display:"-webkit-box"
    },
    title:{
        marginTop:"10px"
    },
    date:{
        fontSize:"10px",
    },
    arduinoID:{
        fontSize:"10px",
        color:"black",
        marginRight:"40px",
        textAlign:"left"
    },
    inidcatorSection:{
        marginTop: "50px",
        marginLeft:"20%"
    }
    
});
export default styles;