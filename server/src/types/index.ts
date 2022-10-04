export interface FilterOptions {
    filter: Options
}

export interface Options {
    postType?: string | number;
    _id?: string;
    getLast?: number;
    cursor?: number;
    first?: number;
    after?: string;
}

export interface Post {
    input: PostInput
}

export interface PostInput {
    _id?: string;
    postTitle: string;
    postType: string;
    postLink: string;
    thumbnailUrl: string;
    postedAt?: string;
}

export interface UpdatePost {
    input: UpdatePostInput;
}

export interface UpdatePostInput {
    postTitle: string;
    postType: string;
    postLink: string;
    thumbnailUrl: string;
    postedAt?: string;
    _id: string;
}

export interface id {
    _id: string;
}

export interface amount {
    amount: number
}

export interface category {
    category: string;
}

export interface PostFound {
    _id: string;
    postTitle: string;
    postType: string;
    postLink: string;
    thumbnailUrl: string;
    postedAt?: string;
}