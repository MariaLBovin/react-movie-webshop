import { ChangeEvent, useContext } from 'react';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { StyledInput } from './styled/StyledInput';
import { StyledSelect } from './styled/StyledSelect';
import { MoviesContext } from '../context/MoviesContext';

interface ISidebarProps {
  search: string;
  setSearch: (search: string) => void;
  searchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  getSelectedCategory: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Sidebar = ({
  search,
  setSearch,
  searchSubmit,
  getSelectedCategory,
}: ISidebarProps) => {
  const { categories } = useContext(MoviesContext);

  return (
    <>
      <form onSubmit={searchSubmit}>
        <StyledInput
          value={search}
          placeholder='Search'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
        <StyledButtonSecondary>Search</StyledButtonSecondary>
      </form>
      <h2>Categories</h2>
      <StyledSelect onChange={getSelectedCategory}>
        <option value=''>All</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};
