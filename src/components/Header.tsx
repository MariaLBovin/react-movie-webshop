import { StyledImage } from "./styled/StyledImage";
import logo from '../assets/logo.png'
import { StyledSpan } from "./styled/StyledSpan";

export const Header = () => {
  return <>
    <StyledImage src={logo}></StyledImage>
    <StyledSpan className='material-symbols-outlined'>shopping_cart</StyledSpan>
    {/* <span className="material-symbols-outlined">
    shopping_cart
    </span> */}
  
  </>;
};
