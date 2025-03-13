import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { es } from "date-fns/locale";

// Define the form schema with Zod
const formSchema = z.object({
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

// Define the activities list
const actividadesOpciones = [
  { id: "playa", label: "Playa y actividades acuáticas" },
  { id: "compras", label: "Compras y moda" },
  { id: "restaurantes", label: "Gastronomía y restaurantes" },
  { id: "museos", label: "Museos y cultura" },
  { id: "vida-nocturna", label: "Vida nocturna" },
  { id: "excursiones", label: "Excursiones y tours" },
];

// API URL - this should be an environment variable in production
const API_URL = 'http://localhost:5000';

const Registro = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      actividades: [],
      comentarios: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      console.log('Preparing to submit form data:', data);
      
      // Format the date for MySQL (YYYY-MM-DD)
      const formattedDate = format(data.fecha_visita, 'yyyy-MM-dd');
      
      // Prepare data for submission
      const submissionData = {
        ...data,
        fecha_visita: formattedDate
      };
      
      console.log('Submitting data to API:', submissionData);
      console.log('API URL:', `${API_URL}/api/registrar-visita`);
      
      // Send data to the API
      const response = await fetch(`${API_URL}/api/registrar-visita`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('API error response:', errorData);
        throw new Error(errorData?.error || `Error: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('API success response:', result);
      
      // Show success message
      toast.success("¡Registro completado con éxito!", {
        description: "Hemos recibido tu información. ¡Disfruta de tu viaje a Miami!",
      });
      
      // Reset form
      form.reset();
      
      // Redirect to home page after short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al procesar tu registro", {
        description: "Por favor intenta nuevamente más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 pb-12 bg-miami-sand min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Registro de Visita a Miami
          </h1>
          <p className="text-gray-700">
            Completa el formulario para registrar tu próxima visita a Miami y recibir
            recomendaciones personalizadas para tu estancia.
          </p>
        </div>
        
        {/* Registration Form */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Nombre */}
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Ingresa tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@email.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Fecha de visita */}
              <FormField
                control={form.control}
                name="fecha_visita"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Fecha de visita</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP", { locale: es })
                            ) : (
                              <span>Selecciona una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormDescription>
                      Selecciona la fecha en la que planeas visitar Miami.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Actividades */}
              <FormField
                control={form.control}
                name="actividades"
                render={() => (
                  <FormItem>
                    <div className="mb-4">
                      <FormLabel>Actividades de interés</FormLabel>
                      <FormDescription>
                        Selecciona las actividades que te gustaría realizar durante tu visita.
                      </FormDescription>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {actividadesOpciones.map((actividad) => (
                        <FormField
                          key={actividad.id}
                          control={form.control}
                          name="actividades"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={actividad.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(actividad.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([...field.value, actividad.id])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== actividad.id
                                            )
                                          )
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  {actividad.label}
                                </FormLabel>
                              </FormItem>
                            )
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage className="mt-2" />
                  </FormItem>
                )}
              />
              
              {/* Comentarios */}
              <FormField
                control={form.control}
                name="comentarios"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Comentarios adicionales</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="¿Alguna preferencia o solicitud especial para tu visita?"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Opcional: Comparte cualquier información adicional que consideres relevante.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-miami-coral hover:bg-miami-turquoise"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Procesando..." : "Registrar mi visita"}
              </Button>
            </form>
          </Form>
        </div>
        
        {/* Additional Info */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Beneficios de registrar tu visita
          </h2>
          <ul className="space-y-2">
            <li className="flex items-start">
              <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
              <span>Recibe recomendaciones personalizadas según tus intereses</span>
            </li>
            <li className="flex items-start">
              <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
              <span>Información sobre eventos especiales durante tu estancia</span>
            </li>
            <li className="flex items-start">
              <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
              <span>Consejos de transporte y alojamiento según tu itinerario</span>
            </li>
            <li className="flex items-start">
              <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
              <span>Posibilidad de contacto con guías locales especializados</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Registro;
