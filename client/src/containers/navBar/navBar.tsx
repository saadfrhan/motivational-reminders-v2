import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import React, { useState } from 'react';
import PlayArrowSharpIcon from '@mui/icons-material/PlayArrowSharp';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import { Link } from 'react-router-dom';
// import muiStyles from '../../styles';
import { styled } from '@mui/material/styles';

const StyledLink = styled(Link)`
  color: white;
`;

const NavBar = () => {

    // const classes = muiStyles();

    const [active, setActive] = useState('home');

    return (<Box sx={{ flexGrow: 1 }}><AppBar position='static'>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Motivational Reminders | Noor Ul Qur'an
            </Typography>
            <div>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                ><StyledLink to='/'
                    onClick={() => setActive('videos')}>{active === 'videos' ? <PlayArrowSharpIcon /> : <PlayArrowOutlinedIcon />}</StyledLink></IconButton>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                ><StyledLink to='/playlists'
                    onClick={() => setActive('playlists')}>{active === 'playlists' ? <SubscriptionsIcon /> : <SubscriptionsOutlinedIcon />}</StyledLink></IconButton>
            </div>
        </Toolbar>
    </AppBar></Box>)
}

export default NavBar
