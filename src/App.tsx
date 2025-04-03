
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import StateDetails from "./pages/StateDetails";
import Playas from "./pages/Playas";
import Gastronomia from "./pages/Gastronomia";
import VidaNocturna from "./pages/VidaNocturna";
import Compras from "./pages/Compras";
import Info from "./pages/Info";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import Registro from "./pages/Registro";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import { Toaster } from "sonner";
import { AuthProvider } from "./hooks/useAuth";
import MisVisitas from "./pages/MisVisitas";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/ExperienceDetail";
import TravelPlanner from "./pages/TravelPlanner";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/state/:stateId" element={<StateDetails />} />
          <Route path="/playas" element={<Playas />} />
          <Route path="/gastronomia" element={<Gastronomia />} />
          <Route path="/vida-nocturna" element={<VidaNocturna />} />
          <Route path="/compras" element={<Compras />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="/mis-visitas" element={<ProtectedRoute><MisVisitas /></ProtectedRoute>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experience/:id" element={<ExperienceDetail />} />
          <Route path="/travel-planner" element={<TravelPlanner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster richColors position="top-right" />
      </Layout>
    </AuthProvider>
  );
}

export default App;
