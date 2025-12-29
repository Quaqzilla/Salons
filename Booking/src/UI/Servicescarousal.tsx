import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"

import {
    Card,
    CardContent
} from "@/components/ui/card"

import Services from "@/Storage/Services";

import { useNavigate } from "react-router-dom";

export function Servicescarousal(){

    const navigate = useNavigate();

    const openService = (serviceName: string) => {
        try{
            // pass the clicked service name to the Services page via location state
            navigate("/Services", { state: { service: serviceName } });
        }catch (error){
            console.error(error)
        }
    };


    return(
        <div className="p-6 pt-3 pb-0">
 
            <h1 className="text-3xl font-sans font-medium md:text-4xl">Services</h1>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-full relative"
                >
                <CarouselContent>
                    {Services.map((service, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                        <div className="p-1">
                            
                            <div className="flex flex-col aspect-square items-center justify-center align-middle p-3">
                                <Card className="bg-gray-100 p-2 border-b-3 w-35 h-40 cursor-pointer flex justify-center md:w-70 md:h-80" onClick={() => openService(service.Service)}>
                                    <CardContent className="flex flex-col items-center justify-center gap-2">
                                        <img 
                                        src={service.Image} 
                                        alt="" 
                                        className="w-24 h-24 object-cover md:w-48 md:h-48"
                                        />
                                        <p className="font-medium text-xl">{service.Service}</p>
                                    </CardContent>
                                </Card>
                                
                            </div>
                            
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden bg-black text-white rounded-full p-2 absolute left-2 top-1/2 -translate-y-1/2 z-10 md:left-4 md:flex"/>
                <CarouselNext className="hidden bg-black text-white rounded-full p-2 absolute right-2 top-1/2 -translate-y-1/2 z-10 md:right-4 md:flex"/>
            </Carousel>

        </div>
    )
}