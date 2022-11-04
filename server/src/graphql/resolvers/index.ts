import { category, FilterOptions, id, Post, UpdatePost } from "../../types";
import { post } from "../../db/models/post";
import { categories } from '../../raw/raw-data';
import { GraphQLScalarType, Kind } from "graphql";

export const resolvers = {
    Mutation: {
        async createPost(_: any, args: Post) {
            const { input: { postTitle, postType, postedAt, thumbnailUrl, postLink } } = args;
            const postDetails = new post({
                postTitle,
                postType,
                postedAt,
                thumbnailUrl,
                postLink
            });
            return await postDetails.save()
        },
        async deletePost(_: any, args: id) {
            const { _id } = args;
            post.deleteOne({ _id });
            return {
                confirmationMessage: `Post of id ${_id} has been deleted!`
            }
        },
        async updatePost(_: any, args: UpdatePost) {
            const { input: { postTitle, postType, postedAt, thumbnailUrl, postLink, _id } } = args;
            const data = { postTitle, postType, postedAt, thumbnailUrl, postLink }
            await post.updateOne({ _id }, data);
            return {
                confirmationMessage: `Post of id ${_id} has been updated!`
            }
        }
    },
    Query: {
        /** Get all posts. */
        async getPosts(_: any, args: FilterOptions = {
            filter: {
                getLast: 5,
                cursor: 0,
                postType: "All"
            }
        }) {
            const { filter } = args;
            try {
                let foundPosts: any = [];
                if (filter?.getLast && filter?.cursor) {
                    return await post.find({}).skip(filter.cursor).limit(filter.getLast)
                }
                if (filter?.getLast && filter?.cursor && filter?.postType) {
                    return await post.find({ _id: { $gt: filter.cursor }, postType: filter.postType }).skip(filter.cursor).limit(filter.getLast)
                }
                if (filter?.getLast) {
                    return await post.find({}).limit(filter.getLast);
                }
                if (!filter) {
                    return await post.find({});
                }
                return await post.find({});
            } catch (error: any) {
                throw new Error(error)
            }
        },
        /** Get a post of a specific category. */
        async getPost(_: any, args: id) {
            const { _id } = args;
            try {
                return await post.findOne({ _id });
            } catch (error: any) {
                throw new Error(error)
            }
        },
        /** Get all posts of a specific category. */
        async getPostsOfOneCategory(_: any, args: category) {
            const { category } = args;
            try {
                return await post.find({ postType: category });
            } catch (error: any) {
                throw new Error(error)
            }
        },
        /** Get count of total posts. */
        async getTotalNumberOfPosts(_: any) {
            let result: any = categories;
            try {
                for (var i = 0; i < categories.length; i++) {
                    result[i].totalPosts = await post.find({ postType: categories[i].name }).count()
                }
                console.log(result);
                return result;
            } catch (error: any) {
                throw new Error(error)
            }
        },
    },
    Date: new GraphQLScalarType({
        name: 'Date',
        description: 'Date custom scalar type',
        serialize(value) {
            return new Date(value).toDateString() // Convert outgoing Date to integer for JSON
        },
        parseValue(value) {
            return new Date(value); // Convert incoming integer to Date
        },
        parseLiteral(ast) {
            if (ast.kind === Kind.INT) {
                const intValue = parseInt(ast.value, 10);
                return new Date(intValue); // Convert hard-coded AST string to integer and then to Date
            }
            return null; // Invalid hard-coded value (not an integer)
        },
    })
}