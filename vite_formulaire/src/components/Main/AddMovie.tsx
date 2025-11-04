import { useState,  type SyntheticEvent } from "react";
import { Box, TextFlied, Button } from "@mui/material";

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
interface AddMovieProps {
  addMovie: (movie: NewMovie) => void;
}

const AddMovie = ({ addMovie }: AddMovieProps) => {
  const [movie, setMovie] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState("");
  const [link, setLink] = useState(" ");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");





  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    addMovie({ title: movie, director: director, duration: duration, link: link, description: description, budget: budget});
  };

  const handleMovieChange = (e: SyntheticEvent) => {
    const movieInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", movieInput.value);
    setMovie(movieInput.value);
  };
   const handleDirectorChange = (e: SyntheticEvent) => {
    const directorInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", directorInput.value);
    setDirector(directorInput.value);
  };
  const handleDurationChange = (e: SyntheticEvent) => {
    const durationInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", durationInput.value);
    setDuration(durationInput.value);
  };
  const handleLinkChange = (e: SyntheticEvent) => {
    const linkInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", linkInput.value);
    setLink(linkInput.value);
  };
   const handleBudgetChange = (e: SyntheticEvent) => {
    const budgetInput = e.target as HTMLInputElement;
    console.log("change in pizzaInput:", budgetInput.value);
    setBudget(budgetInput.value);
  };


  const handleDescriptionChange = (e: SyntheticEvent) => {
    const descriptionInput = e.target as HTMLInputElement;
    console.log("change in descriptionInput:", descriptionInput.value);
    setDescription(descriptionInput.value);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <label htmlFor="movie">Movie</label>
        <input
          value={movie}
          type="text"
          id="movie"
          name="movie"
          onChange={handleMovieChange}
          required
        />
        <label htmlFor="movie">Director</label>
        <input
          value={director}
          type="text"
          id="movie"
          name="movie"
          onChange={handleDirectorChange}
          required
        />
        <label htmlFor="movie">Duration</label>
        <input
          value={duration}
          type="text"
          id="movie"
          name="movie"
          onChange={handleDurationChange}
          required
        />
        <label htmlFor="movie">Link</label>
        <input
          value={link}
          type="text"
          id="movie"
          name="movie"
          onChange={handleLinkChange}
          
        />
        <label htmlFor="movie">Budget</label>
        <input
          value={budget}
          type="text"
          id="movie"
          name="movie"
          onChange={handleBudgetChange}
          
        />

        <TextField htmlFor="description">Description</TextField>
        <input
          value={description}
          type="text"
          id="description"
          name="description"
          onChange={handleDescriptionChange}
          
        />
        <Button type="submit">Ajouter</Button>
      </form>
    </Box>
  );
};

export default AddMovie;