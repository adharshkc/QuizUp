
import { useEffect, useState } from "react";
import { quizService } from "../services/quizService";

const useQuiz = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [quiz, setQuiz] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>("");

  const fetchQuiz = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await quizService.fetchQuiz();
      setQuiz(response);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuiz();
  }, []);
  return { loading, quiz, error };
};

export default useQuiz;
