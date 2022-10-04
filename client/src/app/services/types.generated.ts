export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['String'];
  totalPosts: Scalars['Int'];
};

export type FilterOptions = {
  cursor?: Maybe<Scalars['Int']>;
  getLast?: Maybe<Scalars['Int']>;
  postType?: Maybe<Scalars['String']>;
};

export type Message = {
  __typename?: 'Message';
  confirmationMessage: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost?: Maybe<Post>;
  deletePost?: Maybe<Message>;
  updatePost?: Maybe<Message>;
};


export type MutationCreatePostArgs = {
  input?: Maybe<PostInput>;
};


export type MutationDeletePostArgs = {
  _id?: Maybe<Scalars['String']>;
};


export type MutationUpdatePostArgs = {
  input?: Maybe<PostInput>;
};

export type Post = {
  __typename?: 'Post';
  _id: Scalars['String'];
  postLink: Scalars['String'];
  postTitle: Scalars['String'];
  postType: Scalars['String'];
  postedAt?: Maybe<Scalars['Date']>;
  thumbnailUrl: Scalars['String'];
};

export type PostInput = {
  postLink: Scalars['String'];
  postTitle: Scalars['String'];
  postType: Scalars['String'];
  postedAt?: Maybe<Scalars['Date']>;
  thumbnailUrl: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getPost: Post;
  getPosts: Array<Maybe<Post>>;
  getPostsOfOneCategory: Array<Maybe<Post>>;
  getTotalNumberOfPosts: Array<Maybe<Category>>;
};


export type QueryGetPostArgs = {
  _id: Scalars['String'];
};


export type QueryGetPostsArgs = {
  filter?: Maybe<FilterOptions>;
};


export type QueryGetPostsOfOneCategoryArgs = {
  category: Scalars['String'];
};
