import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/components/ui/input-group"

import {
  SearchIcon
} from "lucide-react"

import { useNavigate } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate()
  
      const Home = () => {
          
          try{
              navigate("/Salons")
          }catch (error){
              console.error(error)
          }
      };
  
      const Bookings = () => {
          
          try{
              navigate("/Booking")
          }catch (error){
              console.error(error)
          }
      };
  
      const Specialists = () => {
          
          try{
              navigate("/Specialists")
          }catch (error){
              console.error(error)
          }
      };
    return(
        <div className="max-w-screen">

          <div className="max-w-screen p-6 pb-4 md:hidden ">
            <InputGroup className="border-ring bg-white">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                <SearchIcon />
                </InputGroupAddon>
            </InputGroup>
          </div>

          <div className="hidden justify-evenly items-center bg-black px-2 py-2 rounded-b-lg text-white md:flex">

            <div>
              <img src="" alt="company logo" className="w-15 h-15"/>
            </div>
            

            <ul className="flex gap-4 font-sans text-lg">
              <li className="cursor-pointer" onClick={Home}>Home</li>
              <li className="cursor-pointer" onClick={Bookings}>Booking</li>
              <li className="cursor-pointer" onClick={Specialists}>Specialists</li>
            </ul>

            <div className="flex gap-4 items-center">
              <InputGroup className="border-ring bg-white w-50">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                <SearchIcon />
                </InputGroupAddon>
            </InputGroup>

            </div>
            
          </div>



        </div>
    )
}