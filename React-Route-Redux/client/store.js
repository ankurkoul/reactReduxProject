import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import ReduxThunk from 'redux-thunk';


import posts from './data/posts';
import comments from './data/comments';
//enhanced literal when key and value are same
//var defaultStoreData = {
//   posts, comments

//}
//var store = createStore(rootReducer, defaultStoreData);
var store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;