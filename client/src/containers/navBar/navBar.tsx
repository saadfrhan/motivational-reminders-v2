import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Link } from 'react-router-dom';
import muiStyles from '../../styles';
import styles from './navBar.module.css'
import cx from 'classnames';


const NavBar = () => {

    const classes = muiStyles();

    const [active, setActive] = useState('home');

    return (<AppBar position='static'>
        <Toolbar className={styles.appBar}>
            <Typography variant='h6' className={cx(classes.navbar__title, styles.text)}>
                Motivational Reminders | Noor Ul Qur'an
            </Typography>
            <div className='links-bar'>
                <Link to='/' className={classes.navbar__link} onClick={() => setActive('videos')}>
                    <Button color='inherit' className={styles.text}>{active === 'videos' ? <PlayArrowSharpIcon className={styles.iconStyle} /> : <PlayArrowOutlinedIcon className={styles.iconStyle} />}Videos</Button></Link>
                <Link to='/videos' className={classes.navbar__link} onClick={() => setActive('playlists')}> <Button color='inherit' className={styles.text}>{active === 'playlists' ? <SubscriptionsIcon className={styles.iconStyle} /> : <SubscriptionsOutlinedIcon className={styles.iconStyle} />}Playlists</Button></Link>
            </div>
        </Toolbar>
    </AppBar>)
}

export default NavBar
