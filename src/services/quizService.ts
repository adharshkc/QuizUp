import axios from "axios"


export const quizService = {
    fetchQuiz: async()=>{
        const quiz = await axios.get('https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple&encode=base64')
        return quiz
    }
}