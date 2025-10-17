import { Bottomnav } from "@/UI/Bottomnav";
import { ClientDetails } from "@/UI/ClientDetails";

export function Details() {
    return(
        <div className="h-dvh bg-gray-300">
            <div className="h-dvh bg-gray-300">
               <ClientDetails/> 
            </div>
            <Bottomnav/>
        </div>
    )
}