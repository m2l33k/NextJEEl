import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import booksService from '../../services/booksService';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const data = await booksService.getAll();
    return data;
});

const booksSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBooks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchBooks.fulfilled, (state, action) => {
                state.loading = false;
                state.books = action.payload;
            })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default booksSlice.reducer;
