import { gql } from "apollo-server-core";

export const typeDefs = gql`

    scalar Date  

    type Post {
        _id: String!
        postTitle: String!
        postType: String!
        postLink: String!
        postedAt: Date
        thumbnailUrl: String!
    }

    input PostInput {
        postTitle: String!
        postType: String!
        postLink: String!
        postedAt: Date!
        thumbnailUrl: String!
    }

    input FilterOptions {
        postType: String
        getLast: Int
        cursor: Int
    }

    type Message {
        confirmationMessage: String!
    }

    type Category {
        name: String!
        totalPosts: Int!
    }

    type Query {
        getPosts(filter: FilterOptions): [Post]!
        getPost(_id: String!): Post!
        getTotalNumberOfPosts: [Category]!
        getPostsOfOneCategory(category: String!): [Post]!
    }

    type Mutation {
        createPost(input: PostInput): Post
        deletePost(_id: String): Message
        updatePost(input: PostInput): Message
    }

`;