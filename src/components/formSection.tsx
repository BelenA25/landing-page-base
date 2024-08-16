"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from '@/utils/supabase/client';

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name cannot exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\(\+591\)\s[67]\d{7}$/, "Phone number must be in the format (+591) XXXXXXXX")
})

export function ContactForm() {
    const supabase = createClient();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: any) => {
        console.log(data);

        const { error } = await supabase
            .from('Client')
            .insert([
                { name: data.name, email: data.email, phoneNumber: data.phone }
            ]);

        if (error) {
            console.error("Error inserting data:", error.message);
        } else {
            console.log("Data successfully inserted!");
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-lg mx-auto my-9">
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input placeholder="example@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Phone number</FormLabel>
                        <FormControl>
                            <Input placeholder="(+591) XXXXXX" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" className="w-full">Submit</Button>
            </form>
        </Form>
    );
}