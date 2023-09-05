import { ChangeEvent } from "react";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { StyledInput } from "./styled/StyledInput";
import { IProductCategory } from "../models/IProductCategory";

interface ISidebarProps {
  search: string;
  setSearch: (search: string) => void;
  searchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  filterByCategory: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const Sidebar = ({
  search,
  setSearch,
  searchSubmit,
  filterByCategory,
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
      {categories.map((category: IProductCategory) => (
        <div key={category.id} onClick={filterByCategory}>
          {category.name}
        </div>
      ))}
    </>
  );
};
