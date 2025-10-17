import { Bottomnav } from "@/UI/Bottomnav";
import { NavBar } from "@/UI/NavBar";
import { Servicescarousal } from "@/UI/Servicescarousal";
import { ServicesMenu } from "@/UI/ServicesMenu";


export function Services(){
    return(
        <div className="w-dvw h-dvh bg-gray-300">
            <NavBar/>
            <Servicescarousal/>
            <div className="min-h-screen pb-24 bg-gray-300">
              <ServicesMenu/>  
            </div>
            
            <div>
              <Bottomnav />  
            </div>
            
        </div>
    )
}