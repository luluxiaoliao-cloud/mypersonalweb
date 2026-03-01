import type { AboutData } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type AboutSectionProps = {
  data: AboutData;
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function AboutSection({
  data,
  onExpand,
  isExpanded = false,
}: AboutSectionProps) {
  const handlePhotoClick = (e: React.MouseEvent<HTMLImageElement>, photo: any) => {
    e.currentTarget.classList.add('photo-clicked');
    setTimeout(() => {
      e.currentTarget.classList.remove('photo-clicked');
    }, 300);
  };

  if (isExpanded) {
    return (
      <div className="relative h-full overflow-hidden">
        <CloseButton onClick={onExpand} />

        {/* Photo Container - positioned absolutely in four directions */}
        {data.photos && data.photos.length > 0 && (
          <div className="absolute inset-0 pointer-events-none">
            {data.photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute pointer-events-auto transition-all duration-300 ease-out ${
                  photo.direction === 'top'
                    ? 'top-8 left-1/2 -translate-x-1/2'
                    : photo.direction === 'bottom'
                    ? 'bottom-8 left-1/2 -translate-x-1/2'
                    : photo.direction === 'left'
                    ? 'left-8 top-1/2 -translate-y-1/2'
                    : 'right-8 top-1/2 -translate-y-1/2'
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-xl shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:rotate-2 cursor-pointer"
                  onClick={(e) => handlePhotoClick(e, photo)}
                />
              </div>
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="flex h-full flex-col md:flex-row md:items-center md:gap-12 lg:gap-12 m-12 sm:m-20 md:m-24">
          <div className="flex shrink-0 items-center justify-center py-6 md:w-2/5 md:py-0">
            <img
              src={data.image}
              alt={data.imageAlt}
              className="h-48 w-48 object-contain sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80"
            />
          </div>
          <div className="md:w-3/5">
            <SectionHeading_Clickable onClick={onExpand}>
              {`About Me`}
            </SectionHeading_Clickable>
            <p className="text-body leading-relaxed text-black md:text-lg md:leading-relaxed">
              {data.text}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          {`About Me`}
        </SectionHeading_Clickable>
      </div>

      <div className="mt-3 flex items-start gap-3 sm:mt-4 sm:gap-4 xl:gap-6">
        <div className="relative h-24 w-24 shrink-0 sm:h-32 sm:w-32 md:h-40 md:w-40 xl:h-56 xl:w-56">
          <img
            src={data.image}
            alt={data.imageAlt}
            className="h-full w-full object-contain"
          />
        </div>
        <p className="flex-1 text-body text-black">{data.text}</p>
      </div>
    </div>
  );
}
