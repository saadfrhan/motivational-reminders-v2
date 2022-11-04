import React, { useState } from 'react'

import { BottomNavigation, BottomNavigationAction } from '@mui/material';

import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

// import muiStyles from './styles';
import styles from './footerNav.module.css';

import cx from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = () => {

    const [active, setActive] = useState<string>('home');

    // const classes = muiStyles();

    return (
        <BottomNavigation className={cx(
            // classes.root1, 
            styles.footerBar)}>
            <Link to='/' className={styles.footerLabel} onClick={() => setActive('videos')}>
                <BottomNavigationAction className={styles.footerLabel}
                    icon={active === 'home' ? <PlayCircleFilledIcon className={styles.icon} /> : <PlayCircleOutlineSharpIcon className={styles.icon} />}
                />
            </Link>
            <Link to='/playlists' className={styles.footerLabel} onClick={() => setActive('playlists')}>
                <BottomNavigationAction className={styles.footerLabel}
                    icon={active === 'videos' ? <SubscriptionsIcon className={styles.icon} /> : <SubscriptionsOutlinedIcon className={styles.icon} />}
                />
            </Link>
        </BottomNavigation >)
}

export default FooterNav
