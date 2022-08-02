import { memo, MouseEventHandler } from 'react';

import { Col } from 'react-bootstrap';

import { PillWrapper, Title } from './styles';

interface IPillProps {
  value?: string;
  months?: number;
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Pill: React.FC<IPillProps> = ({ value, months, className, onClick }) => {
  return (
    <Col className="d-flex align-self-stretch">
      <PillWrapper
        className={`shadow w-100 border-0 ${className}`}
        onClick={onClick}
      >
        {value && <Title className="mt-auto mb-1 text-black">{value}</Title>}
        {months && (
          <Title className="mt-auto mb-1 text-black">{months} meses</Title>
        )}
      </PillWrapper>
    </Col>
  );
};

export default memo(Pill);
