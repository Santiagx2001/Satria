import express from "express";
import path from "path";
import cors from "cors";
import { fileURLToPath } from "url";
import { execSync } from "child_process"; 

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    console.log("Verificando la base de datos...");
    execSync("npx prisma migrate dev --name init", { stdio: "inherit" });
    console.log("Base de datos actualizada.");
} catch (error) {
    console.error("Error ejecutando migraciones:", error);
}

app.use(express.static(path.join(__dirname, ".."))); 

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "index.html"));
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import formulario from "./routes/formulario.js";
app.use("/api", formulario);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
