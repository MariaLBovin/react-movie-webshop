import { ChangeEvent, useState } from "react";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { StyledInput } from "./styled/StyledInput";

export const Sidebar = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setSearch(e.target.value);
        }}
      ></StyledInput>
      <StyledButtonSecondary>Search</StyledButtonSecondary>
    </form>
  );
};
