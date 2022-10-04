import React from 'react'
import { Post, PostData } from '../../types';
import styles from './Videos.module.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import { formatDistance } from 'date-fns';
import cx from 'classnames';
import TopBar from '../../containers/topBar/topBar';

const VideoContainer = ({ posts, setCursor }: PostData) => {
    return (
        <div className={styles.contentBox}>
            <br />
            <br />
            <br />
            <TopBar title='Videos' haveAButton={false} />
            <div className={cx(styles.videosContainer, styles.oneTypeVideos)} id='video'>
                <Grid container spacing={3}>
                    {posts && posts.map((post) => {
                        return (
                            <>
                                <Grid item xs={12} sm={6} md={3} key={post?._id}>
                                    <Link to={`/video/${post?._id}`}>
                                        <div className='single-post-box full-box'>
                                            <img loading='lazy' className='post-box-image' src={post?.thumbnailUrl} alt={post?.postTitle} />
                                            <div className='play'>
                                                <PlayCircleFilledIcon className='icon play-icon' />
                                            </div>
                                        </div>
                                    </Link>
                                    <div className='post-metadata'>
                                        <p className='title'>{post?.postTitle}</p>
                                        <span className='date'>{formatDistance(new Date(post?.postedAt), new Date(), { addSuffix: true })}</span>
                                    </div>
                                </Grid>
                            </>
                        )
                    })}
                </Grid>
            </div>
            <div className={styles.buttonGroup}>
                <Button onClick={() => {
                    setCursor((prev: number) => prev + 10);
                }} className={styles.loadButton}>Load More Videos</Button>
            </div>
        </div>
    )
}

export default VideoContainer
