import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  fill = false,
  sizes = '100vw'
}) => {
  const imgProps = {
    src,
    alt,
    className,
    loading: priority ? 'eager' : loading,
    ...(width && !fill && { width }),
    ...(height && !fill && { height }),
    ...(fill && { sizes }),
    ...(priority && { fetchPriority: 'high' as const })
  };

  return <img {...imgProps} />;
};

export default OptimizedImage;
