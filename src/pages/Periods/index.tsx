import { memo, useCallback, useEffect } from 'react';

import { Alert, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { useLoan } from 'context/Loan';

import Button from 'components/Button';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingGate from 'components/LoadingGate';
import LoadingPills from 'components/LoadingPills';
import Pills from 'components/Pills';
import Pill from 'components/Pills/Pill';
import Section from 'components/Section';
import Wrapper from 'components/Wrapper';

import { Input } from './styles';

const Periods: React.FC = () => {
  const {
    months,
    installments,
    isLoading,
    error,
    setError,
    setMonths,
    getInstallments,
  } = useLoan();

  const navigate = useNavigate();

  useEffect(() => {
    getInstallments();
  }, [getInstallments]);

  const handleUserClickButton = useCallback(() => {
    setError(null);

    if (installments?.max && months > installments?.max)
      return setError(`O valor máximo é ${installments?.max}`);

    if (installments?.min && months < installments.min)
      return setError(`O valor mínimo é ${installments?.min}`);

    return navigate('/resultados');
  }, [months, navigate, setError, installments?.max, installments?.min]);

  return (
    <Wrapper>
      <Header title="Periodos" url="/valores" />
      <Container>
        <LoadingGate
          waitFor={isLoading === false}
          meanWile={<LoadingPills show />}
        >
          <Row className="justify-content-center">
            <Col className="col col-lg-8 col-xl-7 col-xxl-6">
              {installments && (
                <Section title="Em quanto tempo você quer pagar?">
                  <Pills>
                    {installments.suggestionInstallments
                      .sort((a, b) => a - b)
                      .map((installment) => (
                        <Pill
                          key={installment}
                          months={installment}
                          onClick={() => setMonths(installment)}
                        />
                      ))}
                  </Pills>
                  <div className="mb-5">
                    <div className="d-flex justify-content-center">
                      <Input
                        type="number"
                        min={installments.min}
                        max={installments.max}
                        placeholder="00"
                        className="me-3 text-center"
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
                      />
                      <h3 className="fs-3">meses</h3>
                    </div>
                  </div>
                  <Button onClick={handleUserClickButton} />
                  {error && (
                    <Row className="justify-content-center">
                      <Col className="col-8">
                        <Alert variant="danger" className="text-center fs-5">
                          {error}
                        </Alert>
                      </Col>
                    </Row>
                  )}
                </Section>
              )}
            </Col>
          </Row>
        </LoadingGate>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default memo(Periods);
