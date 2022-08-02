import { Col, Container, Row } from 'react-bootstrap';

import LoadingFooter from 'components/LoadingFooter';
import LoadingHeader from 'components/LoadingHeader';
import LoadingPills from 'components/LoadingPills';
import Wrapper from 'components/Wrapper';

const LoadingPage: React.FC = () => (
  <Wrapper>
    <LoadingHeader />

    <LoadingFooter />
  </Wrapper>
);

export default LoadingPage;
