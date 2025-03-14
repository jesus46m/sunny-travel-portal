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

// For the preview environment, we need to use a deployed API or configure the backend
// For now, we'll keep using localhost:5000, but this will only work when running locally
export const API_URL = 'http://localhost:5000';
