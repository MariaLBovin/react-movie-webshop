import { ChangeEvent } from "react";
import { StyledInput } from "./styled/StyledInput";
import { IProductCategory } from "../models/IProductCategory";
import { StyledSelect } from "./styled/StyledSelect";
import { StyledForm } from "./styled/StyledForm";
import { StyledH2 } from "./styled/StyledH2";
import { StyledSearchInput } from "./styled/StyledSearchInput";

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
  const categories = JSON.parse(
    localStorage.getItem('categories') || '[]'
  ) as IProductCategory[];

  return (
    <>
      <StyledForm onSubmit={searchSubmit}>
        <StyledSearchInput
          value={search}
          placeholder='Search'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
      </StyledForm>
      <StyledH2>Categories</StyledH2>
      <StyledSelect onChange={getSelectedCategory}>
        <option value=''>All</option>
        {categories.map((category: IProductCategory) => (
          <option key={category.categoryId} value={category.name}>
            {category.name}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};
