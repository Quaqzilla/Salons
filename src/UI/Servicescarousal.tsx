import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"

import {
    Card,
    CardContent
} from "@/components/ui/card"

import Services from "@/Storage/Services";

import { useNavigate } from "react-router-dom";

export function Servicescarousal(){

    const navigate = useNavigate();
    
    const hairStyle = () => {
        try{
            navigate("/Services")
        }catch (error){
            console.error(error)
        }
    };


    return(
        <div className="p-6 pt-3 pb-0 ">

            <h1 className="text-3xl font-sans font-medium">Services</h1>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-screen"
                >
                <CarouselContent>
                    {Services.map((service, index) => (
                    <CarouselItem key={index} className="basis-1/3">
                        <div className="p-1">
                            
                            <div className="flex flex-col aspect-square items-center justify-center align-middle p-3">
                                <Card className="bg-gray-50 border-b-3 border-b-black w-25 h-30" onClick={hairStyle}>
                                    <CardContent>
                                        <img src={service.Image} alt="" />
                                        <p className="font-medium">{service.Service}</p>
                                    </CardContent>
                                </Card>
                                
                            </div>
                            
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </div>
    )
}