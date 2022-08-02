import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { useLoan } from 'context/Loan';

import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingGate from 'components/LoadingGate';
import LoadingSimulation from 'components/LoadingSimulation';
import LoanResult from 'components/LoanResult';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';

const Periods: React.FC = () => {
  const { getSimulation, isLoading } = useLoan();

  useEffect(() => {
    getSimulation();
  }, [getSimulation]);

  return (
    <Wrapper>
      <Header title="Opções" url="/periodos" />
      <Container>
        <LoadingGate
          waitFor={isLoading === false}
          meanWile={<LoadingSimulation />}
        >
          <Row className="justify-content-center">
            <Col className="col col-lg-8 col-xl-7 col-xxl-6">
              <Section title="Escolha um banco.">
                <LoanResult />
              </Section>
            </Col>
          </Row>
        </LoadingGate>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default memo(Periods);
