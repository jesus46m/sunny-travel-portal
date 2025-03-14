
import { z } from "zod";

// Define the form schema with Zod
export const formSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Por favor ingresa un email válido" }),
  fecha_visita: z.date({
    required_error: "Por favor selecciona una fecha para tu visita",
  }),
  actividades: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Selecciona al menos una actividad",
  }),
  comentarios: z.string().optional(),
});

export type RegistroFormValues = z.infer<typeof formSchema>;
