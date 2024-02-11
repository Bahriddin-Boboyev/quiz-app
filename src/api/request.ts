import axios from 'axios';
import { shuffleArray } from '@/utils/shuffleArray';
import { Difficulty, Question } from '@/types';

export const fetchQuestions = async (amount: number, difficulty: Difficulty) => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const params = { amount, difficulty, category: 18, type: 'multiple' };
  const { data } = await axios.get(BASE_URL, { params });

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
  }));
};
