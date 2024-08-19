"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { Input, InputProps } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { createClient } from '@/utils/supabase/client';
import { useState } from "react"
import InputMask from "react-input-mask";
import React from "react"
import { FaSpinner } from 'react-icons/fa';


const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name cannot exceed 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().regex(/^\(\+591\)\s[67]\d{7}$/, "The phone number must start with (+591), begin with 7 or 6, and contain exactly 8 digits."),
    question: z.string().min(10, "Your question must be at least 10 characters long").max(500, "Your question cannot exceed 500 characters"),
})

const MaskedInput = React.forwardRef<HTMLInputElement, any>((props, ref) => (
    <InputMask {...props} ref={ref}>
        {(inputProps: React.JSX.IntrinsicAttributes & InputProps & React.RefAttributes<HTMLInputElement>) => <Input {...inputProps} />}
    </InputMask>
));

export function ContactForm() {
    MaskedInput.displayName = "MaskedInput";
    const supabase = createClient();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            question: ""
        }
    });
    const onSubmit = async (data: any) => {
        setIsSent(false);
        setIsLoading(true);

        setTimeout(async () => {
            const { error } = await supabase
                .from('Client')
                .insert([
                    { name: data.name, email: data.email, phoneNumber: data.phone, question: data.question }
                ]);

            if (error) {
                console.error("Error inserting data:", error.message);
                setIsSent(false);
            } else {
                setIsDialogOpen(true);
                setIsSent(true);
                form.reset();
            }

            setIsLoading(false);
        }, 1000);
    };
    const handleDialogClose = () => {
        setIsDialogOpen(false);
        setIsSent(false);
        form.reset();
    };
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <>
            <Form {...form}>
                <div className="space-y-8 max-w-lg mx-auto my-9">
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Your name" {...field} />
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
                                <MaskedInput
                                    mask="(+999) 99999999"
                                    value={field.value}
                                    onChange={field.onChange}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField control={form.control} name="question" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Your question</FormLabel>
                            <FormControl>
                                <Input placeholder="Write here your question..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full flex justify-center items-center" onClick={form.handleSubmit(onSubmit)} disabled={form.formState.isSubmitting || isSent}>
                        {isLoading ? <FaSpinner className="animate-spin mr-2 h-5 w-5" /> : null}
                        {form.formState.isSubmitting ? "Submitting..." : isSent ? "Already Sent" : "Submit"}
                    </Button>
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
                        <Button onClick={handleDialogClose}>
                            Close
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    );
}