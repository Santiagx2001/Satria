import app from './app.js';

const PORT = process.env.PORT || 3000;

//Inicio servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});