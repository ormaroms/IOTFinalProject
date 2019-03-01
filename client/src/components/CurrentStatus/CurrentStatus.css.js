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
    rowForIndicators:{
        display:"-webkit-box",
        fontFamily: "Montserrat"
    },
    header: {
      paddingTop: '10px',
      backgroundColor: 'cornflowerblue',
      color: 'whitesmoke !important'
    },
    title:{
        fontSize: "35px",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        color: "whitesmoke"
    },
    date:{
        fontSize:"18px",
        marginBottom: "20px",
        fontFamily: "Montserrat",
        color: "whitesmoke"
    },
    arduinoID:{
        fontSize:"16px",
        color:"#a28b8b",
        textAlign:"left",
        marginLeft: "30px",
        fontFamily: "Montserrat",
    },
    inidcatorSection:{
        marginTop: "20px",
        fontFamily: "Montserrat"
    },
        formControl: {
            margin: theme.spacing.unit * 3,
        },
    
    
});
export default styles;