
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 5000;
const HTTPS_PORT = process.env.HTTPS_PORT || 5443;

// Middleware - ensure CORS is configured to accept requests from both localhost and the Lovable app
app.use(cors({
  origin: ['http://localhost:8080', 'https://localhost:8080', /\.lovable\.app$/],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(bodyParser.json());

// Middleware to redirect HTTP to HTTPS in production
app.use((req, res, next) => {
  // Skip for localhost development
  if (req.hostname === 'localhost' || req.hostname === '127.0.0.1') {
    return next();
  }
  
  // Check if request is already HTTPS
  if (req.secure) {
    return next();
  }
  
  // Redirect to HTTPS
  const httpsUrl = `https://${req.hostname}${req.url}`;
  return res.redirect(301, httpsUrl);
});

// Database connection with correct phpMyAdmin credentials
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default phpMyAdmin user
  password: '', // Default empty password for XAMPP/WAMP
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

// Test endpoint to verify API is working
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'API funcionando correctamente' });
});

// Create HTTP server
const httpServer = http.createServer(app);

// Start HTTP server (will redirect to HTTPS in production)
httpServer.listen(PORT, () => {
  console.log(`HTTP Server running on port ${PORT}`);
});

// For production: Check if SSL certificates exist
// Note: You'll need to provide actual paths to your SSL certificate and key
try {
  if (process.env.NODE_ENV === 'production') {
    // SSL options - replace with your actual certificate paths
    const sslOptions = {
      key: fs.readFileSync(path.join(__dirname, 'ssl', 'private.key')),
      cert: fs.readFileSync(path.join(__dirname, 'ssl', 'certificate.crt'))
    };
    
    // Create HTTPS server
    const httpsServer = https.createServer(sslOptions, app);
    
    // Start HTTPS server
    httpsServer.listen(HTTPS_PORT, () => {
      console.log(`HTTPS Server running on port ${HTTPS_PORT}`);
    });
  }
} catch (err) {
  console.error('Could not start HTTPS server:', err);
  console.log('Running in HTTP mode only. For production, please configure SSL certificates.');
}

module.exports = app;
