import { Col, Row } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';

import LoadingTitle from 'components/LoadingTitle';

const LoadingSimulation: React.FC = () => (
  <div className="mb-3">
    <Row className="justify-content-center">
      <Col className="col col-lg-8 col-xl-7 col-xxl-6">
        <LoadingTitle />
        <ContentLoader
          speed={2}
          width="100%"
          height={227}
          backgroundColor="#d4d3db"
          foregroundColor="#ece4e4"
        >
          <rect x="0" y="0" rx="10" ry="10" width="100%" height="227" />
        </ContentLoader>
      </Col>
    </Row>
  </div>
);

export default LoadingSimulation;
