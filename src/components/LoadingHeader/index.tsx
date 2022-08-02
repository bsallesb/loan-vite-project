import ContentLoader from 'react-content-loader';

const LoadingHeader: React.FC = () => (
  <div className="mb-3">
    <ContentLoader
      speed={2}
      width="100%"
      height={65}
      backgroundColor="#d4d3db"
      foregroundColor="#ece4e4"
    >
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="65" />
    </ContentLoader>
  </div>
);

export default LoadingHeader;
