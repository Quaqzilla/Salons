import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type IconClickState = {
    [key: string]:boolean;
};

export function Bottomnav(){

    const [clicked, setClicked] = useState<IconClickState>({});
    const navigate = useNavigate()

    const handleClick = (iconName: string): void => {
        setClicked({ [iconName]: true });
    };

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
        <div className="fixed bottom-0 h-24 p-6 bg-gray-100 w-screen flex items-center justify-between rounded-t-2xl">
            
            <div className="flex flex-col items-center">
                <button onClick={() => {handleClick('Home'); Home();}} className='p-3  rounded-lg transition-colors relative'>
                <HomeRoundedIcon sx={{ fontSize: 30}} className={`transition-colors ${clicked.Home ? 'text-black ' : 'text-gray'}`}/>
                {clicked.Home && (
                    <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 w-2 h-2 bg-black rounded-full'></div>
                )}
                </button>
            </div>

            <div className="flex flex-col items-center">
                <button onClick={() => {handleClick('Book'); Bookings();}} className='p-3  rounded-lg transition-colors relative'>
                    <CalendarMonthRoundedIcon sx={{ fontSize: 30}} className={`transition-colors ${clicked.Book ? 'text-black ' : 'text-gray'}`} />
                    {clicked.Book && (
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 w-2 h-2 bg-black rounded-full'></div>
                    )}
                </button>
                
            </div>

            <div className="flex flex-col items-center">

                <button onClick={() => {handleClick('special'); Specialists();}} className='p-3  rounded-lg transition-colors relative'>
                    <Diversity1RoundedIcon sx={{ fontSize: 30}} className={`transition-colors ${clicked.special ? 'text-black ' : 'text-gray'}`} />
                    {clicked.special && (
                        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 w-2 h-2 bg-black rounded-full'></div>
                    )}
                </button>
                
            </div>

        </div>
    )
}