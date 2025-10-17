import { BookingUi } from "@/UI/BookingUi";
import { Bottomnav } from "@/UI/Bottomnav";
import { NavBar } from "@/UI/NavBar";


export function Booking(){

    return(
        <div className="bg-gray-300 h-dvh">
            <NavBar/>
            <div className="h-dvh bg-gray-300">
              <BookingUi/>  
            </div>
            <Bottomnav/>
        </div>
    )
}