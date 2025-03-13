
# Miami Travel Website - Backend Server

Este es el servidor backend para el sitio web de Miami Travel.

## Configuración

1. Asegúrate de tener MySQL instalado y ejecutándose en tu sistema.

2. Crea la base de datos usando el script SQL en `src/db/miami_database.sql`.

3. Instala las dependencias del servidor:

```bash
cd src/server
npm install
```

4. Inicia el servidor:

```bash
npm start
```

El servidor se ejecutará en `http://localhost:5000`.

## Endpoints API

- `POST /api/registrar-visita` - Registra una nueva visita
- `GET /api/visitas` - Obtiene todas las visitas registradas (para el panel de administración)

## Configuración de la Base de Datos

Si necesitas modificar la configuración de la base de datos, edita las credenciales en el archivo `api.js`:

```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'miami_writer',
  password: 'MiamiWriter456!',
  database: 'miami'
});
```

Asegúrate de que estas credenciales coincidan con las que has configurado en tu sistema MySQL.
