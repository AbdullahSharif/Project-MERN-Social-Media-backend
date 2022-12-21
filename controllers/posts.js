import PostMessage from "../models/postMessage.js";

export async function getPosts(req, res) {
    try {
        const posts = await PostMessage.find();
        return res.status(200).json(posts);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

}

export async function createPost(req, res) {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();
        return res.status(201).json(newPost);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
}