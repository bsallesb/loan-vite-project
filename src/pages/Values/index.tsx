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

import { currencyToFloat, formatCurrency } from 'helpers';

import useTitle from 'hooks/useTitle';

import { Input } from './styles';

const Value: React.FC = () => {
  const {
    getValues,
    values,
    chosenValue,
    isLoading,
    setChosenValue,
    setError,
    error,
  } = useLoan();

  const navigate = useNavigate();
  const setTitle = useTitle();

  useEffect(() => {
    getValues();
  }, [getValues]);

  useEffect(() => {
    setTitle('Valores');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUserClickButton = useCallback(() => {
    setError(null);

    if (values?.max && chosenValue > values?.max)
      return setError(`O valor máximo é ${formatCurrency(values?.max)}`);

    if (values?.min && chosenValue < values?.min)
      return setError(`O valor mínimo é ${formatCurrency(values?.min)}`);

    return navigate('/periodos');
  }, [chosenValue, navigate, setError, values?.max, values?.min]);

  return (
    <Wrapper>
      <Header title="Valores" url="/" />
      <Container>
        <LoadingGate
          waitFor={isLoading === false}
          meanWile={<LoadingPills show />}
        >
          <Row className="justify-content-center">
            <Col className="col col-lg-8 col-xl-7 col-xxl-6">
              {values && (
                <Section title="De quanto você precisa?">
                  <Pills>
                    {values.suggestionValues
                      .sort((a, b) => a - b)
                      .map((value) => (
                        <Pill
                          key={value}
                          value={formatCurrency(value)}
                          onClick={() => {
                            setChosenValue(value);
                          }}
                        />
                      ))}
                  </Pills>
                  <div className="mb-5">
                    <div className="d-flex justify-content-center">
                      <h3 className="me-3 fs-3">Outro valor</h3>
                      <Input
                        placeholder="R$ 0,00"
                        allowNegativeValue={false}
                        decimalsLimit={2}
                        className="text-center"
                        decimalSeparator=","
                        groupSeparator="."
                        prefix="R$ "
                        value={chosenValue}
                        onChange={(e) =>
                          setChosenValue(currencyToFloat(e.target.value))
                        }
                      />
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
                  <div className="text-center">
                    <button
                      type="button"
                      className="fs-5 text-pink border-0"
                      onClick={handleUserClickButton}
                    >
                      Simule pela parcela
                    </button>
                  </div>
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

export default memo(Value);
