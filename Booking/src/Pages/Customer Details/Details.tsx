import { Bottomnav } from "@/UI/Bottomnav";
import { ClientDetails } from "@/UI/ClientDetails";

export function Details() {
    return(
        <div className="h-dvh ">
            <div className="h-dvh">
               <ClientDetails/> 
            </div>
            <Bottomnav/>
        </div>
    )
}