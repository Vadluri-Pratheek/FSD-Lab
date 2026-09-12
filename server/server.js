import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import { projectsData } from './data/projects.js';

dotenv.config();

const app = express();

const contactSubmissions = [];

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({status: "ok"});
});

app.get("/api/projects",(req,res)=>{
    res.status(200).json(projectsData);
});

app.get("/api/projects/:id",(req,res)=>{
    const projectId = parseInt(req.params.id);
    const project = projectsData.find((p)=>p.id===projectId);

    if(!project){
        return res.status(404).json({error: "Project not found"});
    }
    res.status(200).json(project);
});


app.post("/api/contact",(req,res)=>{
    const {name,email,message} = req.body;
    if(!name || !email || !message){
        return res.status(400).json({error: "All fields are required"});
    }

    if(!email.includes("@")){
        return res.status(400).json({error: "Invalid email format"});
    }

    const newSubmission = {id : Date.now(),name,email,message,date : new Date().toISOString()};

    contactSubmissions.push(newSubmission);

    res.status(201).json({message: "Contact submission received!", data : newSubmission});
});

app.get("/api/contact",(req,res)=>{
    res.status(200).json(contactSubmissions);
});

const PORT = process.env.PORT || 5000;

app.use((req,res,next)=>{
    res.status(404).json({error: "Route not found" });
});

app.use((err,req,res,next)=>{
    console.error("Server Error:", err.message);
    res.status(500).json({error: "Internal Server Error"});
});
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});