import React, { useState, useEffect, useRef } from 'react';
import { Icon } from './Icon';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  fallbackIcon?: string;
  fallbackTitle?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  priority = false,
  fallbackIcon = 'image',
  fallbackTitle = 'Pratinjau Visual Studio',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px 0px', // Preload when within 200px of viewport
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#1c1f2a] ${containerClassName}`}
    >
      {/* Skeleton Shimmer while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#171b26] via-[#262a35] to-[#171b26] bg-[length:200%_100%] animate-pulse" />
      )}

      {/* Fallback container if image fails to load */}
      {hasError ? (
        <div className="w-full h-full min-h-[140px] flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#171b26] to-[#0a0e18] text-[#c2c6d6] text-center">
          <Icon name={fallbackIcon} className="text-3xl text-[#4d8eff] mb-2" />
          <span className="text-xs font-medium text-[#dfe2f1]">{fallbackTitle}</span>
          <span className="text-[10px] text-[#8c909f] mt-1">{alt}</span>
        </div>
      ) : isInView ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          {...props}
        />
      ) : null}
    </div>
  );
};
