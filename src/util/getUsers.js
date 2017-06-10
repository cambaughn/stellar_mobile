import { get } from './getPostMethods';

const getUsers = {};

getUsers.all = (callback) => {
  get('/users', callback);
}


export default getUsers;
