import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  });

  const fetchData = async (url) => {
    setWaiting(true);
    try {
      const response = await axios(url);
      setQuestions(response.data.results);
      setWaiting(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setWaiting(true);
    }
  };

  const nextQuestion = () => {
    setIndex((oldValues) => {
      let newValue = oldValues + 1;
      if (newValue === questions.length) {
        newValue = 0;
        setIsModalOpen(true);
      }
      return newValue;
    });
  };

  const checkAnswer = (e) => {
    if (e.target.textContent === questions[index].correct_answer) {
      setCorrectAnswers((oldValues) => oldValues + 1);
    }
    nextQuestion();
  };

  const resetGame = () => {
    setWaiting(true);
    setLoading(true);
    setIsModalOpen(false);
    setCorrectAnswers(0);
  };

  const handleQuizChange = (e) => {
    const value = e.target.value;
    const label = e.target.name;
    setQuiz((oldValues) => {
      return { ...oldValues, [label]: value };
    });
  };

  const handleSubmit = () => {
    fetchData(
      `${API_ENDPOINT}amount=${quiz.amount}&category=${
        table[quiz.category]
      }&difficulty=${quiz.difficulty}&type=multiple`
    );
  };

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        questions,
        index,
        correctAnswers,
        nextQuestion,
        checkAnswer,
        isModalOpen,
        resetGame,
        quiz,
        handleQuizChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
