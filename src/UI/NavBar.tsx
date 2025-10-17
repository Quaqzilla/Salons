import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from "@/components/ui/input-group"

import {
  SearchIcon
} from "lucide-react"

export function NavBar() {
    return(
        <div className="max-w-screen p-6 pb-4">

          <h4 className="mb-4 text-xl font-medium">Hi User,</h4>

            <InputGroup className="border-ring bg-white">
                <InputGroupInput placeholder="Search..." />
                <InputGroupAddon>
                <SearchIcon />
                </InputGroupAddon>
            </InputGroup>

        </div>
    )
}