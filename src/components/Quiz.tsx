/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useMemo, SetStateAction } from "react"
import popper from "../assets/icons/popper.svg"
import ProgressCircle from "./ProgressCircle"
import { useNavigate, useParams } from "react-router-dom"
import useQuiz from "../hooks/useQuiz"
import { HashLoader } from "react-spinners"

const Quiz = () => {
  const navigate = useNavigate()
  const { loading, quizes } = useQuiz()
  const [userAnswers, setUserAnswers] = useState<any>({})
  const [selectedOption, setSelectedOption] = useState<number|null>()
  const { questionNumber } = useParams()
  const session = sessionStorage.getItem("userSession")



  const shuffleOptions = (right: string, wrong: string[]) => {
    return [...wrong, right].sort(() => Math.random() - 0.5)
  }

  // Default to an empty array to avoid conditional hook calls
  const safeQuizes = quizes || []
  const currentQuestionNumber = questionNumber ? parseInt(questionNumber) - 1 : 0

  // Use useMemo before any early returns
  const options = useMemo(() => {
    // Only shuffle if we have a valid question
    if (safeQuizes.length > 0 && currentQuestionNumber >= 0) {
      const question = safeQuizes[currentQuestionNumber]
      return shuffleOptions(question.correct_answer, question.incorrect_answers)
    }
    return []
  }, [safeQuizes, currentQuestionNumber])

  useEffect(() => {
    if (!session || session == "") {
      navigate('/')
    }
  }, [session, navigate])

  // Early returns at the end
  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <HashLoader size={90} color="#e50ef7" />
      </div>
    )
  }

  if (!questionNumber) return null

  const question = safeQuizes[currentQuestionNumber]

  const handleClick = (option: string, index: SetStateAction<number | null | undefined>) => {
    console.log(option, index)
    setSelectedOption(index)
    setUserAnswers((prev: any)=>({
      ...prev,[currentQuestionNumber]:option
    }))
  }
  const calculateResults = () => {
    let score = 0;
    let correctScore = 0;
    let incorrectScore = 0;
  
    quizes.forEach((question: { correct_answer: any }, index: string | number) => {
      if (userAnswers[index] === question.correct_answer) {
        correctScore +=1
        score += 1;
      }else{
        incorrectScore +=1
      }
    });
  
    return {score, correctScore, incorrectScore};
  };

  const handleNext = () => {
    if (currentQuestionNumber + 1 < safeQuizes.length) {
      setSelectedOption(null)
      navigate(`/quiz/${currentQuestionNumber + 2}`)
    } else {
      const {score, correctScore, incorrectScore} = calculateResults()
      navigate('/result', {state:{score, correctScore, incorrectScore}})
    }
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
          <h1 className=" text-3xl text-center font-nunito font-bold ">{atob(question.question)}</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-10 px-[32rem]">
        {options.map((option, index)=>
        <div key={index} onClick={()=>handleClick(option, index)}   className={` text-center px-8 py-4 cursor-pointer rounded-lg shadow-lg ${selectedOption === index ? 'bg-orange-100' : 'bg-white'}`}>
          <span className="text-lg font-semibold">{atob(option)}</span>
        </div>
        )}
      </div>
      <div>
        <button onClick={handleNext} className="bg-red-500 text-white mt-10 font-semibold text-2xl px-8 py-4 w-1/6 rounded-full hover:bg-red-600 transition duration-300 shadow-md">
          Next
        </button>
      </div>
    </div>
  )
}

export default Quiz


