
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, CreditCard } from "lucide-react";
import { toast } from "sonner";

// Mock exchange rates (in a real app, this would come from an API)
const EXCHANGE_RATES: Record<string, number> = {
  "USD": 1,
  "EUR": 0.92,
  "GBP": 0.78,
  "JPY": 149.50,
  "CAD": 1.36,
  "AUD": 1.52,
  "CHF": 0.89,
  "CNY": 7.23,
  "MXN": 17.68,
};

// Budget expense categories
const EXPENSE_CATEGORIES = [
  "Alojamiento",
  "Transporte",
  "Comidas",
  "Actividades",
  "Compras",
  "Otros"
];

interface BudgetItem {
  id: string;
  category: string;
  description: string;
  amount: number;
}

const CurrencyBudgetCalculator = () => {
  // Currency converter state
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>("EUR");
  const [toCurrency, setToCurrency] = useState<string>("USD");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  
  // Budget calculator state
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);
  const [newItem, setNewItem] = useState<BudgetItem>({
    id: "",
    category: "Alojamiento",
    description: "",
    amount: 0
  });

  // Currency conversion
  const convertCurrency = () => {
    if (amount <= 0) {
      toast.error("Por favor, ingrese una cantidad válida");
      return;
    }

    try {
      // Convert to USD first (if not already USD)
      const amountInUsd = fromCurrency === "USD" 
        ? amount 
        : amount / EXCHANGE_RATES[fromCurrency];
      
      // Convert from USD to target currency
      const result = toCurrency === "USD" 
        ? amountInUsd 
        : amountInUsd * EXCHANGE_RATES[toCurrency];
      
      setConvertedAmount(Number(result.toFixed(2)));
    } catch (error) {
      toast.error("Error al convertir divisas");
    }
  };

  // Swap currencies
  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConvertedAmount(null);
  };

  // Add budget item
  const addBudgetItem = () => {
    if (!newItem.description.trim() || newItem.amount <= 0) {
      toast.error("Por favor, complete todos los campos con valores válidos");
      return;
    }

    const updatedItem = {
      ...newItem,
      id: crypto.randomUUID()
    };

    setBudgetItems([...budgetItems, updatedItem]);
    setNewItem({
      id: "",
      category: "Alojamiento",
      description: "",
      amount: 0
    });

    toast.success("Ítem añadido al presupuesto");
  };

  // Remove budget item
  const removeBudgetItem = (id: string) => {
    setBudgetItems(budgetItems.filter(item => item.id !== id));
  };

  // Calculate total budget
  const totalBudget = budgetItems.reduce((acc, item) => acc + item.amount, 0);

  // Calculate category totals
  const categoryTotals = budgetItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = 0;
    }
    acc[item.category] += item.amount;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white rounded-xl shadow-lg">
      <Tabs defaultValue="currency" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="currency" className="flex items-center gap-2">
            <CreditCard size={16} />
            <span>Conversor de divisas</span>
          </TabsTrigger>
          <TabsTrigger value="budget" className="flex items-center gap-2">
            <Calculator size={16} />
            <span>Calculadora de presupuesto</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="currency" className="p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Cantidad</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount || ""}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="fromCurrency">De</Label>
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                      <SelectTrigger id="fromCurrency">
                        <SelectValue placeholder="Seleccionar moneda" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(EXCHANGE_RATES).map((currency) => (
                          <SelectItem key={currency} value={currency}>
                            {currency}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="toCurrency">A</Label>
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger id="toCurrency">
                        <SelectValue placeholder="Seleccionar moneda" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.keys(EXCHANGE_RATES).map((currency) => (
                          <SelectItem key={currency} value={currency}>
                            {currency}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={swapCurrencies}
                  className="self-center mt-2"
                >
                  Intercambiar monedas
                </Button>
              </div>
            </div>
            
            <Button 
              onClick={convertCurrency} 
              className="w-full bg-miami-coral hover:bg-miami-turquoise"
            >
              Convertir
            </Button>
            
            {convertedAmount !== null && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
                <div className="text-sm text-gray-500">Resultado:</div>
                <div className="text-2xl font-bold">
                  {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                </div>
                <div className="text-xs text-gray-400 mt-2">
                  Tipos de cambio actualizados (simulados)
                </div>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="budget" className="p-4">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div>
                <Label htmlFor="category">Categoría</Label>
                <Select 
                  value={newItem.category} 
                  onValueChange={(value) => setNewItem({...newItem, category: value})}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {EXPENSE_CATEGORIES.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="description">Descripción</Label>
                <Input
                  id="description"
                  placeholder="Ej: Hotel en Miami"
                  value={newItem.description}
                  onChange={(e) => setNewItem({...newItem, description: e.target.value})}
                />
              </div>
              
              <div>
                <Label htmlFor="amount">Importe ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={newItem.amount || ""}
                  onChange={(e) => setNewItem({...newItem, amount: Number(e.target.value)})}
                />
              </div>
            </div>
            
            <Button 
              onClick={addBudgetItem} 
              className="w-full bg-miami-coral hover:bg-miami-turquoise"
            >
              Añadir al presupuesto
            </Button>
            
            {budgetItems.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Presupuesto total: ${totalBudget.toFixed(2)}</h4>
                
                <div className="overflow-auto">
                  <table className="w-full min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categoría</th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                        <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Importe</th>
                        <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {budgetItems.map((item) => (
                        <tr key={item.id}>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">{item.category}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm">{item.description}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right">${item.amount.toFixed(2)}</td>
                          <td className="px-4 py-2 whitespace-nowrap text-sm text-right">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 px-2"
                              onClick={() => removeBudgetItem(item.id)}
                            >
                              Eliminar
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-3">Resumen por categoría</h5>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.entries(categoryTotals).map(([category, total]) => (
                      <div key={category} className="bg-white p-3 rounded border">
                        <div className="text-sm text-gray-500">{category}</div>
                        <div className="font-semibold">${total.toFixed(2)}</div>
                        <div className="text-xs text-gray-400">
                          {Math.round((total / totalBudget) * 100)}% del total
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            {budgetItems.length === 0 && (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg mt-4">
                Añade elementos para calcular tu presupuesto de viaje
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CurrencyBudgetCalculator;
