import { externalImageLoader, internalImageLoader } from 'loader';
import NextImage, { ImageProps } from 'next/image';
import { memo } from 'react';

interface IImage extends ImageProps {
  isExternalResource?: boolean;
}

const Image = ({ isExternalResource = false, ...props }: IImage) => (
  <NextImage 
    loader={
      isExternalResource 
        ? externalImageLoader 
        : internalImageLoader
      } 
    {...props} 
  />
)

export default memo(Image);