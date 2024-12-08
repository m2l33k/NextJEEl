import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import scholarshipsService from '../../services/scholarshipsService';

export const fetchScholarships = createAsyncThunk('scholarships/fetchScholarships', async () => {
    const data = await scholarshipsService.getAll();
    return data;
});

const scholarshipsSlice = createSlice({
    name: 'scholarships',
    initialState: {
        scholarships: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchScholarships.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchScholarships.fulfilled, (state, action) => {
                state.loading = false;
                state.scholarships = action.payload;
            })
            .addCase(fetchScholarships.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default scholarshipsSlice.reducer;
