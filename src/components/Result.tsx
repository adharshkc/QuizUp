import Gauge from "./Guage"
import popper from "../assets/icons/popper.svg"

const Result = () => {
    return (
        <div className="h-screen">
            <div className="flex justify-center">
                <img src={popper} alt="" />
            </div>
            <h1 className="text-5xl text-center my-10 font-nunito font-bold">Your Result</h1>
            <div className="flex justify-center">
                <Gauge percentage={30} />

            </div>
            <div className="flex justify-center mt-5">
                <div className="bg-white text-center px-24 py-4 rounded-lg shadow-lg">
                    <span className="text-lg font-semibold">Option 1</span>
                </div>
            </div>
            <div className="flex justify-center mt-1">
                <div className="bg-white text-center px-24 py-4 rounded-lg shadow-lg">
                    <span className="text-lg font-semibold">Option 1</span>
                </div>
            </div>
            <div>
                <button className="bg-red-500 text-white mt-10 font-semibold text-2xl px-8 py-4 w-1/6 rounded-full hover:bg-red-600 transition duration-300 shadow-md">
                    Start Again
                </button>
            </div>
        </div>
    )
}

export default Result