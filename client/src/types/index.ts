import { AllPostsQuery } from "../operations/queries/AllPosts.generated";

export interface TopNavOptions {
    title: string | boolean;
    haveAButton: boolean;
    haveASearch?: boolean;
}

export interface Post {
    __typename: string;
    _id: string;
    postTitle: string;
    postedAt?: any;
    thumbnailUrl: string;
}

export interface PostData {
    posts: Post[]
    setCursor: Function;
}