import React from 'react'



import { makeStyles,
     Container,Card ,
     CardMedia,CardContent,
     CardActions,Typography,Button} from "@material-ui/core"




const useStyles=makeStyles((theme)=>({

    cointener:{
     paddingTop:theme.spacing(10),

  

    },

    cardMedia:{

      marginBottom:theme.spacing(3),
    },
    Media:{
       height:250,
       objectFit:"cointain",

    },


}));


const Post = ({info,name,img}) => {


    const classes=useStyles();
  return (
    

    // <Container className={classes.cointener}>
      

    //  post
    // </Container>


    <Card className={classes.cardMedia}  >
    <CardMedia
      component="img"
      
      src={img}
      alt="green iguana"
      className={classes.Media} 
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {info}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="medium" color="primary" varient="outline">Share</Button>
      <Button size="medium" color="primary" varient="outline">Learn More</Button>
    </CardActions>
  </Card>
);
}
  


export default Post;