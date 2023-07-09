import { useState } from "react";
import { Question } from "../types/Question";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
}



export const QuestionItem = ({question, count, onAnswer}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>();


  const checkQuestion = (key: number) => {
    setSelectedAnswer(key);
    onAnswer(key)
  }

  return (
    <div>
      <div className="text-3xl font-bold mb-5">{count}. {question.question}</div>
      <div>
        {question.options.map((item, key) => (
          <div 
          className={`border px-3 py-2 rounded-md text-lg mb-4  bg-blue-100 cursor-pointer 
          ${selectedAnswer !== null && selectedAnswer === question.answer && selectedAnswer === key && 'bg-green-100'}
          ${selectedAnswer !== null && selectedAnswer !== question.answer && selectedAnswer === key && 'bg-red-100'}

          `}

            key={key} onClick={() => checkQuestion(key)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}
