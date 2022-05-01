import React from 'react'
import Navbar from './components/Navbar.js';

import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
//  import useStyles from "./utils/Styles.js"
import Leftbar from './components/Leftbar.js';
import Rightbar from './components/Rightbar.js';
import Feed from './components/Feed.js';
import Add from './components/Add.js';

import { Grid, makeStyles } from "@material-ui/core";




const useStyles=makeStyles((theme)=>({
  rightbar:{
  [theme.breakpoints.down("sm")]:{
        display:"none",
    }
  },


}));




const App = (props) => {
const classes=useStyles();
  return (
      <div>


      
        <Navbar />

        <Grid container spacing={2}>

        <Grid item sm={2} xs={2}>
             <Leftbar />
        </Grid>

        
        <Grid item sm={7} xs={10}>
         <Feed />
        </Grid>

        
        <Grid item sm={3} className={classes.rightbar}>
           
            <Rightbar />
        </Grid>

        </Grid>

        <Add />






      
      </div> 
  )
}
export default App;

