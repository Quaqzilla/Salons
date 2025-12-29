import{
    InputGroup,
    InputGroupAddon,
    InputGroupInput
}from "@/components/ui/input-group"

import{
    Input
}from "@/components/ui/input"

import{
    Label
}from "@/components/ui/label"

import{
    PhoneIcon,
    MailIcon
}from "lucide-react"

import{
    Button
}from "@/components/ui/button"

import { NavBar } from "./NavBar"

export function ClientDetails(){
    return(
        <div>

            <NavBar/>

            <div className="p-6">
                <h1 className="text-2xl font-medium">Enter Your Details</h1>
            </div>

            <div className="md:mt-10 p-6">

                <div className="flex gap-2 justify-evenly items-center mb-4 md:gap-1">
                    <div>
                        <Label htmlFor="Name" className="text-lg">Name</Label>
                        <Input 
                        placeholder="Enter name..." 
                        type="text" 
                        id="name"
                        className="bg-gray-100 border-b-3 text-md md:w-100"
                        />
                    </div>
                    <div>
                        <Label htmlFor="Name" className="text-lg">Surname</Label>
                        <Input 
                        placeholder="Enter surname..." 
                        type="text" 
                        id="surname"
                        className="bg-gray-100 border-b-3 text-md md:w-100"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:gap-1 md:justify-evenly md:items-center">
                    <div>
                        <Label htmlFor="Email" className="text-lg">Email Address</Label>
                        <InputGroup className="bg-gray-100 border-b-3 mb-4 md:w-100">
                            
                            <InputGroupInput placeholder="Email address" required type="email" />
                            <InputGroupAddon>
                                <MailIcon/>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>

                    <div>
                        <Label htmlFor="Phone Number" className="text-lg">Phone Number</Label>
                        <InputGroup className="bg-gray-100 border-b-3 mb-4 md:w-100">
                            
                            <InputGroupInput placeholder="Phone number" required type="number" />
                            <InputGroupAddon>
                                <PhoneIcon/>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                </div>

                

                <div className="flex flex-wrap gap-2 mt-12 justify-center items-center">
                    <Button
                        variant="outline"
                        className="bg-black text-gray-300 cursor-pointer"
                    >
                        Confirm Appointment
                    </Button>
                </div>

            </div>


        </div>
    )
}