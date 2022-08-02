import { memo } from 'react';

import { Container } from 'react-bootstrap';

import { Title } from './styles';

interface ISectionProps {
  title: string;
  children?: React.ReactNode;
}

const Section: React.FC<ISectionProps> = ({ title, children }) => {
  return (
    <section>
      <div className="mb-5 mx-2 mx-sm-0">
        <Title className="m-0">{title}</Title>
      </div>
      {children}
    </section>
  );
};

export default memo(Section);
