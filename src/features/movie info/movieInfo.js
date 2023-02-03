import {createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  api_key: '7a917a90',
  movies: [],
  name: 'alone',
  plot: 'full',
  page: 1, 
  totalMovies: 0,
};

export const movieSlice = createSlice({
  name: 'movieInfo',
  initialState,
  reducers: {
    movieNameFn: (state, action) => {
      state.name = action.payload;
    },
    moviesFn: (state, action) => {
        state.movies = action.payload;
    },
    pageFn: (state, action) => {
      state.page = action.payload;
    },
    idFn: (state, action) => {
      state.id = action.payload;
    },
    plotFn: (state, action) => {
      state.plot = action.payload;
    },
    totalMoviesFn: (state, action) => {
      state.totalMovies = action.payload;
    }
  }
});

export const { movieNameFn, moviesFn, pageFn, totalMoviesFn, plotFn, idFn } = movieSlice.actions;

export const selectValues = (state) => state.movieInfo;

export default movieSlice.reducer;
