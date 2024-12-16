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

  const safeQuizes = quizes || []
  const currentQuestionNumber = questionNumber ? parseInt(questionNumber) - 1 : 0

  const options = useMemo(() => {
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
    <div className="h-screen px-4 md:px-8 lg:px-16">
  <div className="flex justify-center">
    <img src={popper} alt="" className="w-3/4 md:w-1/2 lg:w-1/3" />
  </div>
  <div className="flex mb-3 justify-center">
    <ProgressCircle currentStep={parseInt(questionNumber)} totalSteps={5} />
  </div>
  <div className="flex justify-center">
    <div className="bg-white w-full max-w-4xl p-4 md:p-8 lg:p-16">
      <h1 className="text-lg md:text-2xl lg:text-3xl text-center font-nunito font-bold">
        {atob(question.question)}
      </h1>
    </div>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-10 px-4 md:px-20 lg:px-32">
    {options.map((option, index) => (
      <div
        key={index}
        onClick={() => handleClick(option, index)}
        className={`text-center px-4 md:px-8 py-2 md:py-4 cursor-pointer rounded-lg shadow-lg ${
          selectedOption === index ? 'bg-orange-100' : 'bg-white'
        }`}
      >
        <span className="text-sm md:text-lg font-semibold">{atob(option)}</span>
      </div>
    ))}
  </div>
  <div className="flex justify-center">
    <button
      onClick={handleNext}
      className="bg-red-500 text-white mt-6 md:mt-10 font-semibold text-lg md:text-2xl px-6 md:px-8 py-2 md:py-4 w-full max-w-xs rounded-full hover:bg-red-600 transition duration-300 shadow-md"
    >
      Next
    </button>
  </div>
</div>

  )
}

export default Quiz


