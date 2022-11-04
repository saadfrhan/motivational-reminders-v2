import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostsInAList from '../components/PostInAList/PostInAList'
import SingleVideo from '../components/SingleVideo/SingleVideo'
import UpdateAPost from '../components/UpdateAPost/UpdateAPost'
import Videos from '../components/Videos/Videos'
import Playlists from '../components/Playlists/Playlists'
import VideosOfSpecificCategory from '../components/VideosOfSpecificCategory/VideosOfSpecificCategory'
import NavBar from '../containers/navBar/navBar'
import FooterNav from '../containers/footerNav'

const RoutesConfig = () => {
  return (
    <div>

      <NavBar />

      <div>
        <Routes>
          <Route path='/' element={<Videos />} />
          <Route path='video/:id' element={<SingleVideo />} />
          <Route path='playlists/:category' element={<VideosOfSpecificCategory />} />
          <Route path="playlists" element={<Playlists />} />
          <Route path='posts/list' element={<PostsInAList />} />
          <Route path='posts/update/:id' element={<UpdateAPost />} />
          <Route path='*' element={<h2>404 Not Found</h2>} />
        </Routes>
      </div>

      <FooterNav />
    </div>
  )
}

export default RoutesConfig