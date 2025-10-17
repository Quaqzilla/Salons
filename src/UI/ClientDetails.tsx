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

export function ClientDetails(){
    return(
        <div className="p-6">

            <div className="mb-3">
                <h1 className="text-2xl font-medium">Enter Your Details</h1>
            </div>

            <div>

                <div className="flex gap-2 justify-evenly items-center mb-4">
                    <div>
                        <Label htmlFor="Name" className="text-lg">Name</Label>
                        <Input 
                        placeholder="Enter name..." 
                        type="text" 
                        id="name"
                        className="bg-white text-md"
                        />
                    </div>
                    <div>
                        <Label htmlFor="Name" className="text-lg">Surname</Label>
                        <Input 
                        placeholder="Enter surname..." 
                        type="text" 
                        id="surname"
                        className="bg-white text-md"
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="Email" className="text-lg">Email Address</Label>
                    <InputGroup className="bg-white mb-4">
                        
                        <InputGroupInput placeholder="Email address" required type="email" />
                        <InputGroupAddon>
                            <MailIcon/>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <div>
                    <Label htmlFor="Phone Number" className="text-lg">Phone Number</Label>
                    <InputGroup className="bg-white mb-4">
                        
                        <InputGroupInput placeholder="Phone number" required type="number" />
                        <InputGroupAddon>
                            <PhoneIcon/>
                        </InputGroupAddon>
                    </InputGroup>
                </div>

                <div className="flex flex-wrap gap-2 mt-12 justify-center items-center">
                    <Button
                        variant="outline"
                        className="bg-black text-gray-300"
                    >
                        Confirm Appointment
                    </Button>
                </div>

            </div>


        </div>
    )
}