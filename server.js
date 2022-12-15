import express  from "express";
import multer from "multer";
import cors from "cors";

const upload =  multer({dest:"uploads/"})

const app =  express();
const PORT = 8000;

app.use(cors());
app.post("/images",upload.single("image"),(req, res,next)=>{
    const file = req.file;
    const description = req.body.description;
    console.log(file)
    res.send("done")
})

app.listen(PORT, ()=>{ console.log("app is running on Port " + PORT ) })
