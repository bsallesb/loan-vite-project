import { Col, Row } from 'react-bootstrap';

import LoadingInputAndButton from 'components/LoadingInputAndButton';
import LoadingPill from 'components/LoadingPills/LoadingPill';
import LoadingTitle from 'components/LoadingTitle';

interface ILoadingPillsProps {
  show: boolean;
  numberOfCards?: number;
}

const LoadingPills: React.FC<ILoadingPillsProps> = ({
  show,
  numberOfCards = 4,
}) =>
  show ? (
    <Row className="justify-content-center">
      <Col className="col col-lg-8 col-xl-7 col-xxl-6">
        <LoadingTitle />
        <Row className="row-cols-2 g-3 mb-5">
          {[...Array(numberOfCards)].map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={i}>
              <LoadingPill />
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <LoadingInputAndButton />
        </div>
      </Col>
    </Row>
  ) : null;

export default LoadingPills;
