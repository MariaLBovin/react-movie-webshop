import { useCategorydata } from "../hooks/useCategoryData";
import { useMovieData } from "../hooks/useMovieData";
import { useLocalStorage } from "../hooks/useStorage";
import { IMovie } from "../models/IMovie";
import { MovieList } from "./MovieList";
import { StyledUL } from "./styled/StyledUL";
import {
  StyledMain,
  StyledMoviesWrapper,
  StyledSidebarWrapper,
} from "./styled/Wrappers";
import { IProductCategory } from "../models/IProductCategory";
import { getCategoriesData, getMoviesData } from "../services/DataService";
import { Sidebar } from "./Sidebar";
import { useState } from "react";

export const Home = () => {
  const [movies, setMovies] = useLocalStorage<IMovie[]>("movies", []);
  const [displayedMovies, setDisplayedMovies] = useState<IMovie[]>(movies);
  const [categories, setCategories] = useLocalStorage<IProductCategory[]>(
    "categories",
    []
  );
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

  const getSelectedCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const selectedCategory = categories.find(
      (category) => category.name === e.currentTarget.innerText
    );
    if (selectedCategory) getFilteredMovies(selectedCategory);
    else setDisplayedMovies(movies);
  };

  const getFilteredMovies = (selectedCategory: IProductCategory) => {
    const filteredMovies = movies.filter((movie) =>
      movie.productCategory.some(
        (category) => category.categoryId === selectedCategory.id
      )
    );
    setDisplayedMovies(filteredMovies);
  };

  const getData = async () => {
    const movieList = await getMoviesData();
    const categoriesList = await getCategoriesData();
    setMovies(movieList);
    setCategories(categoriesList);
  };

  useMovieData(movies, getData);
  useCategorydata(categories, getData);

  return (
    <>
      <StyledMain>
        <StyledSidebarWrapper>
          <Sidebar
            search={search}
            setSearch={setSearch}
            searchSubmit={handleSearch}
            getSelectedCategory={getSelectedCategory}
          />
        </StyledSidebarWrapper>
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
