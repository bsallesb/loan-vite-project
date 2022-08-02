import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { RiFileTextLine } from 'react-icons/ri';

import { Badge, LinkTo } from './styles';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-auto">
      <Container className="mb-4">
        <Row className="mt-2 text-center">
          <Col className="d-flex flex-column text-pink">
            <LinkTo to="/" className="text-decoration-none">
              <div className="text-center">
                <AiOutlineHome size={30} />
              </div>
              <span className="fs-8">Início</span>
            </LinkTo>
          </Col>
          <Col className="d-flex flex-column text-black">
            <LinkTo to="" className="text-decoration-none">
              <div className="text-center position-relative">
                <RiFileTextLine size={30} />
                <Badge className="position-absolute top-1 start-60 translate-middle p-2 border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </Badge>
              </div>
              <span className="fs-8">Contratos</span>
            </LinkTo>
          </Col>
          <Col className="d-flex flex-column text-black">
            <LinkTo to="" className="text-decoration-none">
              <div className="text-center">
                <BiHelpCircle size={30} />
              </div>
              <span className="fs-8">Dúvidas</span>
            </LinkTo>
          </Col>
          <Col className="d-flex flex-column text-black">
            <LinkTo to="" className="text-decoration-none">
              <div className="text-center">
                <AiOutlineUser size={30} />
              </div>
              <span className="fs-8">Conta</span>
            </LinkTo>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default memo(Footer);
