import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

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
          
    }
   
  });


const Postdetail = () => {
    const {postId} = useParams()
    const [postdetail, setPostdetail] = useState([])
    const {body,title} = postdetail;

    // post api
    useEffect(()=> {
        const postUrl =  `https://jsonplaceholder.typicode.com/posts/${postId}`
        fetch(postUrl)
        .then(res=> res.json())
        .then(data => setPostdetail(data))
    }, [])
    const classes = useStyles();

    // comment api
    const[comment, setComment] = useState([])
    useEffect(()=> {
        const Url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        fetch(Url)
        .then(res=> res.json())
        .then(data=> setComment(data, comment))
    },[])
    
    // css style
    const CommentStyle = {
        textAlign: "center",
        width: "50%",
        margin: "auto",
        backgroundColor: "tomato",
        padding: "20px 0",
        borderRadius: "10px 80px 10px 80px"
    }
    return (
            <div>
                <div>
                    <Card className={classes.root}>
                        <CardActionArea className={classes.bodyStyle}>
                            <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Title: {title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                body: {body}
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <div>
                    <h1 style={CommentStyle}>Comment Here...</h1>
                    {
                        comment.slice(0,5).map(comment=> <Comment comment={comment} key={comment.id}></Comment>)
                    }
                </div>
            </div>
    );
};

export default Postdetail;