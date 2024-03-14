import express from 'express';
import { Project } from '../models/project.js';

const projectrouter = express.Router();

projectrouter.post('/addproject', async (req, res) => {
    const { title, body } = req.body;

    const newproject = new Project({
        title,
        body,
    })

    await newproject.save();
    return res.json({ status: true, message: "record registered!" });
})

projectrouter.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Internal Server Error' }); 
  }
});

export {projectrouter};