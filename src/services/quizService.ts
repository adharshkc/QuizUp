import axios from "axios"


export const quizService = {
    fetchQuiz: async()=>{
        const quiz = await axios.get(import.meta.env.VITE_quiz_api)
        return quiz
    }
}