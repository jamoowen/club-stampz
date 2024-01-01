'use client'

import { FC, useState } from 'react'
import * as Form from '@radix-ui/react-form';
import Button from './Button';
import * as z from "zod"

import { useToast } from "@/components/ui/use-toast"
import { toast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"
import * as RadioGroup from '@radix-ui/react-radio-group';




const axios = require('axios').default;
import { AxiosError } from 'axios';

const formSchema = z.object({
    email: z.string().email(),
    name: z.string().min(2).max(30),
    message: z.string().min(5).max(2000)
})



interface ContactFormProps {

}

const ContactForm: FC<ContactFormProps> = ({ }) => {

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true);
        const formData = Object.fromEntries(new FormData(event.currentTarget));

        console.log("SUBMITTING FORM...")
        console.log(`HERE: ${formData.email}, ${formData.name}, ${formData.message}`)
        try {
            const { data } = await axios.post('/api/contact', {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            toast({
                title: "Email sent!",
                description: "I'll respond to you as soon as possible!",
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
        <Form.Root className="w-auto [260px]" onSubmit={(e) => { handleSubmit(e) }} >
            <Form.Field className="grid mb-[10px]" name="radio">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] leading-[35px] text-white">Subject of Message</Form.Label>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Select a subject
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <RadioGroup.Root
                        className="flex flex-col gap-2.5"
                        defaultValue="General Inquiry"
                        aria-label="View density"
                    >
                        <div className="flex items-center">
                            <RadioGroup.Item
                                className="bg-white w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Club Stamping"
                                id="r1"
                            >
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-gold" />
                            </RadioGroup.Item>
                            <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r1">
                                Club Stamping
                            </label>
                        </div>
                        <div className="flex items-center">
                            <RadioGroup.Item
                                className="bg-white w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="General Inquiry"
                                id="r2"
                            >
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-gold" />
                            </RadioGroup.Item>
                            <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r2">
                                General Inquiry
                            </label>
                        </div>
                        <div className="flex items-center">
                            <RadioGroup.Item
                                className="bg-white w-[20px] h-[20px] rounded-full shadow-[0_2px_10px] shadow-blackA4 hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-default"
                                value="Help"
                                id="r3"
                            >
                                <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-gold" />
                            </RadioGroup.Item>
                            <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r3">
                                Help
                            </label>
                        </div>
                    </RadioGroup.Root>
                </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="email">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] leading-[35px] text-white">Email</Form.Label>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Please enter your email
                    </Form.Message>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                        Please provide a valid email
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="box-border w-[260px] bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="email"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="name">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] leading-[35px] text-white">Name</Form.Label>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Please enter your Name
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <input
                        className="box-border w-[260px] bg-white shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
                        type="text"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Field className="grid mb-[10px]" name="message">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[15px] leading-[35px] text-white">
                        Message
                    </Form.Label>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Let us know what you would like done to
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <textarea
                        className="box-border h-48 w-full bg-white shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-blackA12 shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
                        required
                    />
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <Button isLoading={loading}>
                    Submit
                </Button>
            </Form.Submit>
        </Form.Root>
    )
}

export default ContactForm