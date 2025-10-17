import { ArrowLeft, MailIcon, PhoneIcon } from "lucide-react"
import img from "./../assets/Models/1.webp"
import { Bottomnav } from "./Bottomnav"
import { useNavigate } from "react-router-dom"

export function ContactDetails(){

    const navigate = useNavigate()

    const book = () => {
        try{
            navigate("/Booking")
        }catch (error){
            console.error(error)
        }
    };

    const back = () => {
        try{
            navigate("/Specialists")
        }catch (error){
            console.error(error)
        }
    };

    return(
        <div className="min-h-screen pb-24 bg-gray-300">
             
             <div className="">
                <img src={img} alt="" className="h-60 w-screen object-cover bg-fixed"/>
                <div className="absolute top-2 flex justify-between items-center">
                    
                    <ArrowLeft className="bg-white rounded-4xl p-5 m-4 w-14 h-14" onClick={back}/>
                    
                </div>
             </div>

            <div className="relative -top-5 p-6 bg-gray-300 max-h-screen rounded-t-3xl">

                <div className="mb-4">
                    <h1 className="text-2xl font-medium">Name of Specialist</h1>
                    <h2 className="text-xl font-light">Specialist</h2>
                </div>

                <hr className="border-t border-gray-400 my-4" />

            
                    <h2 className="mb-4 text-xl font-medium">Contact</h2>
                    
                    <div className="flex gap-2 items-center mb-1">
                        <PhoneIcon className="w-5 h-5"/>
                        <h2>(075)-3420-3482</h2>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MailIcon className="w-5 h-5"/>
                        <h2>Specialist email</h2>
                    </div>
                
                <hr className="border-t border-gray-400 my-4" />

                    <h2 className="mb-6 text-xl font-medium">Operating hours</h2>

                    <div className="flex justify-between">
                        <p>Monday - Friday</p>
                        <p>09h00 - 18h00</p>
                    </div>

                    <div className="flex justify-between">
                        <p>Saturday</p>
                        <p>09h00 - 12h00</p>
                    </div>

                    <p className="mt-3 text-red-400">N.B <strong>Sunday</strong> appointsments are only on special request </p>

            </div>
            <button 
                className="text-gray-300 bg-black p-2 text-lg flex justify-center items-center align-middle w-screen"
                onClick={book}        
            >Book Appointment</button>

            <Bottomnav/>

        </div>
    )
}