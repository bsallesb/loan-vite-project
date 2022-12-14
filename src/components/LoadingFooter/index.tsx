import ContentLoader from 'react-content-loader';

const LoadingFooter: React.FC = () => (
  <div className="mb-3 d-flex mt-auto">
    <ContentLoader
      speed={2}
      width="100%"
      height={65}
      backgroundColor="#fff"
      foregroundColor="#fff"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="65" />
    </ContentLoader>
  </div>
);

export default LoadingFooter;
