import { memo } from 'react';

import { Row } from 'react-bootstrap';

import CredtCard from 'assets/creditCard-2.png';
import Loan from 'assets/newLoan-2.png';
import Portability from 'assets/portability-2.png';
import Refinancing from 'assets/refinancing-2.png';

import { useLoan } from 'context/Loan';

import Card from 'components/Card';

import { formatCurrency } from 'helpers';

const OpportunityCards: React.FC = () => {
  const { opportunities } = useLoan();

  return (
    <Row className="row-cols-2 row-cols-md-4 g-3 mx-1 mx-sm-0 justify-content-center">
      {opportunities && (
        <>
          <Card
            title="Novo Empréstimo"
            img={Loan}
            value={formatCurrency(opportunities.newLoanMaxValue)}
            url="/valores"
          />
          <Card
            title="Portabilidade"
            img={Portability}
            value={formatCurrency(opportunities.portabilityMaxValue)}
          />
          <Card
            title="Refinanciamento"
            img={Refinancing}
            className="disabled"
          />
          <Card
            title="Cartão de crédito consignado"
            img={CredtCard}
            className="disabled"
          />
        </>
      )}
    </Row>
  );
};

export default memo(OpportunityCards);
