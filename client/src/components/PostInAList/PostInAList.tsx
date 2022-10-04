import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import serverUrl from '../../serverUrl';

import TopBar from '../../containers/topBar/topBar';

import { TableRow, TableHead, CircularProgress, Paper, TableContainer, TableCell, TableBody, Table } from '@mui/material';
import styles from './PostInAList.module.css';
import { IconButton } from '@mui/material';
import { DeleteForever } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';

const PostsInAList = () => {

    return (<>
        {/* <TopBar title='Videos in A List' />
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.tableStyle}>Post title</TableCell>
                        <TableCell className={styles.tableStyle} align='right'>Post type</TableCell>
                        <TableCell className={styles.tableStyle} align='right'>Posted at</TableCell>
                        <TableCell className={styles.tableStyle} align='right'>Image</TableCell>
                        <TableCell className={styles.tableStyle} align='right'>Delete</TableCell>
                        <TableCell className={styles.tableStyle} align='right'>Update</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fetchedData ? fetchedData.map((data) => (
                        <TableRow key={data._id}>
                            <TableCell component='th' scope='row' className={styles.tableStyle}>
                                {data.postTitle}
                            </TableCell>
                            <TableCell align='right' className={styles.tableStyle}>{data.postType}</TableCell>
                            <TableCell align='right' className={styles.tableStyle}>{new Date(data.postedAt).toDateString()}</TableCell>
                            <TableCell align='right' className={styles.tableStyle}><img loading='lazy' src={data.thumbnailUrl} alt={data.postTitle} className={styles.tableImg} /></TableCell>
                            <TableCell align='right' className={styles.tableStyle} onClick={() => sendRequestToDeletePost(data._id)} >
                                <IconButton>
                                    <DeleteForever />
                                </IconButton>
                            </TableCell>
                            <TableCell align='right' className={styles.tableStyle}>
                                <Link to={`/posts/update/${data._id}`}>        <IconButton>
                                    <EditIcon />
                                </IconButton></Link>
                            </TableCell>
                        </TableRow>
                    )) : <h1 className='loading'><CircularProgress className='posts-list-icon' /></h1>}
                </TableBody>
            </Table>
        </TableContainer> */}
        Videos In A List
    </>)
}

export default PostsInAList
