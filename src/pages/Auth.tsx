
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./auth/components/LoginForm";
import { RegisterForm } from "./auth/components/RegisterForm";
import { PasswordRecoveryForm } from "./auth/components/PasswordRecoveryForm";
import { SocialLogins } from "./auth/components/SocialLogins";
import { useAuth } from "@/hooks/useAuth";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<string>("login");
  const [showRecovery, setShowRecovery] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  // Check for recovery mode from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("recovery") === "true") {
      setShowRecovery(true);
    }
  }, [location.search]);

  // Si el usuario ya está autenticado, redirigir a la página principal
  if (user) {
    navigate("/");
    return null;
  }

  return (
    <div className="pt-20 pb-12 bg-miami-sand min-h-screen">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Bienvenido</CardTitle>
            <CardDescription className="text-center">
              Inicia sesión o crea una cuenta para guardar tus visitas
            </CardDescription>
          </CardHeader>
          <CardContent>
            {location.search.includes("error") && (
              <Alert className="mb-4 bg-red-50 border-red-200">
                <AlertCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-600">
                  Ha ocurrido un error durante la autenticación. Por favor, intenta nuevamente.
                </AlertDescription>
              </Alert>
            )}

            {showRecovery ? (
              <PasswordRecoveryForm onBack={() => setShowRecovery(false)} />
            ) : (
              <>
                <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                    <TabsTrigger value="register">Registrarse</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login">
                    <LoginForm 
                      onSuccess={() => navigate("/")} 
                      onForgotPassword={() => setShowRecovery(true)}
                    />
                    <SocialLogins />
                  </TabsContent>
                  <TabsContent value="register">
                    <RegisterForm onSuccess={() => setActiveTab("login")} />
                    <SocialLogins />
                  </TabsContent>
                </Tabs>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
