const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Ruta para el formulario de contacto
app.post('/api/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    
    // Aquí puedes agregar la lógica para enviar emails o guardar en una base de datos
    console.log('Nuevo mensaje de contacto:', { nombre, email, mensaje });
    
    res.json({ 
        success: true, 
        message: 'Mensaje recibido correctamente' 
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
}); 