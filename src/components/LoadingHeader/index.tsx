import ContentLoader from 'react-content-loader';

const LoadingHeader: React.FC = () => (
  <div className="mb-3">
    <ContentLoader
      speed={2}
      width="100%"
      height={66}
      backgroundColor="#000"
      foregroundColor="#000"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="66" />
    </ContentLoader>
  </div>
);

export default LoadingHeader;
