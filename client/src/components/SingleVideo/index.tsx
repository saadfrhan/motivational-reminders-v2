import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SingleVideo.module.css'
import { Grid, Button, CircularProgress } from '@mui/material';
import cx from 'classnames'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import { PostQuery } from '../../operations/queries/Post.generated';
import TopBar from '../../containers/topBar/topBar'

interface Props {
    data: PostQuery | undefined;
}

const SingleVideoContainer: React.FC<Props> = ({ data }) => {
    return (<>
        <TopBar title={false} haveAButton={true} />
        <div className={styles.singleVideo}>
            <Link to='/videos' className={styles.link}><Button className={cx('go-back', 'pc-back')}><ArrowBackIosIcon /> &nbsp;Go Back</Button></Link>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} sm={12} className={styles.videoGrid}>
                    <div className={styles.videoContainer}>
                        {data?.getPost?.postLink ? <iframe src={`https://www.youtube.com/embed/${data?.getPost?.postLink}?autoplay=1&mute=0&enablejsapi=1&rel=0&listType=playlist`} title={data?.getPost?.postTitle} frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen={true} /> : <div className='spinner-container'><CircularProgress className='spinner' /></div>}
                    </div>
                    <div className={styles.videoMetaData}>
                        <h1 className={styles.videoHeading}>
                            {data?.getPost?.postTitle}
                        </h1>
                        <h4 className={styles.date}>
                            {data?.getPost?.postedAt}
                        </h4>
                    </div>
                </Grid>
            </Grid></div></>
    )
}

export default SingleVideoContainer
