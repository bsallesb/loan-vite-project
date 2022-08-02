import { Col, Row } from 'react-bootstrap';

import LoadingTitle from 'components/LoadingTitle';

import LoadingCard from './LoadingCard';

interface ILoadingCardsProps {
  show: boolean;
  numberOfCards?: number;
}

const LoadingCards: React.FC<ILoadingCardsProps> = ({
  show,
  numberOfCards = 4,
}) =>
  show ? (
    <Row className="justify-content-center">
      <Col className="col col-lg-10 col-xl-9 col-xxl-8">
        <LoadingTitle />
        <Row className="row-cols-2 row-cols-md-4 g-3 mx-1 mx-sm-0 justify-content-center g-4">
          {[...Array(numberOfCards)].map((item, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Col key={i}>
              <LoadingCard />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  ) : null;

export default LoadingCards;
