/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';

import { AllPostsQuery, useAllPostsQuery } from '../../operations/queries/AllPosts.generated';
import VideoContainer from '.';

const Videos = () => {

    const [cursor, setCursor] = useState<any>(0);
    const [posts, setPosts] = useState<Post>([]);

    const { data, isLoading } = useAllPostsQuery({
        filter: {
            getLast: 10,
            cursor
        }
    });

    useEffect(() => {
        setPosts(prev => prev.concat(data?.getPosts))
    }, [data])

    return (
        <VideoContainer posts={posts} setCursor={setCursor} />
    )
}

export default Videos
