/* eslint-disable no-mixed-operators */
import React, { useEffect, useState } from 'react';

import { AllPostsQuery, useAllPostsQuery } from '../../operations/queries/AllPosts.generated';
import VideoContainer from '.';
import { Post } from '../../app/services/types.generated';

const Videos = () => {

    const [cursor, setCursor] = useState<any>(0);
    const [posts, setPosts] = useState<Post[]>([{
        _id: '',
        postLink: '',
        postTitle: '',
        postType: '',
        thumbnailUrl: '',
        postedAt: '',
        __typename: 'Post',
    }]);

    const { data, isLoading } = useAllPostsQuery({
        filter: {
            getLast: 10,
            cursor
        }
    });

    useEffect(() => {
        setPosts(prev => prev.concat(data?.getPosts || []));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [useAllPostsQuery]);

    return (
        <VideoContainer posts={posts} setCursor={setCursor} />
    )
}

export default Videos
