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
        marginTop:"15px"
    },
    date:{
        fontSize:"12px",
        marginBottom: "20px"
        
    },
    arduinoID:{
        fontSize:"10px",
        color:"#a28b8b",
        marginRight:"40px",
        textAlign:"left",
        marginBottom: "20px"
    },
    inidcatorSection:{
        marginTop: "50px",
        marginLeft:"20%"
    },
        formControl: {
            margin: theme.spacing.unit * 3,
        },
    
    
});
export default styles;