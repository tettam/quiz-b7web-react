'use client'

import { useState } from "react";
import { questions } from "./data/questions";
import { QuestionItem } from './components/QuestionItem';

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'Quiz de Culinária'

  const handleAnswered = (answer: number) => {
    console.log(answer);
  }
  
  return (
    <div className="bg-blue-600 h-screen flex text-center justify-center items-center text-black">
      <div className="w-full max-w-xl rounded-md bg-white">
        <div className="p-5 font-bold text-2xl border-gray-300">{title}</div>
        <div className="p-5">
          <QuestionItem 
            question={questions[currentQuestion]} 
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
            />
        </div>
        <div className="p-5 text-center border-t ">
          {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? '' : 's'}
        </div>
      </div>
    </div>
  )
}
export default Home;