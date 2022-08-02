import { Col, Container, Row } from 'react-bootstrap';

import LoadingFooter from 'components/LoadingFooter';
import LoadingHeader from 'components/LoadingHeader';
import LoadingPills from 'components/LoadingPills';
import Wrapper from 'components/Wrapper';

const LoadingPage: React.FC = () => (
  <Wrapper>
    <LoadingHeader />
    <Container>
      <Row className="justify-content-center">
        <Col className="col col-lg-8 col-xl-7 col-xxl-6">
          <LoadingPills show />
        </Col>
      </Row>
    </Container>
    <LoadingFooter />
  </Wrapper>
);

export default LoadingPage;
