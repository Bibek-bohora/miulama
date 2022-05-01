// import { makeStyles, AppBar,
//    Toolbar,
//     Typography,
//    InputBase,
//    Badge,
//    IconButton,
//    StyledBadge,
//   Avatar
//   } from '@material-ui/core';
// import React ,{useState}from 'react'
// import SearchIcon from '@mui/icons-material/Search';

// import useStyles from '../utils/Styles'

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import MailIcon from '@mui/icons-material/Mail';
// import CancelIcon from '@mui/icons-material/Cancel';


// import PropTypes from 'prop-types';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import Box from '@mui/material/Box';
// // import Container from '@mui/material/Container';
// import Fab from '@mui/material/Fab';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import Zoom from '@mui/material/Zoom';
// // import { useState } from 'react/cjs/react.production.min';




// function ScrollTop(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });



  
//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       '#back-to-top-anchor',
//     );

//     if (anchor) {
//       anchor.scrollIntoView({
//         behavior: 'mdooth',
//         block: 'center',
//       });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: 'fixed', bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Zoom>
//   );
// }





// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };




// const Navbar = (props) => {




//     const [serchtoggle, setserchtoggle] = useState(false)
    
//     const classes=useStyles({serchtoggle});


//     const searchtogglefun= () => {
     
//       console.log("click happen")
//       setserchtoggle(true)

//     } 


//   return (
// <>





//     <CssBaseline />
//     <AppBar position="sticky"  className={classes.Appbar} >
//       <Toolbar className={classes.Toolbar}>
//         <Typography variant="h6"  className={classes.largelogo}>
//           FooDGarageE
//         </Typography>
//         <Typography variant="h6" className={classes.smalllogo} >
//           foodgarage
//         </Typography>


//             {/* searchfeild */}
//         <div className={classes.search}>
//         <SearchIcon  className={classes.searchicons}/>
//          <InputBase placeholder='search .......' className={classes.input}  />
//          <CancelIcon onClick={()=>setserchtoggle(false)} className={classes.cancle} />
//         </div>

//         <div className={classes.Icons}>

//         <SearchIcon  className={classes.searchleft}  onClick={searchtogglefun} />
         
//         <Badge  badgeContent={1} color="error" >
//             <MailIcon color="primary" fontSize='medium' />
//          </Badge>


//          <IconButton aria-label="cart">
//              <Badge badgeContent={4} color="secondary" fontSize="medium">
//                       <ShoppingCartIcon />

                      
//             </Badge>
//         </IconButton>

//         <Avatar
//               alt="Remy Sharp"
//               src="/img/b.jpg"
        
//            />
       

//         </div>



//       </Toolbar>

     
//     </AppBar>
// {/* 
//     <Toolbar id="back-to-top-anchor" />

    
//     <ScrollTop {...props}>
//       <Fab color="error" size="small" aria-label="scroll back to top">
//         <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop> // for scrolling up */ }

//     </>
//   )
// }

// export default Navbar;


 
import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";



import { useState } from "react";
import useStyles from "../utils/Styles";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MailIcon from '@mui/icons-material/Mail';
import CancelIcon from '@mui/icons-material/Cancel';
import NotificationsIcon   from '@mui/icons-material/Notifications';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });


  return (
    <AppBar position="fixed" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          FOODGARAGE
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          FG
        </Typography>
        <div className={classes.search}>
          <SearchIcon  className={classes.searchicons} />
          <InputBase placeholder="Search..." className={classes.input} />
          <CancelIcon className={classes.cancel} onClick={() => setOpen(false)}  sx={{ display: { sm: 'none' }}}/>
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => setOpen(true)}
            sx={{ display: { sm: 'none' }}}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="/img/b.jpg"
          />

        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;