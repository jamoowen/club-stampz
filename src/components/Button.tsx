import { ButtonHTMLAttributes, Children, FC } from 'react'
import { Loader2 } from "lucide-react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";




export const buttonVariants = cva(
    'p-2 gap-1 rounded-sm text-lg shrink-0 flex flex-row items-center justify-center border-underlineColor border',
    {
        variants: {
            variant: {
                default: 'hover:text-red-600 transition-all hover:border-red-600 text-underlineColor',
                disabled: 'text-blackA6',
                alternate: ''
            },
            size: {
                default: 'w-24 h-8',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)



interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
}

const defaultButton = 'p-2 gap-1 rounded-sm text-lg  w-32 shrink-0 h-auto flex flex-row items-center justify-center hover:text-red-600 transition-all hover:border-red-600  text-underlineColor border-underlineColor border'

const Button: FC<ButtonProps> = ({ className, children, isLoading }) => {
    return (
        <button disabled={isLoading} className= {cn(defaultButton, className)}>
              {isLoading ? <Loader2 className=" h-4 s-4 animate-spin" /> : children}
            
        </button>
    )
}

export default Button