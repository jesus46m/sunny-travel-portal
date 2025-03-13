
-- Create the miami database
CREATE DATABASE IF NOT EXISTS miami;

-- Use the miami database
USE miami;

-- Create the visita table
CREATE TABLE IF NOT EXISTS visita (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  fecha_visita DATE NOT NULL,
  actividades TEXT NOT NULL, -- Will store JSON array as text
  comentarios TEXT,
  fecha_registro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Add indexes for performance
CREATE INDEX idx_email ON visita(email);
CREATE INDEX idx_fecha_visita ON visita(fecha_visita);
CREATE INDEX idx_fecha_registro ON visita(fecha_registro);

-- Insert some sample data
INSERT INTO visita (nombre, email, fecha_visita, actividades, comentarios, fecha_registro) VALUES
('Carlos Rodríguez', 'carlos@example.com', '2023-12-15', '["playa", "restaurantes", "vida-nocturna"]', 'Viajo con mi familia, somos 4 personas. Nos interesa hospedarnos cerca de South Beach.', '2023-11-05 10:30:00'),
('María González', 'maria@example.com', '2023-12-20', '["compras", "museos"]', 'Es mi primera vez en Miami, busco recomendaciones de lugares no turísticos.', '2023-11-08 15:45:00'),
('Juan Pérez', 'juan@example.com', '2024-01-10', '["playa", "excursiones"]', NULL, '2023-11-12 09:15:00'),
('Ana Torres', 'ana@example.com', '2024-02-05', '["restaurantes", "museos", "compras"]', 'Viajo por trabajo pero tendré algunos días libres para conocer la ciudad.', '2023-11-15 14:20:00'),
('Luis Morales', 'luis@example.com', '2024-03-15', '["playa", "vida-nocturna"]', NULL, '2023-11-18 11:10:00'),
('Carmen Jiménez', 'carmen@example.com', '2024-03-22', '["excursiones", "museos"]', 'Me interesa conocer los Everglades y museos de arte.', '2023-11-20 16:30:00'),
('Roberto Sánchez', 'roberto@example.com', '2024-04-05', '["compras", "restaurantes"]', NULL, '2023-11-25 13:25:00');

-- Create a read-only user for the admin panel
CREATE USER IF NOT EXISTS 'miami_reader'@'localhost' IDENTIFIED BY 'MiamiReader123!';
GRANT SELECT ON miami.visita TO 'miami_reader'@'localhost';

-- Create a user with write permissions for the registration form
CREATE USER IF NOT EXISTS 'miami_writer'@'localhost' IDENTIFIED BY 'MiamiWriter456!';
GRANT SELECT, INSERT, UPDATE ON miami.visita TO 'miami_writer'@'localhost';

-- Don't forget to run FLUSH PRIVILEGES after creating users and granting permissions
FLUSH PRIVILEGES;
