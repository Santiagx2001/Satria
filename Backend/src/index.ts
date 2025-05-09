import cors from 'cors'
import express from 'express'
const app = express()
//configuracion del puerto
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.get('/ping', (_req, res) => {
    console.log('Ping received' + new Date().toLocaleDateString())
    res.json({ message: 'Pong' })
})
//inicio del servidor para que escuche las peticiones en el puerto establecido
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})