
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerField } from "./DatePickerField";
import { ActivityCheckboxes } from "./ActivityCheckboxes";
import { formSchema, RegistroFormValues } from "../schema";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

export const RegistroForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user } = useAuth();

  // Initialize form
  const form = useForm<RegistroFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: user?.user_metadata?.nombre || "",
      email: user?.email || "",
      actividades: [],
      comentarios: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: RegistroFormValues) => {
    setIsSubmitting(true);
    
    try {
      console.log('Preparing to submit form data:', data);
      
      // Format the date for PostgreSQL (YYYY-MM-DD)
      const formattedDate = format(data.fecha_visita, 'yyyy-MM-dd');
      
      // Prepare data for submission to Supabase
      const submissionData = {
        nombre: data.nombre,
        email: data.email,
        fecha_visita: formattedDate,
        actividades: JSON.stringify(data.actividades),
        comentarios: data.comentarios || null,
        user_id: user?.id || null
      };
      
      console.log('Submitting data to Supabase:', submissionData);
      
      // Insert data into the visitas table using Supabase
      const { error } = await supabase
        .from('visitas')
        .insert(submissionData);
      
      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message || 'Error al guardar el registro');
      }
      
      console.log('Registration successful');
      
      // Show success message
      toast.success("¡Registro completado con éxito!", {
        description: "Hemos recibido tu información. ¡Disfruta de tu viaje a Miami!",
      });
      
      // Reset form
      form.reset();
      
      // Redirect to appropriate page based on user auth status
      setTimeout(() => {
        if (user) {
          navigate("/mis-visitas");
        } else {
          navigate("/");
        }
      }, 2000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      toast.error("Error al procesar tu registro", {
        description: "Por favor intenta nuevamente más tarde o contacta con soporte técnico.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
          <DatePickerField control={form.control} />
          
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
                <ActivityCheckboxes control={form.control} />
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
  );
};
