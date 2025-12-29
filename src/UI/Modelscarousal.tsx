
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel"
import Models from "@/Storage/Models"

export function Modelscarousal(){

    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return(
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-screen mt-2 mb-6 md:mt-0"
            >
            <CarouselContent>
                {Models.map((models, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                    <div className="p-1">
                    
                        <div className="flex aspect-square items-center justify-center">
                            
                                <img 
                                src={models.Image} 
                                alt="model" 
                                className="w-full h-full object-contain rounded-lg"
                                />
                            
                        </div>
                       
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            
        </Carousel>
    )
}