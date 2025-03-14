
import { RegistroForm } from "./registro/components/RegistroForm";
import { BenefitsSection } from "./registro/components/BenefitsSection";

const Registro = () => {
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
        <RegistroForm />
        
        {/* Additional Info */}
        <BenefitsSection />
      </div>
    </div>
  );
};

export default Registro;
