import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { RiFileTextLine } from 'react-icons/ri';

import { Badge, Title } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-auto">
      <Container className="mb-4">
        <Row className="mt-2 text-center">
          <Col className="d-flex flex-column text-pink">
            <div className="text-center">
              <AiOutlineHome size={30} />
            </div>
            <Title>Início</Title>
          </Col>
          <Col className="d-flex flex-column text-black">
            <div className="text-center position-relative">
              <RiFileTextLine size={30} />
              <Badge className="position-absolute top-1 start-60 translate-middle p-2 border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </Badge>
            </div>
            <Title>Contratos</Title>
          </Col>
          <Col className="d-flex flex-column text-black">
            <div className="text-center">
              <BiHelpCircle size={30} />
            </div>
            <Title>Dúvidas</Title>
          </Col>
          <Col className="d-flex flex-column text-black">
            <div className="text-center">
              <AiOutlineUser size={30} />
            </div>
            <Title>Conta</Title>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default memo(Footer);
