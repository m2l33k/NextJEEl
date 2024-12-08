import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import newsReducer from './slices/newsSlice';
import booksReducer from './slices/booksSlice';
import coursesReducer from './slices/coursesSlice';
import scholarshipsReducer from './slices/scholarshipsSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        news: newsReducer,
        books: booksReducer,
        courses: coursesReducer,
        scholarships: scholarshipsReducer,
    },
});

export default store;
