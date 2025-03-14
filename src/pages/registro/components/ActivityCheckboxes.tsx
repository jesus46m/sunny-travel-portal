
import { FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { actividadesOpciones } from "../constants";
import { Control } from "react-hook-form";
import { RegistroFormValues } from "../schema";

interface ActivityCheckboxesProps {
  control: Control<RegistroFormValues>;
}

export const ActivityCheckboxes = ({ control }: ActivityCheckboxesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {actividadesOpciones.map((actividad) => (
        <FormField
          key={actividad.id}
          control={control}
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
  );
};

// This is needed for the <FormControl> component above
import { FormControl } from "@/components/ui/form";
