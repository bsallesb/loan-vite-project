import ContentLoader from 'react-content-loader';

const LoadingTitle: React.FC = () => (
  <div className="mb-3">
    <ContentLoader
      speed={2}
      width="100%"
      height={40}
      backgroundColor="#d4d3db"
      foregroundColor="#ece4e4"
    >
      <rect x="0" y="0" rx="5" ry="5" width="150" height="25" />
    </ContentLoader>
  </div>
);

export default LoadingTitle;
