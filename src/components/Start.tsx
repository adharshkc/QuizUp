import { useNavigate } from "react-router-dom"
import logo from "../assets/image.png"


const Start = () => {
    const navigate = useNavigate()
   const handleClick = ()=>{
    const session = "user" +" " + Math.floor(Math.random()*100)
         sessionStorage.setItem("userSession", session)
        navigate('/quiz/1')
    }
    return (
        <div className="h-screen flex flex-col items-center">
        <div className="flex justify-center pt-10">
            <img src={logo} className="w-48 sm:w-64 md:w-72 lg:w-80" alt="logo" />
        </div>
        <div className="text-black pt-20 sm:pt-28 text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight">
                <span className="bg-gradient-to-r from-[#f5a663] to-[#f27310] bg-clip-text text-transparent">
                    Test Your
                </span>
                <span className="text-black"> Knowledge, </span>
                <br />
                Challenge
                <span className="ml-1"></span>
                <span className="bg-gradient-to-r from-[#f5a663] to-[#f27310] bg-clip-text text-transparent">
                    Your Mind
                </span>
            </h1>
        </div>
        <div className="flex justify-center pt-10">
            <div
                onClick={handleClick}
                className="bg-white flex justify-center items-center rounded-full h-36 w-36 sm:h-40 sm:w-40 md:h-48 md:w-48 p-4 shadow-lg transform transition-transform cursor-pointer duration-300 hover:scale-105"
            >
                <h1 className="text-red-500 text-2xl sm:text-3xl md:text-4xl font-bold">Start</h1>
            </div>
        </div>
    </div>
    
    )
}

export default Start