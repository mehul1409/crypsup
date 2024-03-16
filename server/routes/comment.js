import express from 'express';
import { Comment } from '../models/comment.js';

const commentrouter = express.Router();

commentrouter.post('/', async (req, res) => {
    const { comment, projectId } = req.body;
    const newcomment = new Comment({
        comment,
        commentedTo:projectId,
    })

    await newcomment.save();
    return res.json({ status: true, message: "record registered!" });
})

export { commentrouter }