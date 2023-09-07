import { ChangeEvent } from "react";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { StyledInput } from "./styled/StyledInput";
import { IProductCategory } from "../models/IProductCategory";

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
    localStorage.getItem("categories") || "[]"
  ) as IProductCategory[];

  return (
    <>
      <form onSubmit={searchSubmit}>
        <StyledInput
          value={search}
          placeholder="Search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        />
        <StyledButtonSecondary>Search</StyledButtonSecondary>
      </form>
      <h2>Categories</h2>
      <select onChange={getSelectedCategory}>
        <option value="">All</option>
        {categories.map((category: IProductCategory) => (
          <option key={category.categoryId} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
};
