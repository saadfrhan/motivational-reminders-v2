import React, { useEffect, useState } from 'react'
import { TextField, Grid, Typography, Button, Avatar, Container, CssBaseline } from '@mui/material';
import ArtTrackIcon from '@mui/icons-material/ArtTrack';
import serverUrl from '../../serverUrl';
import { useParams } from 'react-router-dom';

const UpdateAPost = () => {

    // const requestParams = useParams();
    // const id = requestParams.id;

    // const classes = muiStyles();

    // const [postTitle, setPostTitle] = useState('');
    // const [postType, setPostType] = useState('');
    // const [thumbnailUrl, setThumbnail] = useState('');
    // const [postLink, setPostLink] = useState('');

    // const updatePost = (id) => {

    //     if (!postTitle || !postType || !thumbnailUrl || !postLink) {
    //         alert('Fill all boxes!!!!')
    //         return;
    //     }
    // }


    return (
        // <Container component='main' maxWidth='xs'>
        //     <CssBaseline />
        //     <div>
        //         <Avatar className={classes.avatar}>
        //             <ArtTrackIcon />
        //         </Avatar>
        //         <Typography component='h1' variant='h5'>
        //             Update A Post
        //         </Typography>
        //         <form>
        //             <Grid container spacing={2}>

        //                 <Grid item xs={12} sm={6}>
        //                     <TextField variant='outlined' required fullWidth value={postTitle} onChange={(e) => setPostTitle(e.target.value)} label='Post title' autoFocus />
        //                 </Grid>

        //                 <Grid item xs={12} sm={6}>
        //                     <TextField variant='outlined' required fullWidth value={postType} onChange={(e) => setPostType(e.target.value)} label='Post type' autoFocus />
        //                 </Grid>

        //                 <Grid item xs={12}>
        //                     <TextField variant='outlined' required fullWidth value={postLink} onChange={(e) => setPostLink(e.target.value)} label='Post link' />
        //                 </Grid>

        //                 <Grid item xs={12}>
        //                     <TextField variant='outlined' value={postLink} required fullWidth onChange={(e) => setThumbnail(`https://i.ytimg.com/vi/${e.target.value}/mqdefault.jpg`)} label='Post thumbnail' />
        //                 </Grid>

        //             </Grid>
        //             <Button onClick={() => updatePost(id)} fullWidth variant='contained' color='primary' className={classes.submit}>Update Post</Button>
        //         </form>
        //     </div>
        // </Container>
        <h1>Update Post</h1>
    )
}

export default UpdateAPost;
