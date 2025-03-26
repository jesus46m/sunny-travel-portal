
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

// Esquema de validación para el formulario de recuperación de contraseña
const recoverySchema = z.object({
  email: z.string().email({ message: "Por favor, ingresa un email válido" })
});

type RecoveryFormValues = z.infer<typeof recoverySchema>;

interface PasswordRecoveryFormProps {
  onBack: () => void;
}

export const PasswordRecoveryForm = ({ onBack }: PasswordRecoveryFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<RecoveryFormValues>({
    resolver: zodResolver(recoverySchema),
    defaultValues: {
      email: "",
    },
  });
  
  const onSubmit = async (data: RecoveryFormValues) => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/auth?recovery=true`,
      });
      
      if (error) throw error;
      
      toast.success("Enlace de recuperación enviado", {
        description: "Revisa tu correo electrónico para restablecer tu contraseña",
      });
      
      form.reset();
      onBack();
    } catch (error: any) {
      console.error("Error al enviar el correo de recuperación:", error);
      toast.error("Error al enviar el enlace", {
        description: error.message || "Intenta nuevamente más tarde",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Recuperar contraseña</h2>
        <p className="text-gray-600">
          Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo Electrónico</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-2">
            <Button 
              type="button" 
              variant="outline"
              onClick={onBack}
              disabled={isLoading}
            >
              Volver
            </Button>
            <Button 
              type="submit" 
              className="bg-miami-coral hover:bg-miami-turquoise"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar enlace"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
