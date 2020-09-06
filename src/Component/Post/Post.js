import React, { useState, useEffect } from 'react';
import Postitem from '../Postitem/Postitem';
import Grid from '@material-ui/core/Grid';



const Post = () => {
    const [post, setPost] = useState([])
    useEffect(()=> {
            const postUrl = "https://jsonplaceholder.typicode.com/posts";
            fetch(postUrl)
            .then(res => res.json())
            .then(data=> setPost(data))   
    },[])
    return (
                <div>
                    <Grid container>
                        {
                            post.map(post=> <Postitem post={post}></Postitem>)
                        }
                    </Grid>
                </div>
    );
};

export default Post;