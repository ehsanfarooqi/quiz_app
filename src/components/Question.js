import { useQuiz } from "../context/QuizContext";
import Options from "./Options";
function Question() {
  const { questions, index } = useQuiz();
  const question = questions.at(index);
  return (
    <div>
      <h3>{question.question}</h3>
      <Options question={question} />
    </div>
  );
}

export default Question;
