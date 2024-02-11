export type Question = {
  answers: string[];
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

export type AnswerStateProps = {
  answer: string;
  timer: number;
  isCorrectAnswer: boolean;
  userAnswer: string;
  questions: Question[];
  currentNumber: number;
};

export type AnswerStateStyle = 'correctStyle' | 'incorrectStyle' | 'defaultStyle';
