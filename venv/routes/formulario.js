import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/enviarFormulario", async (req, res) => {
    const { nombre, correo, mensaje } = req.body;

    try {
        const envioFormulario = await prisma.contacto.create({
            data: { nombre, correo, mensaje }
        });

        console.log("Datos enviados correctamente:", envioFormulario);
        res.status(201).json({ message: "Formulario enviado con éxito", envioFormulario });
    } catch (error) {
        console.error("Error al enviar datos:", error);
        res.status(500).json({ error: "Error al enviar el formulario" });
    }
});

export default router;
