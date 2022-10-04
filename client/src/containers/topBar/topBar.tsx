import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import styles from './topBar.module.css'
import { TopNavOptions } from '../../types';

const TopBar: React.FC<TopNavOptions> = ({ title, haveAButton, haveASearch }) => {

    return (<>
        <div className={styles.topBar}>
            {haveAButton && <Link to='/videos'>
                <IconButton color='inherit' className={cx(styles.text, styles.goBackTop)}>
                    <ArrowBackIosIcon className={styles.iconStyle} />
                </IconButton>
            </Link>}
            {title && title === 'All' ? 'Latest Uploads' : title ? title : null}
        </div>
    </>)
}

export default TopBar
