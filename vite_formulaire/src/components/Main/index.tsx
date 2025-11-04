import { useState } from "react";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { Box, Container } from "@mui/material";

type Movie = {
    id: number,
    title: string,
    director: string,
    duration: string,
    link?: string,
    description?: string,
    budget?: string


}
type NewMovie = Omit<Movie, "id">;

const defaultMovies: Movie[] = [
  {
    id: 1,
    title: "Karaté Kid",
    director: "Roman Polanski",
    duration: "105",
    


  },
  {
    id: 2,
    title: "Black Swan",
    director: "Vincent Cassel",
    duration: "95"
  },
  {
    id: 3,
    title: "Shrek",
    director: "Luc Besson",
    duration: "110"
  },
  {
    id: 4,
    title: "Rapide",
    director: "Paola Locatelli",
    duration: "97"
  },
  {
    id: 5,
    title: "Taken",
    director: "Liam Neeson",
    duration: "78"
  }
];

const Main = () => {

  const [movies, setMovies] = useState(defaultMovies);


  const addMovie = (newmovie:NewMovie) => {   
    const movieAdded = { ...newmovie, id: nextMovieId(movies) };
    setMovies([...movies, movieAdded]);
  };


  return (
    <main>
      <p>My HomePage</p>
      <p>
        Because we love JS, you can also click on the header to stop / start the
        music ; )
      </p>
      <Container maxWidth="sm" />
      <MovieList movies={movies} />

      <Box>
        <br />
        <AddMovie addMovie={addMovie}  />
      </Box>

      
    </main>
  );
};

const nextMovieId = (movies: Movie[]) => {
  return movies.reduce((maxId, movie) => Math.max(maxId, movie.id), 0) + 1;
};

export default Main;