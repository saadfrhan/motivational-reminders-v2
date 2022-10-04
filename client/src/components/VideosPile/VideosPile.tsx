import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import serverUrl from '../../serverUrl';
import styles from './VideosPile.module.css';
import { formatDistance } from 'date-fns';

const VideosPile = () => {

    return (
        // <Grid item xs={12} md={3} sm={12} className={styles.postsGrid}>
        //     <h1 className={styles.more}>Up next</h1>
        //     {
        //         fetchedData.map(data => {
        //             const year = new Date(data.postedAt).getFullYear()
        //             const month = new Date(data.postedAt).getMonth()
        //             const day = new Date(data.postedAt).getDay()
        //             return (<>
        //                 <a href={`/video/${data._id}`} onClick={stopEvent} className={styles.videoLink}><div className={styles.singlePostPreview} href='#video' >
        //                     <img loading='lazy' src={data.thumbnailUrl} alt={data.postTitle} />
        //                     <p className={styles.smallTitle}>{data.postTitle} <br /> <span className={styles.date}>{formatDistance(new Date(year, month, day), new Date(), { addSuffix: true })}</span></p>
        //                 </div></a>
        //             </>)
        //         })
        //     }
        // </Grid>
        <h1>Videos Pile</h1>
    )
}

export default VideosPile
