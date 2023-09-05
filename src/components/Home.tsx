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
  const [categories, setCategories] = useLocalStorage<IProductCategory[]>(
    "categories",
    []
  );
  const [selectedCategory, setSelectedCategory] =
    useState<IProductCategory | null>(null);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(search);
  };

  const filterByCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const category = categories.find(
      (category) => category.name === e.currentTarget.innerText
    );

    if (category) setSelectedCategory(category);
    console.log(selectedCategory);
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
            filterByCategory={filterByCategory}
          />
        </StyledSidebarWrapper>
        <StyledMoviesWrapper>
          <StyledUL>
            {movies.map((movie) => (
              <MovieList movie={movie} key={movie.id}></MovieList>
            ))}
          </StyledUL>
        </StyledMoviesWrapper>
      </StyledMain>
      <h2>categories</h2>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </>
  );
};
