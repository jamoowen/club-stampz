'use client'
import { FC, useState } from 'react'

import { Input } from '@/components/ui/input'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


import _ from 'lodash'
import { PricingPageData } from '@/types/sanity-types'

interface PricingComponentProps {
    data: PricingPageData
}



let range_arr = _.range(3, 21)

const roundToNearestQuarter = (num: number) => {
    return parseFloat((Math.round(num * 4) / 4).toFixed(2));
}

const PricingComponent: FC<PricingComponentProps> = ({data}) => {
    
    const basePrice: number = data.basePrice;
    const additionalCharPrice: number = roundToNearestQuarter(basePrice/3)
    const discount1Threshold: number = data.discount1Threshold;
    const discount2Threshold: number = data.discount2Threshold;
    const discount1: number = data.discount1/100;
    const discount2: number = data.discount2/100;

    const calcPrice = (q: number) => {
        let p = basePrice;

        if (q<=3) {
            p =  basePrice;
        } else if (q >= discount1Threshold && q < discount2Threshold) {
            p = basePrice + (additionalCharPrice*(1-discount1))*(q-3)
      
        } else if ( q > discount2Threshold) {
            p = basePrice + (additionalCharPrice*(1-discount2))*(q-3)
            
        } else {
            p = basePrice + additionalCharPrice*(q-3)
            
        }
        return Math.round(p * 100) / 100
    }
    
    
    const [quantity, setQuantity] = useState(3);
    const [price, setPrice] = useState(calcPrice(quantity));


    const handleChange = (e: string) => {
        const q = Number(e);
        setQuantity(Number(q))
        const totalP = calcPrice(q);
        setPrice(totalP);
        console.log(JSON.stringify(data))
        
        

    }
    return (
        <div className='flex flex-row gap-10 py-5'>

            <div className='flex flex-col'>
                <span>Quantity</span>
                <Select name='SelectElement' onValueChange={(e) => handleChange(e)}>
                    <SelectTrigger className="bg-white text-black w-[80px]">
                        <SelectValue placeholder="3" />
                    </SelectTrigger>
                    <SelectContent className='bg-white text-black h-[250px]'>

                        <SelectGroup >
                            <SelectLabel>Number of characters</SelectLabel>
                            {range_arr.map((num) => (
                                <SelectItem key={num} className='cursor-pointer hover:bg-gray-200' value={String(num)}>{num===3?`1-3`:num}</SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div>

                <div className='flex flex-col'>
                    <span>Total Price</span>
                    {price}
                </div>

            </div>
        </div>
    )
}

export default PricingComponent
