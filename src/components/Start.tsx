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
        <div className="h-screen ">
            <div className="flex justify-center pt-10">
                <img src={logo} width={300} alt="logo" />
            </div>
            <div className="text-black pt-28">
                <h1 className="text-[50px] font-bold"><span className="bg-gradient-to-r from-[#f5a663] to-[#f27310] bg-clip-text text-transparent">
                    Test Your</span>
                    <span className="text-black "> Knowledge, </span><br />  Challenge
                    <span className="ml-4">  </span>
                    <span className="bg-gradient-to-r from-[#f5a663] to-[#f27310] bg-clip-text text-transparent" >Your Mind
                    </span>
                </h1>
            </div>
            <div className="flex justify-center pt-10">
                <div onClick={handleClick} className="bg-white flex justify-center items-center rounded-full h-48 w-48 p-10 shadow-lg transform transition-transform cursor-pointer duration-300 hover:scale-105">
                    <h1 className="text-red-500 text-4xl font-bold">Start</h1>
                </div>
            </div>
        </div>
    )
}

export default Start