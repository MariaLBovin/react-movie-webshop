import { ChangeEvent, useState } from "react";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { StyledInput } from "./styled/StyledInput";
import { IProductCategory } from "../models/IProductCategory";

export const Sidebar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Waiting for dispatch to be implemented
    console.log(search);
  };

  const categories = JSON.parse(
    localStorage.getItem("categories") || "[]"
  ) as IProductCategory[];

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledInput
          value={search}
          placeholder="Search"
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
          }}
        ></StyledInput>
        <StyledButtonSecondary>Search</StyledButtonSecondary>
      </form>
      <h2>Categories</h2>
      {categories.map((category: IProductCategory) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </>
  );
};
