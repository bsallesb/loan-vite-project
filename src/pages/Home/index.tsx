import { memo, useEffect } from 'react';

import { Col, Container, Row } from 'react-bootstrap';

import { useLoan } from 'context/Loan';

import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingCards from 'components/LoadingCards';
import LoadingGate from 'components/LoadingGate';
import OpportunityCards from 'components/OpportunityCards';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';

import { formatCurrency } from 'helpers';

const Home: React.FC = () => {
  const { getOpportunities, isLoading } = useLoan();

  useEffect(() => {
    getOpportunities();
  }, [getOpportunities]);

  return (
    <Wrapper>
      <Header
        home
        clientCredit={formatCurrency(5048.1)}
        clientName="José Carlos"
        title="Home"
      />
      <Container>
        <LoadingGate
          waitFor={isLoading === false}
          meanWile={<LoadingCards show />}
        >
          <Row className="justify-content-center">
            <Col className="col col-lg-10 col-xl-9 col-xxl-8">
              <Section title="Oportunidades">
                <OpportunityCards />
              </Section>
            </Col>
          </Row>
        </LoadingGate>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default memo(Home);
