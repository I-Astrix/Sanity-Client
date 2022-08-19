import { configureStore, combineReducers } from '@reduxjs/toolkit';
import catReducer from './features/cats/catSlice';
import postReducer from './features/posts/postSlice';
import otherPostsReducer from './features/posts/otherPostsSlice';
import saveReducer from './features/bookmarks/saveSlice';

const rootReducers = combineReducers({
    posts: postReducer,
    cats: catReducer,
    otherPosts: otherPostsReducer,
    save: saveReducer
})


export const store = configureStore({
    reducer: rootReducers
})