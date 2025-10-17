/*Application imports */
import { Bottomnav } from "@/UI/Bottomnav"
import { Modelscarousal } from "@/UI/Modelscarousal"
import { NavBar } from "@/UI/NavBar"
import { Servicescarousal } from "@/UI/Servicescarousal"

export function Home(){
    /*Functions used*/

    return(
        /*main application*/
        <div className="bg-gray-300">
            <NavBar/>
            <Servicescarousal/>
            <div className="max-h-screen pb-15 bg-gray-300">
               <Modelscarousal/> 
            </div>
            
            <Bottomnav/>
        </div>
    )
}