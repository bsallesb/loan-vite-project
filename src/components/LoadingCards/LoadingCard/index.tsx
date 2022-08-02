import ContentLoader from 'react-content-loader';

const LoadingCard: React.FC = () => (
  <div className="mb-3">
    <ContentLoader
      speed={2}
      width="100%"
      height={190}
      backgroundColor="#d4d3db"
      foregroundColor="#ece4e4"
    >
      <rect x="0" y="0" rx="30" ry="30" width="100%" height="180" />
    </ContentLoader>
  </div>
);

export default LoadingCard;
