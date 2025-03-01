import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import imageRouter from "../backend/routes/imagesRoutes.js";

const app = express();

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static("public"));

app.use("/api", imageRouter);

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
})