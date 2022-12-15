import express  from "express";
import multer from "multer";

const upload =  multer({dest:"uploads/"})

const app =  express();
const PORT = 8000;



app.listen(PORT, ()=>{ console.log("app is running on Port " + PORT ) })
