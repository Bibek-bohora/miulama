import React,{useState} from 'react'
import {
  Button,
  Container,
  Fab,
  FormControlLabel,
  FormLabel,
  makeStyles,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Snackbar,
  TextField,
    IconButton,
    Tooltip,
  
}  from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import MuiAlert from "@material-ui/lab/Alert";


const useStyles=makeStyles((theme)=>({


    fab:{

      position:"fixed",
      bottom:"20px",
      right:"30px",
    },

    container:{

       width:580,
       height:580,
       backgroundColor:"white",

  //     position: 'absolute',
  // top: '54%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
  // margin:"auto",
  

  top: 0,
  bottom: "10px",
  left: 0,
  right: 0,
  margin: "auto",
 

      [theme.breakpoints.down("sm")]:{

           height:"100vh",
           width:"100vw",
      },
    },


    item:{

      paddingTop:"10px",
      maxWidth:"97vh",
      marginBottom:theme.spacing(3),
    }

    
}));


function Alert(props) {
  return <MuiAlert elevation={7} variant="filled" {...props} />;
}


const Add = () => {


    const classes=useStyles();

    const [open, setopen] = useState(false)
    const [openAlert, setopenAlert] = useState(false)

    

  
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setopenAlert(false);
  };
  return (
    <>
     
    <Tooltip title="Add"  className={classes.fab} onClick={()=>setopen(true)}>
    <IconButton>
      <AddIcon />
    </IconButton>
  </Tooltip>


    <Modal open={open}>
       
          <Container className={classes.container} > 
            
            <form action="" autoComplete='off' className={classes.form} >


              <div className={classes.item}>
                <TextField id="outlined-basic" label="Title" variant="outlined"  style={{width:"100%"}}/>
              </div>



              <div className={classes.item}>
               

              <TextField
        
          id="outlined-multiline-static"
          multiline
          label="Multiline"
         
          rows={4}
          variant="outlined"
          style={{width:"100%"}}
          size="small"
          defaultValue="hello tell your story"
        />


              </div>


              <div className={classes.item}>

            <TextField select value="public" label="visibility" style={{width:"30%"}}>

              <MenuItem value="public">public</MenuItem>
              <MenuItem value="private">private</MenuItem>
              <MenuItem value="only me">only me</MenuItem>
            </TextField>

              </div>

                   

                   <div className={classes.item}>

                   
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
   
                   </div>
              
            </form>
            <div className={classes.item}>

            <Button variant="outlined" color="sucess"  onClick={()=>setopenAlert(true)}>
                  create
            </Button>

            <Button variant="outlined" color="error" onClick={()=>setopen(false)}>
                   cancel
            </Button>

            </div>


          </Container>
      </Modal>

     

<Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>

  </>
  )
}

export default Add;