import { Loader2 } from 'lucide-react'
import { FC } from 'react'

interface loadingProps {

}

const loading: FC<loadingProps> = ({ }) => {
    return (
    <div>
        <Loader2 className='animate-spin' />
    </div>
    )
}

export default loading