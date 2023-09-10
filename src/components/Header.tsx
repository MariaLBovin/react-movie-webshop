import { StyledImage } from './styled/StyledImage';
import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <>
      <StyledImage src={logo} alt='Logo' />
    </>
  );
};
