import { Loader2 } from 'lucide-react'
import { FC } from 'react'
import { Skeleton } from "@/components/ui/skeleton"


interface loadingProps {

}

const loading: FC<loadingProps> = ({ }) => {
    return (
        <main className="h-full flex items-center flex-col overflow-hidden min-h-screen ">
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </main>
    )
}

export default loading