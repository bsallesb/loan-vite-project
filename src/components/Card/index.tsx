import { memo } from 'react';

import { Col } from 'react-bootstrap';

import { CardImg, CardWrapper, Paragraph, Title } from './styles';

interface ICardProps {
  img: string;
  title: string;
  value?: string;
  className?: string;
  url?: string;
}

const Card: React.FC<ICardProps> = ({
  title,
  value,
  img,
  className,
  url = '',
}) => {
  return (
    <Col className="d-flex align-self-stretch">
      <CardWrapper
        to={url}
        className={`d-flex flex-column shadow w-100 text-decoration-none ${className}`}
      >
        <CardImg className="mb-2">
          <img src={img} alt="Novo emprestimo" className="img-fluid" />
        </CardImg>
        <Title className="mt-auto mb-1 text-black">{title}</Title>
        {value && (
          <Paragraph className="text-pink m-0">Ate R$ {value}</Paragraph>
        )}
      </CardWrapper>
    </Col>
  );
};

export default memo(Card);
