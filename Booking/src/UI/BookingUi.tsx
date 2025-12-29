"use client"

import * as React from "react"
import { Check, ChevronDownIcon, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
    Card,
    CardContent,
}from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
}from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import Assistants from "@/Storage/Assistants"
import { AlertCircleIcon } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { useNavigate } from "react-router-dom"


const frameworks = [
  {
    value: "Haircuts",
    label: "Haircut",
  },
  {
    value: "Weaves",
    label: "Weave Installation",
  },
  {
    value: "Makeup",
    label: "Makeup",
  },
  {
    value: "Spa",
    label: "Spa",
  },
  {
    value: "Nails",
    label: "Nails",
  },
]


export function BookingUi(){
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false)
    const [date, setDate] = React.useState<Date | undefined>(undefined)

    const [opn, setOpn] = React.useState(false)
    const [value, setValue] = React.useState("")

    const [times, setTime] = React.useState(false)

    const [chosenTime, setTimeValue] = React.useState("")

    // unavailable dates and times fetched from backend libraries
    const [fullyBookedDates, setFullyBookedDates] = React.useState<Date[]>([])
    const [unavailableTimes, setUnavailableTimes] = React.useState<string[]>([])

    React.useEffect(() => {
        const fetchUnavailable = async () => {
            try {
                // TODO: replace 'James' with selected specialist when available
                const res = await fetch(`/booking/validation?specialist=James`)
                const json = await res.json()
                if (json.success) {
                    const dates: Date[] = (json.dates || []).map((d: string) => {
                        const parts = d.split("-").map((p: string) => parseInt(p, 10))
                        return new Date(parts[0], parts[1] - 1, parts[2])
                    })
                    setFullyBookedDates(dates)
                    setUnavailableTimes(json.times || [])
                } else {
                    console.error('booking fetch error', json.error)
                }
            } catch (err) {
                console.error('failed to fetch unavailable dates', err)
            }
        }
        fetchUnavailable()
    }, [])

    //function to check if time is available
    const handleShowAlert = () => {
        if (unavailableTimes.includes(chosenTime)){
          setTime(true)
        } else {
            navigate("/ConfirmBooking")
        }
    };



    return(
        <div className="p-6 h-dvh">

            <div className="mb-4 text-3xl font-sans font-medium">
                <h1>Booking</h1>
            </div>

            <div className="mb-4">

                <div>
                    <h1 className="text-lg font-medium mb-2">Choose a service</h1>
                </div>

                <div>
                    <Popover open={opn} onOpenChange={setOpn}>
                        <PopoverTrigger asChild>
                            <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={opn}
                            className="w-[200px] justify-between bg-gray-100"
                            >
                            {value
                                ? frameworks.find((framework) => framework.value === value)?.label
                                : "Select Service..."}
                            <ChevronsUpDown className="opacity-50" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-0">
                            <Command>
                            <CommandInput placeholder="Search Service..." className="h-9" />
                            <CommandList>
                                <CommandEmpty>No Service found.</CommandEmpty>
                                <CommandGroup>
                                {frameworks.map((framework) => (
                                    <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        // close the service popover (opn) not the date popover (open)
                                        setOpn(false)
                                    }}
                                    >
                                    {framework.label}
                                    <Check
                                        className={cn(
                                        "ml-auto",
                                        value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    </CommandItem>
                                ))}
                                </CommandGroup>
                            </CommandList>
                            </Command>
                        </PopoverContent>
                    </Popover>
                </div>

            </div>

            <div>

                <div>
                    <h1 className="text-lg font-medium">Specialists</h1>
                </div>

                <div>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-screen"
                        >
                        <CarouselContent>
                            {
                                // filter assistants by selected service (value). If no selection, show all
                                (() => {
                                    const filtered = value ? Assistants.filter(a => a.Specialist === value) : Assistants;
                                    return filtered.map((assistant, index) => (
                                        <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                                            <div className="p-1">
                                                <div className="flex flex-col aspect-square items-center justify-center align-middle p-3">
                                                    <Card className="bg-gray-100 border-b-3 w-30 h-45 flex justify-center items-center md:w-60 md:h-100 md:bg-black md:text-white">
                                                        <CardContent className="flex justify-center flex-col items-center gap-4">
                                                            <img src={assistant.Image} alt="" className="w-20 h-25 object-contain md:w-40 md:h-40" />
                                                            <p className="font-medium">{assistant.Name}</p>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))
                                })()
                            }
                        </CarouselContent>
                    </Carousel>

                </div>

            </div>

            <div className="flex gap-4 mb-5">
                <div className="flex flex-col gap-3">
                    <Label htmlFor="date-picker" className="px-1 text-lg">
                    Date
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant="outline"
                        id="date-picker"
                        className="w-32 justify-between font-normal bg-gray-100"
                        >
                        {date ? date.toLocaleDateString() : "Select date"}
                        <ChevronDownIcon />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto overflow-hidden p-0" align="start">
                        <Calendar
                        mode="single"
                        selected={date}
                        captionLayout="dropdown"
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}
                        modifiers={{fullyBooked: fullyBookedDates}}
                        modifiersClassNames={{fullyBooked: "bg-red-500 text-white rounded-md"}}
                        className="rounded-md border"
                        />
                    </PopoverContent>
                    </Popover>
                </div>
                <div className="flex flex-col gap-3">
                    <Label htmlFor="time-picker" className="px-1 text-lg">
                    Time
                    </Label>
                    <Input
                    type="time"
                    id="time-picker"
                    step="1"
                    defaultValue="10:30:00"
                    onChange={(e) => setTimeValue(e.target.value)}
                    className="bg-gray-100 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                </div>
            </div>
            
            <div>
                <div className="flex flex-wrap gap-2 mt-3 justify-center items-center">
                    <Button
                        variant="outline"
                        onClick={handleShowAlert}
                        className="bg-black text-gray-300"
                    >
                        Book Appointment
                    </Button>
                </div>

                {times && (
                    <div className="animate-in fade-in slide-in-from-top-4 duration-300 fixed top-2 z-100 w-80">
                        <Alert variant={"destructive"} className="border-red-500 border-solid flex flex-row gap-5 ">
                            <div className="flex items-start gap-3">
                                <AlertCircleIcon/>
                                <div className="flex-1">
                                    <AlertTitle className="mb-1 text-red-500">Time Unavailable</AlertTitle>
                                    <AlertDescription>
                                        Selected time slot is unavailable. <br/> 
                                        Please select another time slot.
                                    </AlertDescription>
                                </div>
                            </div>

                        </Alert>
                    </div>
                )}
            </div>

        </div>
    )
}