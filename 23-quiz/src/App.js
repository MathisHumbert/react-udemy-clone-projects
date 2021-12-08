import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correctAnswers,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <SetupForm />;
  }

  if (loading) {
    return <Loading />;
  }

  const uniqueQuestion = questions[index];
  const randomAnswer = Math.floor(Math.random() * 3);
  const { question, correct_answer, incorrect_answers } = uniqueQuestion;
  const allAnswers = [...incorrect_answers];

  if (randomAnswer === 3) {
    allAnswers.push(correct_answer);
  } else {
    allAnswers.push(incorrect_answers[randomAnswer]);
    allAnswers[randomAnswer] = correct_answer;
  }

  return (
    <main>
      <Modal />
      <section className="quiz">
        <p className="correct-answers">
          correct answers: {correctAnswers}/{index}
        </p>
        <article className="container">
          <h2>{question}</h2>
          <div className="btn-container">
            {allAnswers.map((item, index) => {
              return (
                <button
                  key={index}
                  className="answer-btn"
                  onClick={checkAnswer}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </article>
        <button className="next-question" onClick={nextQuestion}>
          next-question
        </button>
      </section>
    </main>
  );
}

export default App;
