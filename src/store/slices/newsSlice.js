import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import newsService from '../../services/newsService';

export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    const data = await newsService.getAll();
    return data;
});

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.loading = false;
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default newsSlice.reducer;
