import React, { FC, ImgHTMLAttributes } from 'react';

const Image = ({ data, ...props}) => {
  return <img fixed={data.file.childImageSharp.fixed}  {...props} />;
};

export default Image;
