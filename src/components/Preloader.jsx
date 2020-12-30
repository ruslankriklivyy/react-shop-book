import React from 'react';
import ContentLoader from 'react-content-loader';

const Preloader = (props) => (
  <ContentLoader
    className="book-cart"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 700 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="0" ry="0" width="280" height="460" />
  </ContentLoader>
);

export default Preloader;
