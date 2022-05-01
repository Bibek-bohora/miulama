import { makeStyles } from "@material-ui/core"
import { borderRadius, margin } from "@mui/system";

const useStyles=makeStyles((theme)=>({
 



//   // h1:{
//   //   color:"red",
//   //   backgroundColor:"blue",
//   //   maxWidth:"80vw",
//   //   margin:"auto",
//   //   textAlign:"center"
//   // },
 


//   // buttons:{
//   //   backgroundColor:"#111",
//   //   color:"#FFF",
//   // },
  

//   // div:{

//   //   color:"blue",
//   // },

//   // typo:{

//   //         color:"red",
//   // },


  
//   Appbar:{

   
//     padding:"0px 50px",
//     [theme.breakpoints.down('sm')]:{
//       padding:"0px 10px",
//     }


// },


// Toolbar:{


//   display:"flex",
//   justifyContent:"space-between",
// },

//   largelogo:{

//       display:"none",
//       color:"pink",
//     [theme.breakpoints.up('sm')]:{
//       color:"green",
//       display:"block",
//  },

//   },

//   smalllogo:{
//    color:"green",
//    display:'block',
//  [theme.breakpoints.up('sm')]:{
//    color:"yellow",
//    display:"none",
// },


//   },




//   search:{


//     display:'flex',
//     alignItems:"center",
//     backgroundColor:theme.palette.error.dark,
//     width:"50%",
//     '&:hover':{
//      backgroundColor:'blue',
//     },
//     borderRadius:theme.shape.borderRadius,
//     padding:theme.spacing(1),
//    [theme.breakpoints.down('sm')]:{
//      display:(props)=>(props.serchtoggle?"flex":"none"),

//      width:"70%",
//    },

   

//  },


 

//  searchicons:{
//   marginLeft:theme.spacing(1)
// },





// input:{
//   color:"white",
//   marginLeft:theme.spacing(2),
// },


// cancle:{
//   [theme.breakpoints.up("sm")]:{
//   display:"none",
// }
// },


// Icons:{
//   display:(props)=>(props.serchtoggle ? "none":"flex"),
//   alignItems:"center",
// },





// searchleft:{
            
//   [theme.breakpoints.up("sm")]:{
//       // display:"none",
//       display:(props)=>(props.serchtoggle?"none":"flex"),
//       backgroundColor:'red',
// }
// },
















navbar: {
  backgroundColor: '#203040',
  '& a': {
    color: '#ffffff',
    marginLeft: 10,
  },
  
},

toolbar: {
  display: "flex",
  justifyContent: "space-between",

},
logoLg: {
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
},
logoSm: {
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
},
search: {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#424253",
  "&:hover": {
    backgroundColor:"#455a64",
    color:"white",
  },
  borderRadius: theme.shape.borderRadius,
  width: "50%",
  [theme.breakpoints.down("md")]: {
    display: (props) => (props.open ? "flex" : "none"),
    width: "70%",
  },


},


searchicons:{
    

  padding:theme.spacing(1),

},
input: {
  color: "white",
  marginLeft: theme.spacing(1),
},
cancel: {
  [theme.breakpoints.up("md")]: {
    display: "none",
  },


  [theme.breakpoints.down("md")]: {
    
    marginLeft:"60px",
  },

},
searchButton: {
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
},
icons: {
  alignItems: "center",
  display: (props) => (props.open ? "none" : "flex"),
},
badge: {
  marginRight: theme.spacing(2),
},


 
}));



export  default  useStyles;