import React, { useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';
import Image from '../Image/Image';

const useStyles = makeStyles({
    root: {
      width: "50%",
      margin: "10px auto",
      textAlign: "center",
      borderRadius: "10px",
    },
    bodyStyle : {
          backgroundColor: "lightgray",
          padding: "10px 0",
          
    },
    media: {
        width: "100px",
        height: "100px",
        margin: "auto",
        borderRadius: "50%"
    }
   
  });


const Comment = (props) => {
    // comment css style add
    const classes = useStyles();

    // comment add from postdetail
    const {name,email,body} = props.comment;

 // random image set up
    const [imageitem, setImageitem] = useState([])
    const {large} = imageitem
    useEffect(()=> {
        fetch("https://randomuser.me/api/?results=2")
        .then(res=> res.json())
        .then(data => setImageitem(data["results"][0].picture))
    },[])
    return (
        <div>
           <Card className={classes.root}>
                <CardActionArea className={classes.bodyStyle}>
                    <CardContent>
                        <CardMedia >
                            <img className={classes.media} src={large} alt=""/>
                        </CardMedia>
                        <Typography gutterBottom variant="h5" component="h2">
                            Name: {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Email: {email}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Comment: {body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
};

export default Comment;