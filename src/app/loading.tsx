import { Loader2 } from 'lucide-react'
import { FC } from 'react'

interface loadingProps {

}

const loading: FC<loadingProps> = ({ }) => {
    return (
        <main className="h-full flex items-center flex-col overflow-hidden min-h-screen ">
            <div>
                <Loader2 className='text-4xl animate-spin' />
            </div>
        </main>
    )
}

export default loading