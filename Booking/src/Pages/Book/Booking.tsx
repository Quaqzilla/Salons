import { BookingUi } from "@/UI/BookingUi";
import { Bottomnav } from "@/UI/Bottomnav";
import { NavBar } from "@/UI/NavBar";


export function Booking(){

    return(
        <div className=" h-dvh">
            <NavBar/>
            <div className="h-dvh">
              <BookingUi/>  
            </div>
            <Bottomnav/>
        </div>
    )
}