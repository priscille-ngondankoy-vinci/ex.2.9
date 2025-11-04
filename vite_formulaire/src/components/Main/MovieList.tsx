import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
type Movie = {
    id: number,
    title: string,
    director: string,
    duration: string,
    link?: string,
    description?: string,
    budget?: string


}
interface MovieListProps {
  movies: Movie[];
}
const MovieList = ({ movies }: MovieListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Movie</TableCell>
            <TableCell>Director</TableCell>
            <TableCell>Duration</TableCell>
            <TableCell>Link</TableCell>
            <TableCell>Budget</TableCell>
            <TableCell>Description</TableCell>
        
          

          </TableRow>
        </TableHead>
        <TableBody>
           {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.director}</TableCell>
              <TableCell>{movie.duration}</TableCell>
              <TableCell>{movie.link}</TableCell>
              <TableCell>{movie.budget}</TableCell>
              <TableCell>{movie.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    
       
)};

export default MovieList;