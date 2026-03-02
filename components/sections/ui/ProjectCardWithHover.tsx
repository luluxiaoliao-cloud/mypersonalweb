"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

type ProjectCardWithHoverProps = {
  title: string;
  titleEn?: string;
  image?: string;
  images?: string[];
  techStack: string[];
  href?: string;
  description?: string;
  descriptionEn?: string;
  date?: string;
  company?: string;
  companyEn?: string;
};

export function ProjectCardWithHover({
  title,
  titleEn,
  image,
  images,
  techStack,
  href,
  description,
  descriptionEn,
  date,
  company,
  companyEn,
}: ProjectCardWithHoverProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const hasMultipleImages = images && images.length > 1;
  const hasImage = image || (images && images.length > 0);
  const allImages = images && images.length > 0 ? images : (image ? [image] : []);
  const isBilingual = titleEn && descriptionEn;

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

  const CardWrapper = href ? "a" : "div";
  const cardProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  if (description) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {hasImage && (
          <div
            className="relative aspect-2/1 w-full overflow-hidden"
            onMouseEnter={startRotation}
            onMouseLeave={stopRotation}
          >
            <div className="absolute inset-0 transition-opacity duration-500">
              <img
                src={allImages[currentImageIndex]}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
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
        <div className={`p-6 ${!hasImage ? 'pt-6' : ''}`}>
          {/* Company & Date */}
          <div className="flex items-start justify-between mb-4">
            <div>
              {company && (
                <div className="mb-1">
                  <span className="text-sm font-semibold text-gray-800">
                    {company}
                  </span>
                  {companyEn && (
                    <span className="text-sm text-gray-500 ml-2">
                      | {companyEn}
                    </span>
                  )}
                </div>
              )}
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  {title}
                </h4>
                {titleEn && (
                  <p className="text-sm text-gray-500 italic mt-1">
                    {titleEn}
                  </p>
                )}
              </div>
            </div>
            {date && (
              <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg whitespace-nowrap">
                {date}
              </span>
            )}
          </div>

          {/* Description - Bilingual */}
          {isBilingual ? (
            <div className="space-y-4 mb-5">
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="text-gray-700 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="border-l-4 border-gray-100 pl-4 bg-gray-50 py-3 pr-4 rounded-r-lg">
                <p className="text-gray-600 leading-relaxed text-sm">
                  {descriptionEn}
                </p>
              </div>
            </div>
          ) : (
            <p className="text-gray-600 leading-relaxed mb-5">
              {description}
            </p>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <CardWrapper
      {...cardProps}
      className={`relative group block overflow-hidden rounded-2xl bg-[#fdfdfd] transition-shadow hover:shadow-lg ${!hasImage ? 'border border-gray-100' : ''}`}
      onMouseEnter={startRotation}
      onMouseLeave={stopRotation}
    >
      {hasImage ? (
        <>
          {/* Image Area */}
          <div className="relative aspect-2/1 w-full overflow-hidden">
            <img
              src={allImages[currentImageIndex]}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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

          {/* Footer */}
          <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-1 bg-white/80">
            {/* Title */}
            <h4 className="heading-card text-black">{title}</h4>

            {/* Tech Stack */}
            <div className="flex items-center gap-3">
              {techStack.map((tech) => (
                <span key={tech} className="text-meta">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Text-only mode for cards without image */
        <div className="p-5">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
    </CardWrapper>
  );
}
