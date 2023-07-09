'use client'

import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from './components/QuestionItem';
import { Results } from "./components/Results";

const Home = () => {
  const [answerns, setAnswers] = useState<number[]>([])
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState<boolean>(false)
  const title = 'Quiz de Culinária'

  const loadNextQuestion = () => {
    if(questions[currentQuestion + 1]){
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers([...answerns, answer])
    loadNextQuestion()
  }

  const handleRestartButton = () => {
    setAnswers([])
    setCurrentQuestion(0)
    setShowResult(false)
  }
  
  return (
    <div className="bg-blue-600 h-screen flex text-center justify-center items-center text-black">
      <div className="w-full max-w-xl rounded-md bg-white">
        <div className="p-5 font-bold text-2xl border-gray-300">{title}</div>
        <div className="p-5">

        {!showResult &&
          <QuestionItem 
          question={questions[currentQuestion]} 
          count={currentQuestion + 1}
          onAnswer={handleAnswered}
          />
        }
        {showResult &&
          <Results questions={questions} answerns={answerns} />
        }
          
        </div>
        <div className="p-5 text-center border-t ">
          {!showResult && 
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={handleRestartButton} className="px-3 py-2 round-md bg-blue-800 text-white">Reiniciar Quiz</button>
          }
          
        </div>
      </div>
    </div>
  )
}
export default Home;