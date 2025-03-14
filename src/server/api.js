
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware - enable CORS for both localhost:8080 and the Lovable preview app
app.use(cors({
  origin: ['http://localhost:8080', /\.lovable\.app$/],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());

// Database connection with correct phpMyAdmin credentials
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default phpMyAdmin user
  password: '', // Default empty password
  database: 'miami'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

// API endpoint to register a visit
app.post('/api/registrar-visita', (req, res) => {
  console.log('Received registration data:', req.body);
  const { nombre, email, fecha_visita, actividades, comentarios } = req.body;

  // Validate required fields
  if (!nombre || !email || !fecha_visita || !actividades) {
    return res.status(400).json({ error: 'Todos los campos obligatorios deben ser proporcionados' });
  }

  // Convert actividades array to JSON string
  const actividadesJSON = JSON.stringify(actividades);

  const query = `
    INSERT INTO visita 
    (nombre, email, fecha_visita, actividades, comentarios) 
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    query, 
    [nombre, email, fecha_visita, actividadesJSON, comentarios || null],
    (err, results) => {
      if (err) {
        console.error('Error registering visit:', err);
        return res.status(500).json({ error: 'Error al registrar la visita' });
      }
      
      return res.status(201).json({ 
        success: true, 
        message: 'Visita registrada con éxito',
        visitaId: results.insertId 
      });
    }
  );
});

// API endpoint to get all visits (for admin)
app.get('/api/visitas', (req, res) => {
  const query = 'SELECT * FROM visita ORDER BY fecha_registro DESC';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching visits:', err);
      return res.status(500).json({ error: 'Error al obtener las visitas' });
    }
    
    // Parse the actividades JSON strings back to arrays
    const visitas = results.map(visita => ({
      ...visita,
      actividades: JSON.parse(visita.actividades)
    }));
    
    return res.status(200).json(visitas);
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'API funcionando correctamente' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
