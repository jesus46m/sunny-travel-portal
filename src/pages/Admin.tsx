
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Loader2 } from "lucide-react";

// API URL - change this if your server is running on a different port
const API_URL = 'http://localhost:5000/api';

// Types
interface Visita {
  id: number;
  nombre: string;
  email: string;
  fecha_visita: string;
  actividades: string[];
  comentarios: string | null;
  fecha_registro: string;
}

const Admin = () => {
  const [visitas, setVisitas] = useState<Visita[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVisitas = async () => {
      try {
        const response = await fetch(`${API_URL}/visitas`);
        
        if (!response.ok) {
          throw new Error('Error al cargar los datos');
        }
        
        const data = await response.json();
        setVisitas(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('No se pudieron cargar los datos. Verifica la conexión al servidor.');
      } finally {
        setLoading(false);
      }
    };

    fetchVisitas();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy', { locale: es });
  };

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    return format(date, 'dd/MM/yyyy HH:mm', { locale: es });
  };

  const getActivityLabel = (activityId: string) => {
    const activityMap: Record<string, string> = {
      "playa": "Playa",
      "compras": "Compras",
      "restaurantes": "Restaurantes",
      "museos": "Museos",
      "vida-nocturna": "Vida nocturna",
      "excursiones": "Excursiones"
    };
    
    return activityMap[activityId] || activityId;
  };

  return (
    <div className="container mx-auto py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Panel de Administración</CardTitle>
          <CardDescription>Gestión de visitas registradas a Miami</CardDescription>
        </CardHeader>
        
        <CardContent>
          {loading ? (
            <div className="flex justify-center items-center min-h-[200px]">
              <Loader2 className="h-8 w-8 text-miami-coral animate-spin" />
              <span className="ml-2">Cargando datos...</span>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-4">
              {error}
            </div>
          ) : visitas.length === 0 ? (
            <div className="text-center py-4">
              No hay visitas registradas.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Fecha de Visita</TableHead>
                    <TableHead>Actividades</TableHead>
                    <TableHead>Comentarios</TableHead>
                    <TableHead>Fecha de Registro</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visitas.map((visita) => (
                    <TableRow key={visita.id}>
                      <TableCell>{visita.id}</TableCell>
                      <TableCell className="font-medium">{visita.nombre}</TableCell>
                      <TableCell>{visita.email}</TableCell>
                      <TableCell>{formatDate(visita.fecha_visita)}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {visita.actividades.map((actividad) => (
                            <Badge key={actividad} variant="outline" className="bg-miami-sand text-gray-800">
                              {getActivityLabel(actividad)}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">
                        {visita.comentarios || "-"}
                      </TableCell>
                      <TableCell>{formatDateTime(visita.fecha_registro)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Admin;
