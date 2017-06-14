import { get } from './getPostMethods';

function getAllQuestions(callback) {
  get('/questions', callback);
}

function getQuestionsByUserId(userId, callback) {
  console.log('USER ID => ', userId)
  get(`/questions/${userId}`, callback);
}

export { getAllQuestions, getQuestionsByUserId };
