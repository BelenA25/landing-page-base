"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from '@/utils/supabase/client';
import { useState } from "react"
import InputMask from "react-input-mask";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name cannot exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\(\+591\)\s[67]\d{7}$/, "The phone number must start with (+591), begin with 7 or 6, and contain exactly 8 digits."),
})

export function ContactForm() {
    const supabase = createClient();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });
    const onSubmit = async (data: any) => {
        setIsSent(false);

        const { error } = await supabase
            .from('Client')
            .insert([
                { name: data.name, email: data.email, phoneNumber: data.phone }
            ]);

        if (error) {
            console.error("Error inserting data:", error.message);
            setIsSent(false);
        } else {
            setIsDialogOpen(true);
            setIsSent(true);
        }
    };
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);
    return (
        <>
            <Form {...form}>
                <div className="space-y-8 max-w-lg mx-auto my-9">
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
                                <InputMask mask="(+999) 99999999" value={field.value} onChange={field.onChange}>
                                    {(inputProps: any) => <Input placeholder="(+591) XXXXXXXX" {...inputProps} />}
                                </InputMask>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full" onClick={form.handleSubmit(onSubmit)} disabled={form.formState.isSubmitting || isSent}> {form.formState.isSubmitting ? "Submitting..." : isSent ? "Alredy Sent" : "Submit"}</Button>
                </div>
            </Form>
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent className="max-w-lg w-full mx-auto p-4 sm:p-6 md:p-8 rounded-lg bg-white shadow-md">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Thank you for contacting us!</AlertDialogTitle>
                        <AlertDialogDescription>
                            Your data has been saved successfully. We will be in touch with you soon.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <Button onClick={() => setIsDialogOpen(false)}>
                            Close
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}