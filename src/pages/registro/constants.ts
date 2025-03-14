
// Define the activities list
export const actividadesOpciones = [
  { id: "playa", label: "Playa y actividades acuáticas" },
  { id: "compras", label: "Compras y moda" },
  { id: "restaurantes", label: "Gastronomía y restaurantes" },
  { id: "museos", label: "Museos y cultura" },
  { id: "vida-nocturna", label: "Vida nocturna" },
  { id: "excursiones", label: "Excursiones y tours" },
];

// Use the window location to determine if we're in localhost or on the Lovable preview
export const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

// Determine if we're using HTTPS
export const isHttps = window.location.protocol === 'https:';

// For the preview environment, we need to use a deployed API or configure the backend
// We use secure HTTPS for production and HTTP only for local development
export const API_URL = isLocalhost 
  ? 'http://localhost:5000' 
  : 'https://api.yourdomain.com'; // Replace with your actual API domain

// Helper function to ensure URLs are always HTTPS (except for localhost)
export const ensureHttps = (url: string): string => {
  if (isLocalhost) return url;
  return url.replace(/^http:\/\//i, 'https://');
};
