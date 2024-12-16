import { useEffect } from "react"
import popper from "../assets/icons/popper.svg"
import ProgressCircle from "./ProgressCircle"
import { useNavigate } from "react-router-dom"
import useQuiz from "../hooks/useQuiz"
import { HashLoader } from "react-spinners"


const Quiz = () => {
  const navigate = useNavigate()
  const session = sessionStorage.getItem("userSession")
  console.log(session)
  const { loading, quiz, error } = useQuiz()

  useEffect(() => {
    if (!session || session == "") {
      navigate('/')
    }
  }, [session])
  // const [open, setOpen] = useState(true)
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
      <div className="flex mb-3 justify-center">
        <ProgressCircle currentStep={5} totalSteps={10} />
      </div>
      <div className="flex justify-center">

        <div className="bg-white w-4/6 p-16 max-w-4xl">
          <h1 className=" text-3xl text-center font-nunito font-bold ">How do you judge what should be added in the next version of the app?</h1>
        </div>
      </div>
      {/* <div className="flex justify-center"> */}
      <div className="grid grid-cols-2 gap-6 mt-10 px-[32rem]">
        <div className="bg-white text-center px-8 py-4 rounded-lg shadow-lg">
          <span className="text-lg font-semibold">Option 1</span>
        </div>
        <div className="bg-white text-center px-8 py-4 rounded-lg shadow-lg">
          <span className="text-lg font-semibold">Option 1</span>
        </div>
        <div className="bg-white text-center px-8 py-4 rounded-lg shadow-lg">
          <span className="text-lg font-semibold">Option 1</span>
        </div>
        <div className="bg-white text-center px-8 py-4 rounded-lg shadow-lg">
          <span className="text-lg font-semibold">Option 1</span>
        </div>
        {/* </div> */}
      </div>
      <div>
        <button className="bg-red-500 text-white mt-10 font-semibold text-2xl px-8 py-4 w-1/6 rounded-full hover:bg-red-600 transition duration-300 shadow-md">
          Next
        </button>
      </div>
    </div>
  )
}

export default Quiz


