import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Movie_URL = "https://www.omdbapi.com/?s=marvel&apikey=";

const initialState = {
  entities: [],
  loading: false,
  error: null,
};

export const Movies = createAsyncThunk("movies/fetchMovies", async () => {
  const res = await axios.get(Movie_URL);
  return res.data.Search;
});

// export const movieDetails = createAsyncThunk(
//   "detail/detailMovies",
//   async (movieId) => {
//     const res = await axios.get(
//       `https://www.omdbapi.com/?i=${movieId}&apikey=68e1bba8`
//     );
//     return res.data;
//   }
// );

// export const moviesSearch = createAsyncThunk(
//   "seacrh/searchMovies",
//   async (search) => {
//     const res = await axios.get(
//       `https://www.omdbapi.com/?t=${search}&apikey=68e1bba8`
//     );
//     return res.data;
//   }
// );

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Movies
      .addCase(Movies.pending, (state) => {
        state.loading = true;
      })
      .addCase(Movies.fulfilled, (state, action) => {
        state.loading = false;
        state.entities = action.payload;
      })
      .addCase(Movies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // // Movie Detail
    // .addCase(movieDetails.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(movieDetails.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.detail = action.payload.Search;
    // })
    // .addCase(movieDetails.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // })
    // Movie Search
    // .addCase(moviesSearch.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(moviesSearch.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.search = action.payload;
    // })
    // .addCase(moviesSearch.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export default movieSlice.reducer;
