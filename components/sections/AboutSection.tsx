import type { AboutData } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";
import { HobbyCard } from "./ui/HobbyCard";

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
      <div className="relative h-full overflow-auto">
        <CloseButton onClick={onExpand} />

        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* 第一部分：个人介绍 */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={data.image}
                  alt={data.imageAlt}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-contain rounded-2xl shadow-xl"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-lg leading-relaxed text-gray-700">
                  {data.text}
                </p>
              </div>
            </div>
          </section>

          {/* 分隔线 */}
          <div className="border-t border-gray-200 my-10"></div>

          {/* 第二部分：个人照片展示 */}
          {data.photos && data.photos.length > 0 && (
            <section className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-black rounded"></span>
                个人相册
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.photos.map((photo, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={(e) => handlePhotoClick(e, photo)}
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 分隔线 */}
          <div className="border-t border-gray-200 my-10"></div>

          {/* 第三部分：兴趣爱好 */}
          {data.hobbies && data.hobbies.length > 0 && (
            <section>
              <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center gap-2">
                <span className="w-1 h-6 bg-black rounded"></span>
                兴趣爱好
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.hobbies.map((hobby, index) => (
                  <HobbyCard
                    key={index}
                    name={hobby.name}
                    description={hobby.description}
                    image={hobby.image}
                    images={hobby.images}
                  />
                ))}
              </div>
            </section>
          )}
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
