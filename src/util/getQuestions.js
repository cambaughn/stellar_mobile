import { get } from './getPostMethods';

function getAllQuestions(callback) {
  get('/questions', callback);
}

export { getAllQuestions };
