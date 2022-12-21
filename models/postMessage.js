import mongoose from "mongoose";
const postMessage = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 200,
        minlength: 10
    },
    message: {
        type: String,
        required: true,
        maxlength: 800,
        minlength: 30
    },
    creator: {
        type: String,
        required: true
    },
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model("PostMessage", postMessage);

export default PostMessage;