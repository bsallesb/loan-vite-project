import 'bootstrap/dist/css/bootstrap.min.css';
import { memo } from 'react';

import { LoanProvider } from 'context/Loan';

import Routes from 'Routes';

import GlobalStyles from 'styles/GlobalStyles';

const App: React.FC = () => (
  <LoanProvider>
    <Routes />
    <GlobalStyles />
  </LoanProvider>
);

export default memo(App);
