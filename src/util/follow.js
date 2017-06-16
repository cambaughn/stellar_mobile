import { post } from './getPostMethods';


const follow = (followerId, followingId, callback) => {
  let followObj = { followerId, followingId };
  post('/followers/new', followObj, callback);
}


export { follow };
