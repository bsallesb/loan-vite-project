import ContentLoader from 'react-content-loader';

const LoadingInputAndButton: React.FC = () => (
  <div className="mb-3">
    <ContentLoader
      speed={2}
      width="100%"
      height={140}
      backgroundColor="#d4d3db"
      foregroundColor="#ece4e4"
    >
      <rect x="20%" y="0" rx="5" ry="5" width="180" height="35" />
      <rect x="23%" y="80" rx="20" ry="20" width="162" height="44" />
    </ContentLoader>
  </div>
);

export default LoadingInputAndButton;
