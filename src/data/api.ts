import { CANDIDATE_ANSWERS, SingleCandidateAnswers } from "./candidateAnswers";
import { Candidate, CANDIDATES } from "./candidates";
import { CATEGORIES, QUESTIONS } from "./questionsData";
import { CategoryWithQuestions, Question } from "./types";

const sortByPosition = (a: { position: number }, b: { position: number }) =>
  a.position - b.position;

export const getQuestions = () => QUESTIONS;

export const getAllQuestionsInOrder = (): Question[] => {
  const categoriesWithQuestion = getCategoriesWithQuestions();
  let questions: Question[] = [];
  categoriesWithQuestion.forEach((category: CategoryWithQuestions) => {
    // Calculate the position of the question in the whole list
    const categoryQuestions = category.questions.map((question) => ({
      ...question,
      position: category.position + question.position + 1,
    }));
    questions = questions.concat(...categoryQuestions);
  });

  return questions;
};

export const getOrderedQuestionsByCategoryId = (categoryId: number) => {
  const questions = QUESTIONS.filter((q) => q.categoryId === categoryId);
  return questions.sort(sortByPosition);
};

export const getQuestionById = (id: number) => QUESTIONS.find((q) => q.id === id);

export const getOrderedCategories = () => CATEGORIES.sort(sortByPosition);

export const getCategoryById = (id: number) => CATEGORIES.find((c) => c.id === id);

export const getCategoriesWithQuestions = (): CategoryWithQuestions[] =>
  CATEGORIES.map((category) => ({
    ...category,
    questions: getOrderedQuestionsByCategoryId(category.id),
  })).sort(sortByPosition);

export const getQuestionsTotalCount = () => QUESTIONS.length;

/**
 * Candidate data
 */

export const getAllCandidatesAnswers = () => CANDIDATE_ANSWERS;

export const getCandidatesAnswersById = (candidateId: string): SingleCandidateAnswers =>
  CANDIDATE_ANSWERS[candidateId];

export const getAllCandidates = () => CANDIDATES;

export const getCandidateById = (id: string): Candidate | undefined =>
  CANDIDATES.find((c) => c.id === id);
