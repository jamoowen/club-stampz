import { ButtonHTMLAttributes, Children, FC } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: FC<ButtonProps> = ({ className, children }) => {
    return (
        <button className='p-2 rounded-sm text-lg hover:text-red-600 transition-all hover:border-red-600  text-underlineColor border-underlineColor border'>
            {children}
        </button>
    )
}

export default Button