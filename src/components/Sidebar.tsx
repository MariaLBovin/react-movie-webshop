import { ChangeEvent } from "react";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { StyledInput } from "./styled/StyledInput";
import { IProductCategory } from "../models/IProductCategory";
import { StyledSelect } from "./styled/StyledSelect";
import { StyledForm } from "./styled/StyledForm";

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

  const inputCustomStyle: React.CSSProperties = {
    backgroundColor: "#fff",
    border: "1px solid #000",
    borderRadius: "5px",
    padding: "5px",
  };

  return (
    <>
      <StyledForm onSubmit={searchSubmit}>
        <StyledInput
          value={search}
          placeholder="Search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
          style={inputCustomStyle}
        />
      </StyledForm>
      <h2>Categories</h2>
      <StyledSelect onChange={getSelectedCategory}>
        <option value="">All</option>
        {categories.map((category: IProductCategory) => (
          <option key={category.categoryId} value={category.name}>
            {category.name}
          </option>
        ))}
      </StyledSelect>
    </>
  );
};
