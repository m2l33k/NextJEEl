import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import coursesService from '../../services/coursesService';

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
    const data = await coursesService.getAll();
    return data;
});

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.loading = false;
                state.courses = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default coursesSlice.reducer;
