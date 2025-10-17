
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
            className="w-screen max-w-screen mt-2 mb-6"
            >
            <CarouselContent>
                {Models.map((models, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    
                        <div className="flex aspect-square items-center justify-center p-6 bg-gray-300">
                            <span className="text-4xl font-semibold">
                                <img 
                                src={models.Image} 
                                alt="model" 
                                className="w-full h-full object-contain"
                                />
                            </span>
                        </div>
                       
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            
        </Carousel>
    )
}