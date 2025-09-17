import React, { useState, useEffect } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const fallbackImages = {
  hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
  restaurant: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
  experience: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
  destination: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80',
  default: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80'
};

export default function OptimizedImage({
  src,
  alt,
  className = '',
  fallbackType = 'default',
  loading = 'lazy',
  sizes = '100vw',
  onError = null
}) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setImageSrc(src);
    setHasError(false);
    setIsLoading(true);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc(fallbackImages[fallbackType] || fallbackImages.default);
      if (onError) onError();
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  // Validate and clean image URL
  const getValidImageUrl = (url) => {
    if (!url) return fallbackImages[fallbackType];

    // Handle relative URLs
    if (url.startsWith('/')) {
      return url;
    }

    // Ensure HTTPS for external URLs
    if (url.startsWith('http://')) {
      return url.replace('http://', 'https://');
    }

    return url;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-gray-400" />
        </div>
      )}
      <img
        src={getValidImageUrl(imageSrc)}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        loading={loading}
        sizes={sizes}
        decoding="async"
      />
    </div>
  );
}