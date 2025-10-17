import {
    Card,
    CardContent
}from '@/components/ui/card';

export function ServicesMenu(){


    return(
        <div className="bg-gray-300 min-h-screen w-dvw p-6">

            <div className='mb-4'>
                <h1 className='text-3xl font-sans font-medium'>Service Name</h1>
            </div>

            <div className=''>
                <div className="p-1 grid grid-cols-2 gap-0.5">
                            
                    <div className="flex flex-col aspect-square items-center justify-center align-middle p-3">
                        <Card className="bg-gray-50 border-b-3 not-first:w-35 h-40">
                            <CardContent>
                                <img src="" alt="hair image" />
                                <p className="font-light"></p>
                                <p className='text-xl font-medium'></p>
                            </CardContent>
                        </Card>
                                
                    </div>     
                </div>
            </div>

        </div>
    )
}