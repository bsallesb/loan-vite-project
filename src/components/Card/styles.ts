import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardWrapper = styled(Link)`
  background-color: var(--color-white);
  border-radius: 30px;
  padding: 30px;
  height: 180px;
  width: 200px;
`;

export const CardImg = styled.div`
  max-width: 50px;
`;

export const Title = styled.h2`
  @media (max-width: 400px) {
    font-size: 1rem !important;
  }

  @media (min-width: 400px) {
    font-size: 1.6rem !important;
  }
`;

export const Paragraph = styled.p`
  @media (max-width: 400px) {
    font-size: 1rem !important;
  }

  @media (min-width: 400px) {
    font-size: 1.2rem !important;
  }
`;
