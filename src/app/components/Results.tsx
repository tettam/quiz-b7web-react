import { Question } from "../types/Question";

type Props = {
  questions: Question[];
  answerns: number[]
}

export const Results = ({questions, answerns}: Props) => {
  return(
    <div>
      {questions.map((item, key) => (
        <div key={key} className="mb-3">
          <div className="font-bold">
            {key = 1}. {item.question}
          </div>
          <div>
            <span>{item.answer === answerns[key] ? 'Acerto' : 'Errou -'}</span>
            {item.options[item.answer]}
          </div>
        </div>
      ))}
    </div>
  )
}