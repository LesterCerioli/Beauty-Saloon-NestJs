'use client'
import { NextPage } from "next";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
//import { format } from "path";

const isFutureTime = (inputTime: string) => {
  const currentTime = new Date();
  const [inputHours, inputMinutes] = inputTime.split(":").map(Number);
  const inputDate = new Date();
  inputDate.setHours(inputHours, inputMinutes, 0, 0);

  return inputDate > currentTime;
};

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Entre com um nome válido.",
  }),
  phone: z.string().regex(/^(\d{2})?\s?9?\d{4}[-\s]?\d{4}$/, {
    message: "Telefone inválido, use o formato (XX) 9XXXX-XXXX ou 9XXXXXXXX.",
  }),
  scheduleDate: z.date({
    required_error: "É necessário escolher uma data para o seu agendamento."
  }),
  appointmentHour: z.string().refine(((appointmentHour) => isFutureTime(appointmentHour)), {
    message: "Horário Inválido."
  }),
})

const ScheduleCreation: NextPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username: "",
          phone: "",
          scheduleDate: undefined,
          appointmentHour: "",
        },
      })
      const { reset } = form;

      function onSubmit(values: z.infer<typeof formSchema>) {
        // Chamada para a API abaixo... Por hora, só printa no console.
        console.log(values);
        reset();
      }

    return (
        <main className="flex flex-row h-screen flex-wrap items-center justify-center bg-color-secundaria overflow-auto
        gap-5">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-auto rounded-xl p-5 gap-8 justify-center bg-color-principal p-">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-color-secundaria">Nome do Cliente</FormLabel>
                            <FormControl>
                                <Input className="transition-all duration-500" placeholder="nome completo" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="font-bold text-color-secundaria">Telefone para Contato</FormLabel>
                            <FormControl>
                                <Input className="transition-all duration-500" placeholder="(XX) 9XXXX-XXXX" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                        control={form.control}
                        name="scheduleDate"
                        render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel className="font-bold text-color-secundaria">Data do Agendamento</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                      <FormControl>
                                        <Button
                                          variant={"outline"}
                                          className={cn(
                                            "w-[240px] pl-3 text-left font-normal",
                                            !field.value && "text-muted-foreground"
                                          )}
                                        >
                                          {field.value ? (
                                            format(field.value, "dd/MM/yyyy", {locale: ptBR})
                                          ) : (
                                            <span>Escolha uma data</span>
                                          )}
                                          <CalendarIcon className="ml-auto h-4 w-4" />
                                        </Button>
                                      </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 bg-white text-black rounded-sm border-b-black transition-all duration-500 focus:w-64" align="start">
                                      <Calendar
                                        mode="single"
                                        selected={field.value}
                                        onSelect={field.onChange}
                                        locale={ptBR}
                                        disabled={(date: Date) =>
                                          date.getTime() < new Date().setHours(0, 0, 0, 0) || date.getTime() < new Date("1900-01-01").getTime()
                                        }
                                        initialFocus
                                      />
                                    </PopoverContent>
                                  </Popover>
                                  <FormMessage />
                            </FormItem>
                      )}
                    />

                    <FormField
                        control={form.control}
                        name="appointmentHour"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-bold text-color-secundaria">Horário do Agendamento</FormLabel>
                              <FormControl>
                                <Input className="transition-all duration-500" type="time" {...field} />
                              </FormControl>
                              <FormMessage />
                          </FormItem>
                      )}
                      />
                    
                    <Button type="submit">Criar Agendamento</Button>
                </form>
            </Form>
        </main>
    );
}

export default ScheduleCreation;