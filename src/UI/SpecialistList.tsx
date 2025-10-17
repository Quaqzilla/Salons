import{
    Card,
    CardContent,
    CardAction
}from "@/components/ui/card"

import Assistants from "@/Storage/Assistants"
import { useNavigate } from "react-router-dom"

export function SpecialistList(){

    const navigate = useNavigate();

    //Change to get input in order to know which specialist is selected
    const view = () => {
        navigate("/Specialist-Contact-details")
    };

    return(
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-sans font-medium mb-4">Our Specialists</h1>

            {Assistants.map((assistants, index) => (

            <Card className="flex flex-col gap-2 mb-2" key={index}>
                <CardContent className="flex flex-row justify-between items-center">

                    <div className="mr-6">
                        <img src={assistants.Image} alt="Specialist image" className="w-30 h-35 object-contain"/>
                    </div>

                    <div className="flex flex-col">
                        <div className="mb-2">
                            <h2 className="text-xl font-bold font-sans">{assistants.Name}</h2>
                            <p className="font-normal text-lg"><strong className="font-medium">Speciality:</strong> {assistants.Specialist}</p>
                        </div>

                        <CardAction>
                            <button 
                            className="text-gray-300 bg-black rounded-md p-2 text-sm"
                            onClick={view}
                            >View Contact Details</button>
                        </CardAction>
                    </div>
                    

                </CardContent>
            </Card>

            ))}
        </div>
    )
}