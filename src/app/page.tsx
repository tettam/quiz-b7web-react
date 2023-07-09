'use client'

import { useState } from "react";
import CardQuestion from "./components/CardQuestion";
import { questions } from "./data/questions";

const Home = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const title = 'Quiz de Culinária'
  
  return (
    <div className="bg-blue-600 h-screen flex text-center justify-center items-center text-black">
      <div className="w-full max-w-xl rounded-md bg-white">
        <div className="p-5 font-bold text-2xl border-gray-300">{title}</div>
        <div className="p-5">
          ...
        </div>
        <div className="p-5 text-center border-t ">
          {currentQuestion + 1} de {questions.length} pergunta{questions.length === 1 ? '' : 's'}
        </div>
      </div>
    </div>
  )
}
export default Home;