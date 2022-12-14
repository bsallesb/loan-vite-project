import { memo } from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { FiBell } from 'react-icons/fi';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { MdArrowBackIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Logo from 'assets/tudo-logo-2.png';

import {
  ArrowDown,
  BackgroundHeader,
  LogoWrapper,
  UserWrapper,
} from './styles';

interface IHeaderProps {
  title?: string;
  home?: boolean;
  clientName?: string;
  clientCredit?: string;
  url?: string;
}

const Header: React.FC<IHeaderProps> = ({
  home = false,
  title,
  clientName,
  clientCredit,
  url = '',
}) => {
  return (
    <BackgroundHeader className="mb-5">
      <Container className="py-4">
        {home ? (
          <>
            <div className="d-flex justify-content-between mx-2 mx-sm-0">
              <LogoWrapper>
                <img src={Logo} alt="Logo Meu tudo" className="img-fluid" />
              </LogoWrapper>
              <div className="d-flex align-items-center">
                <FiBell color="white" size={20} />
              </div>
            </div>
            <UserWrapper className="text-center mt-3 mt-sm-0">
              <h2 className="text-white mb-3 fs-2">Olá, {clientName}</h2>
              <p className="text-white m-0 fs-5">Seu crédito disponível é de</p>
              <strong className="text-pink fs-1">{clientCredit}</strong>
            </UserWrapper>
            <ArrowDown className="text-center text-pink">
              <IoIosArrowDropdownCircle size={45} />
            </ArrowDown>
          </>
        ) : (
          <Row className="my-2">
            <Col className="col-4 text-start">
              <Link to={url}>
                <MdArrowBackIos size={20} color="white" />
              </Link>
            </Col>
            <Col className="col-4 text-center">
              <span className="text-white fs-3">{title}</span>
            </Col>
          </Row>
        )}
      </Container>
    </BackgroundHeader>
  );
};

export default memo(Header);
