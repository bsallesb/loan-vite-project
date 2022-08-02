import { memo } from 'react';

import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';

import LogoT from 'assets/tudo-logo-1.png';

import { useLoan } from 'context/Loan';

import { formatCurrency, percentage } from 'helpers';

import { ImgCard, ResultCard } from './styles';

const LoanResult: React.FC = () => {
  const { simulation } = useLoan();

  return (
    <ResultCard className="bg-white p-4 border-start border-5 shadow">
      {simulation && (
        <>
          <div className="d-flex justify-content-between mb-5 pt-2 align-items-center">
            <ImgCard className="border border-1">
              <img src={LogoT} alt="Logo" className="img-fluid" />
            </ImgCard>
            <div className="d-flex flex-column text-center text-sm-start">
              <h2 className="fs-5">
                {simulation.numberOfInstallments} parcelas de
              </h2>
              <strong className="text-pink fs-2">
                {formatCurrency(simulation.installmentValue)}
              </strong>
              <span className="fs-5">
                Total de {formatCurrency(simulation.contractValue)}
              </span>
            </div>
            <div className="d-flex flex-column border-start border-1 px-2 px-sm-5 py-4">
              <span className="fs-5">com taxa de</span>
              <strong className="fs-5">
                {percentage(simulation.rate)}% a.m.
              </strong>
            </div>
          </div>
          <div className="border-top border-1 pt-4 pb-3">
            <span className="fs-5">Previsão de pagamento</span>
            <h2 className="fs-5">
              {simulation.nearEstimatedDate} a {simulation.fatEstimatedDate}
            </h2>
          </div>
          <div className="text-end">
            <Link to="" className="text-pink fw-bold text-decoration-none fs-5">
              Contratar <MdArrowForwardIos />
            </Link>
          </div>
        </>
      )}
    </ResultCard>
  );
};

export default memo(LoanResult);
