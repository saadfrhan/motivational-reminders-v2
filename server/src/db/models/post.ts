import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    postTitle: { type: String, required: true },
    postType: { type: String, required: true },
    postLink: { type: String, required: true },
    thumbnailUrl: { type: String, required: true },
    postedAt: { type: Date, default: Date.now() }
});

export const post = mongoose.model('posts', postSchema)
