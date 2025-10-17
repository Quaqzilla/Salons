import { Booking } from "./Pages/Book/Booking"
import { Details } from "./Pages/Customer Details/Details";
import { Home } from "./Pages/Home/Home"
import { Services } from "./Pages/Services/Services";
import { Specialists } from "./Pages/Specialists/Specialists"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactDetails } from "./UI/ContactDetails";

function App() {
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Salons" element={<Home />} />
          <Route path="/Specialists" element={<Specialists />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Services" element={<Services/>}/>
          <Route path="/ConfirmBooking" element={<Details/>}/>
          <Route path="/Specialist-Contact-details" element={<ContactDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
