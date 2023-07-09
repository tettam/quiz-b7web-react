import { questions } from "../data/questions";
import CardQuestionOption from "./CardQuestionOption";

const CardQuestion = () => {
  return (
    <div className="bg-white">
      <h3>{questions.question}</h3>
      <div>
        {questions.options.map((item , index) => (
          <CardQuestionOption item={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default CardQuestion;