'use client'

import { FC, useState } from 'react'
import { useForm } from "react-hook-form"

import Button from './Button';
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


import { useToast } from "@/components/ui/use-toast"
import { toast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"



const axios = require('axios').default;
import { AxiosError } from 'axios';

const formSchema = z.object({
    subject: z.enum(["Stamping Inquiry", "General Inquiry", "Help"], {
        required_error: "You need to select a notification type.",
      }),
    
    email: z.string().email(),
    name: z.string().min(2).max(35),
    message: z.string().min(5, { message: "You need to send a longer message than that!" }).max(3000, { message: "" })
})






interface ContactFormProps {

}

const ContactForm: FC<ContactFormProps> = ({ }) => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            subject: "General Inquiry",
            email: "",
            name: "",
            message: "",
        },
    })


    const [loading, setLoading] = useState(false)

    const submitForm = async (values: z.infer<typeof formSchema>) => {
        setLoading(true)
        console.log(`submitting: ${values}, ${values.subject}, ${values.email}`)

        try {
            // const { data } = await axios.post('/api/contact', {
            //     name: values.name,
            //     email: values.email,
            //     message: values.message
            // }, {
            //     headers: {
            //         'Content-Type': 'application/json'
            //     }
            // });

            toast({
                title: "Email sent!",
                description: "We'll respond to you as soon as possible!",
            })
        } catch (error) {
            const axiosError = error as AxiosError;
            console.error(axiosError.response?.data);
            toast({
                title: "ERROR!!",
                description: "Unable to send email; please try again or use an alternative form of contact",

            })
        } finally {
            setLoading(false);
        }


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(submitForm)} className="">

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem className="space-y-3 mb-2">
                            <FormLabel>Subject of the message</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex flex-col space-y-1"
                                >
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Stamping Inquiry" />
                                        </FormControl>
                                        <FormLabel className="">
                                            Stamping Inquiry
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="General Inquiry" />
                                        </FormControl>
                                        <FormLabel className="">
                                            General Inquiry
                                        </FormLabel>
                                    </FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                        <FormControl>
                                            <RadioGroupItem value="Help" />
                                        </FormControl>
                                        <FormLabel className="">Help</FormLabel>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="" type='email' className='text-black w-46 md:w-64' {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input placeholder="" className='text-black w-46 md:w-64' {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    className="placeholder:text-opacity-10 h-48 sm:h-32 text-black"
                                    placeholder="Hi James! I just had a look through your portfolio, and wanted to reach out..."
                                    {...field}

                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="mt-5" type="submit">
                    Submit
                </Button>

            </form>
        </Form>
    )
}

export default ContactForm

