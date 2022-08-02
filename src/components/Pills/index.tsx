import { memo } from 'react';

import { Row } from 'react-bootstrap';

interface IPillsProps {
  children?: React.ReactNode;
}

const Pills: React.FC<IPillsProps> = ({ children }) => {
  return <Row className="row-cols-2 g-3 mb-5">{children}</Row>;
};

export default memo(Pills);
