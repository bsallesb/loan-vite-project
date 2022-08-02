import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Badge = styled.span`
  background-color: var(--color-pink);
`;

export const LinkTo = styled(Link)`
  :hover {
    color: var(--color-pink);
  }
`;
