import React, { useEffect, useState } from 'react'
import { Grid, CircularProgress, Button, IconButton } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import serverUrl from '../../serverUrl';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TopBar from '../../containers/topBar/topBar';
import cx from 'classnames';
import { formatDistance } from 'date-fns';

import styles from './VideosOfSpecificCategory.module.css';

const VideosOfSpecificCategory = () => {

    return (<>
        {/* <TopBar title={id} haveAButton={true} />
        <div className={styles.contentBox}>
            <Link to='/videos' className={styles.link}><Button className={cx(styles.goBack, styles.pcBack)}><ArrowBackIosIcon /> &nbsp;Go Back</Button></Link>
            <br />
            <h1 className={styles.cateVideoHeading}>{id === 'All' ? 'Latest' : id}</h1>
            <Grid container spacing={3}>
                {
                    loading ?
                        <div className='spinner-container'><CircularProgress className='spinner' /></div>
                        : fetchedData ? fetchedData.map(data => {
                            const year = new Date(data.postedAt).getFullYear()
                            const month = new Date(data.postedAt).getMonth()
                            const day = new Date(data.postedAt).getDay()
                            return (
                                <Grid item xs={12} sm={6} md={3} key={data._id}>
                                    <Link to={`/video/${data._id}`}>
                                        <div className='single-post-box full-box'>
                                            <img loading='lazy' className='post-box-image' src={data.thumbnailUrl} alt={data.postTitle} />
                                            <div className='play'>
                                                <PlayCircleFilledIcon className='icon play-icon' />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='post-metadata'>
                                        <p className={cx(styles.postTitle, 'title')}>{data.postTitle}</p>
                                        <span className='date'>{formatDistance(new Date(year, month, day), new Date(), { addSuffix: true })}</span>
                                    </div>
                                </Grid>
                            )
                        }) : null}
            </Grid>
        </div> */}
        <h1>Videos Of Specific Category</h1>
    </>)
}

export default VideosOfSpecificCategory
