import React, { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, Nav } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [selected, isSelected] = useState(false);
  const handleFocus = useCallback(() => {
    isSelected(true);
  }, []);
  const handleBlur = useCallback(() => {
    isSelected(false);
  }, []);
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <Nav onFocus={handleFocus} isSelected={selected}>
          <Link to="/">Listagem</Link>
          <Link to="/import">Importar</Link>
        </Nav>
      </header>
    </Container>
  );
};

export default Header;
