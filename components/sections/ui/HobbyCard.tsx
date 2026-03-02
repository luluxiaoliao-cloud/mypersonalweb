"use client";

import { useState, useRef, useEffect } from "react";

type HobbyCardProps = {
  name: string;
  description?: string;
  image?: string;
  images?: string[];
};

export function HobbyCard({
  name,
  description,
  image,
  images,
}: HobbyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasMultipleImages = images && images.length > 1;
  const allImages = images && images.length > 0 ? images : (image ? [image] : []);

  const startRotation = () => {
    if (!hasMultipleImages) return;
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
    }, 1500);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    return () => {
      stopRotation();
    };
  }, []);

  return (
    <div
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      onMouseEnter={startRotation}
      onMouseLeave={stopRotation}
    >
      {allImages.length > 0 && (
        <div className="aspect-video overflow-hidden relative">
          <img
            src={allImages[currentImageIndex]}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {hasMultipleImages && (
            <div className="absolute bottom-3 right-3 flex gap-1.5">
              {allImages.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex
                      ? "bg-white w-4"
                      : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}
      <div className="p-5">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">
          {name}
        </h4>
        {description && (
          <p className="text-gray-600 text-sm">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
