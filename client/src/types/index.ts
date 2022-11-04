import { Post as PostI } from '../app/services/types.generated';

export interface TopNavOptions {
    title: string | boolean;
    haveAButton: boolean;
    haveASearch?: boolean;
}

export interface Post {
    __typename: string;
    _id: string;
    postLink: string;
    postType: string;
    postTitle: string;
    postedAt?: any;
    thumbnailUrl: string;
}

export interface PostData {
    posts: PostI[]
    setCursor: Function;
}