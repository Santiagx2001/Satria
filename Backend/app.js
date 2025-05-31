import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//traer las rutas
import {
    
} from "./src/routes/route.js";

export default app;