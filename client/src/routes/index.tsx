import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PostsInAList from '../components/PostInAList/PostInAList'
import SingleVideo from '../components/SingleVideo/SingleVideo'
import UpdateAPost from '../components/UpdateAPost/UpdateAPost'
import Videos from '../components/Videos/Videos'
import Playlists from '../components/Playlists/Playlists'
import VideosOfSpecificCategory from '../components/VideosOfSpecificCategory/VideosOfSpecificCategory'

const Routes = () => {
    return (<Switch>
        <Route path='/' exact component={Videos} />
        <Route path='/video/:id' component={SingleVideo} />
        <Route path='/playlists/:category' component={VideosOfSpecificCategory} />
        <Route path="/playlists" component={Playlists} />
        <Route path='/posts/list' component={PostsInAList} />
        <Route path='/posts/update/:id' component={UpdateAPost} />
        <Route path='*' component={() => <h2>404 Not Found</h2>} />
    </Switch>)
}

export default Routes
