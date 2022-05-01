import React from 'react'
import{ Container, Typography }  from "@material-ui/core";
import HomeIcon from '@mui/icons-material/Home';
import { makeStyles } from "@material-ui/core"



import ListIcon from '@mui/icons-material/List';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';
import CameraIcon from '@mui/icons-material/Camera';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import CollectionsIcon from '@mui/icons-material/Collections';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';


const useStyles=makeStyles((theme)=>({

 
    Container:{

     
        height:"100vh",
        color:"white",
        backgroundColor:"#37474f",
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0,

        [theme.breakpoints.up("sm")]:{
          border:"1px solid #999",
          backgroundColor:"whitesmoke",
          color:"#555555",

        }

    },

    lbitem:{


        display:"flex",
        alignItems:"center",
        color:"white",
        marginBottom:theme.spacing(4),
        // marginLeft:theme.spacing(3),


        [theme.breakpoints.up("sm")]:{

            marginBottom:theme.spacing(3),
            cursor:"pointer",
            color:"#555",
        },
    },


    icons:{
      
        marginRight:theme.spacing(1),
        [theme.breakpoints.up("sm")]:{

       
         fontSize:"18px",
        },
    },

    text:{
        fontWeight:500,
        [theme.breakpoints.down("sm")]:{

           display:"none",
        },
        
    },


}));

const Leftbar = () => {
    const classes=useStyles();


  return (
        <Container maxWidth="xs" className={classes.Container}>
          <div className={classes.lbitem}>
          <HomeIcon  className={classes.icons} />
         <Typography  className={classes.text}>
             Homepage
         </Typography>
        </div>

        <div className={classes.lbitem}>
          <ListIcon   className={classes.icons} />
         <Typography className={classes.text}>
             list
         </Typography>
        </div>

        <div className={classes.lbitem}>
          <CameraIcon className={classes.icons} />
         <Typography  className={classes.text}>
             camera
         </Typography>
        </div>

        <div className={classes.lbitem}>
          <VideoSettingsIcon  className={classes.icons} />
         <Typography  className={classes.text}>
             vedio
         </Typography>
        </div>


        <div className={classes.lbitem}>
          <AppsIcon   className={classes.icons} />
         <Typography  className={classes.text}>
             Apps
         </Typography>
        </div>


        <div className={classes.lbitem}>
          <CollectionsIcon  className={classes.icons} />
         <Typography  className={classes.text}>
             collections
         </Typography>
        </div>


        <div className={classes.lbitem}>
          <StorefrontIcon  className={classes.icons} />
         <Typography  className={classes.text}>
             marketplaces
         </Typography>
        </div>

        <div className={classes.lbitem}>
          <SettingsIcon className={classes.icons} />
         <Typography  className={classes.text}>
             setting
         </Typography>
        </div>


        <div className={classes.lbitem}>
          <LogoutIcon  className={classes.icons} />
         <Typography  className={classes.text}>
             logout
         </Typography>
        </div>


        </Container>
    
  )
}

export default Leftbar;