import { NavBar } from "@/UI/NavBar";
import { Bottomnav } from "@/UI/Bottomnav";
import { SpecialistList } from "@/UI/SpecialistList";
import { Servicescarousal } from "@/UI/Servicescarousal";

export function Specialists() {
    return(
        <div className="bg-gray-300 h-dvh">
            <NavBar/>
            <Servicescarousal/>
            <div className="min-h-screen pb-24 bg-gray-300">
                <SpecialistList/>
            </div>
            <div>
                <Bottomnav/>
            </div>
             
        </div>
        
    )
}