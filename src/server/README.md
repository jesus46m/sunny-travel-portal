
# Miami Travel Website - Backend Server

Este es el servidor backend para el sitio web de Miami Travel.

## Configuración

1. Asegúrate de tener MySQL instalado y ejecutándose en tu sistema.

2. Crea la base de datos usando el script SQL en `src/db/miami_database.sql`.
   - Puedes importar este archivo en phpMyAdmin para crear la base de datos y tablas.

3. Instala las dependencias del servidor:

```bash
cd src/server
npm install
```

4. **IMPORTANTE**: Verifica la configuración de conexión a la base de datos:
   - En el archivo `api.js`, actualiza las credenciales según tu configuración local:
   
```javascript
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Cambia esto por tu usuario de phpMyAdmin
  password: '',  // Cambia esto por tu contraseña de phpMyAdmin
  database: 'miami'
});
```

5. Inicia el servidor:

```bash
npm start
```

El servidor se ejecutará en `http://localhost:5000`.

## Endpoints API

- `POST /api/registrar-visita` - Registra una nueva visita
- `GET /api/visitas` - Obtiene todas las visitas registradas (para el panel de administración)
- `GET /api/test` - Endpoint de prueba para verificar que el API está funcionando

## Solución de problemas

Si tienes problemas de conexión:

1. Asegúrate de que tu servidor MySQL esté funcionando.
2. Verifica que las credenciales de la base de datos en `api.js` sean correctas.
3. Comprueba que el puerto 5000 esté disponible y no bloqueado por un firewall.
4. Revisa la consola del servidor para ver posibles errores de conexión.
