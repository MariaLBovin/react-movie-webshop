import { MovieList } from "./MovieList";
import { StyledUL } from "./styled/StyledUL";
import { Sidebar } from "./Sidebar";
import { StyledMain, StyledMoviesWrapper } from "./styled/Wrappers";
import { IProductCategory } from "../models/IProductCategory";
import { useState, useContext } from "react";
import { IMovie } from "../models/IMovie";
import { MoviesContext } from "../context/MoviesContext";
import { StyledSidebar } from "./styled/StyledSidebar";

export const Home = () => {
  const { movies, categories } = useContext(MoviesContext);
  const [displayedMovies, setDisplayedMovies] = useState<IMovie[]>(movies);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchMovies(search);
  };

  const searchMovies = (search: string) => {
    const filteredMovies = movies.filter((movie) =>
      movie.name.toLowerCase().includes(search.toLowerCase())
    );
    setDisplayedMovies(filteredMovies);
  };

  const getSelectedCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = categories.find(
      (category) => category.name === e.currentTarget.value
    );
    if (selectedCategory) getFilteredMovies(selectedCategory);
    else setDisplayedMovies(movies);
  };

  const getFilteredMovies = (selectedCategory: IProductCategory) => {
    const filteredMovies = movies.filter((movie) => {
      return movie.productCategory.some(
        (category) => category.categoryId === selectedCategory.categoryId
      );
    });

    setDisplayedMovies(filteredMovies);
  };

  return (
    <>
      <StyledMain>
        <StyledSidebar>
          <Sidebar
            search={search}
            setSearch={setSearch}
            searchSubmit={handleSearch}
            getSelectedCategory={getSelectedCategory}
          />
        </StyledSidebar>
        <StyledMoviesWrapper>
          <StyledUL>
            {displayedMovies.map((movie) => (
              <MovieList movie={movie} key={movie.id}></MovieList>
            ))}
          </StyledUL>
        </StyledMoviesWrapper>
      </StyledMain>
    </>
  );
};
