import express from "express";
import upload from "../config/storage.js";

const router = express.Router();

router.post("/upload", upload.single("file"), (req, res) => { 
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    res.json({ filePath: `/uploads/${req.file.filename}` });
  });



export default router;