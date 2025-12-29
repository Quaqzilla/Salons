import {
    Card,
    CardContent
}from '@/components/ui/card';

import { useLocation } from 'react-router-dom';
import Menu from '@/Storage/Menu';

export function ServicesMenu(){

    const location = useLocation();
    // service name passed via navigate state from Servicescarousal
    const serviceName: string | undefined = (location.state as any)?.service;

    // normalize keys in Menu to compare (Menu keys are lowercase)
    const key = serviceName ? serviceName.toLowerCase() : undefined;

    const items = key && (Menu as any)[key] ? (Menu as any)[key] : [];

    return(
        <div className=" min-h-screen w-full p-6">

            <div className='mb-4'>
                <h1 className='text-3xl font-sans font-medium'>{serviceName ?? 'Services'}</h1>
            </div>

            <div className=''>
                <div className="p-1 grid grid-cols-2 gap-0.5 md:grid-cols-4">
                    {items.length === 0 ? (
                        <div className="col-span-2 p-4">No items found for {serviceName ?? 'this service'}.</div>
                    ) : (
                        items.map((it: any, i: number) => (
                            <div key={i} className="flex flex-col aspect-square items-center justify-center align-middle p-3">
                                <Card className="bg-gray-100 border-b-3 w-35 h-40 bg-black flex flex-col justify-center items-center gap-5 md:w-50 md:h-60">
                                    <CardContent>
                                        <img src={it.image} alt={it.title} className='w-30 h-35 md:w-40 md:h-40' />
                                        <p className="font-light">{it.title}</p>
                                        <p className='text-xl font-medium'>R{it.price}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    )
}