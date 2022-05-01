import React from 'react'

import Post from "./Post"

import { makeStyles, Container } from "@material-ui/core"




const useStyles=makeStyles((theme)=>({

    cointener:{
     paddingTop:theme.spacing(10),

  

    },


}));


const Feed = () => {


    const classes=useStyles();
  return (
    

    <Container className={classes.cointener}>
      

       <Post  name="Bibek" info="lorem"      img="/img/b.jpg" />
       <Post name="Asim"   info="lorem1"      />
       <Post name="Bibas"   info="lorem2"    img="/img/bibas.jpg"/>
       <Post name="sachin"   info="lorem3"   img=""  />
       <Post name="lokendra"   info="lorem4" img=""  />

    </Container>
  )
}

export default Feed;