import Gauge from "./Guage"
import popper from "../assets/icons/popper.svg"
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { HashLoader } from "react-spinners"

const Result = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const { score, correctScore, incorrectScore } = location.state;
    console.log(incorrectScore)
    const scorePercent = (score / 5) * 100
    useEffect(()=>{
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    },[])
    const handleClick = () => {
        
        navigate('/')
    }

    if (loading) {
        return (
          <div className="h-screen flex justify-center items-center">
            <HashLoader size={90} color="#e50ef7" />
          </div>
        )
      }
    return (
        <div className="h-screen">
            <div className="flex justify-center">
                <img src={popper} alt="" />
            </div>
            <h1 className="text-5xl text-center my-10 font-nunito font-bold">Your Result</h1>
            <div className="flex justify-center">
                <Gauge percentage={scorePercent} />

            </div>
            <div className="flex justify-center mt-5">
                <div className=" text-center px-24 py-4 bg-green-200 rounded-lg shadow-lg">
                    <span className="text-lg font-semibold">{correctScore} correct</span>
                </div>
            </div>
            <div className="flex justify-center mt-1">
                <div className="bg-orange-200 text-center px-[88px] py-4 rounded-lg shadow-lg">
                    <span className="text-lg font-semibold">{incorrectScore} incorrect</span>
                </div>
            </div>
            <div>
                <button
                    onClick={handleClick}
                    className="bg-red-500 text-white mt-6 md:mt-10 font-semibold text-lg md:text-2xl px-6 md:px-8 py-2 md:py-4 w-full max-w-xs rounded-full hover:bg-red-600 transition duration-300 shadow-md"
                >
                    Start again
                </button>
            </div>
        </div>
    )
}

export default Result