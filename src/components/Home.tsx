import { MovieList } from './MovieList';
import { StyledUL } from './styled/StyledUL';
import { Sidebar } from './Sidebar';
import { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';
import {
  StyledMain,
  StyledMoviesWrapper,
  StyledSidebarWrapper,
} from './styled/Wrappers';

export const Home = () => {
  const { movies, categories } = useContext(MoviesContext);

  return (
    <>
      <StyledMain>
        <StyledSidebarWrapper>
          <Sidebar />
        </StyledSidebarWrapper>
        <StyledMoviesWrapper>
          <StyledUL>
            {movies.map((movie) => (
              <MovieList movie={movie} key={movie.id} />
            ))}
          </StyledUL>
        </StyledMoviesWrapper>
      </StyledMain>
      
    </>
  );
};
