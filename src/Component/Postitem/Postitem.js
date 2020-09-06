import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  paper: {
    height: 300,
    width: 340,
    margin: "10px",
    textAlign: "center",
    padding: "10px",
    cursor:"pointer"
  },
  title: {
    fontSize: "15px"
  },
  body: {
    textAlign: "justify",
    fontSize: "20px"
  },
 
}));

const Postitem = (props) => {
    const {title,body,id} = props.post;
    const classes = useStyles();
    return (
                <div>
                    <Grid item xs={4}>
                        <Paper className={classes.paper}>
                            <h3 className={classes.title}>
                              Title: {title}
                            </h3>
                            <p className={classes.body}>
                              <small>Body: {body}</small>
                            </p>
                            <Link to={`/postdetail/${id}`}>
                                <Button variant="contained" color="primary">
                                    See Post
                                </Button>
                            </Link>
                        </Paper>
                    </Grid>

                </div>
    );
};

export default Postitem;