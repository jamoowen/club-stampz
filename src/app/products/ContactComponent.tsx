'use client'
import BackgroundDiv from '@/components/BackgroundDiv'
import Button from '@/components/Button'
import ContactForm from '@/components/ContactForm'
import { FC, useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion';


import { Minus, Plus } from "lucide-react"



interface ContactComponentProps {

}




const ContactComponent: FC<ContactComponentProps> = ({ }) => {
    const handleClick = () => {
        console.log(`form: ${showForm}`);
        setShowForm(true)
    }

    const [goal, setGoal] = useState(350)

    function onClick(adjustment: number) {
        setGoal(Math.max(200, Math.min(400, goal + adjustment)))
    }


    const [showForm, setShowForm] = useState(false)
    return (
        <Accordion.Root
            className=""
            type="single"
            defaultValue=""
            collapsible

        >
            <Accordion.Item value="item-1">
                <Accordion.Header>
                    <Accordion.Trigger>
                        <Button className='w-48'>
                            Contact Form
                        </Button>
                    </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className=' data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden ' >
                    <BackgroundDiv>
                    <ContactForm />
                    </BackgroundDiv>
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>

    )
}

export default ContactComponent