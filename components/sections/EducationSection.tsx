import type { EducationData } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type EducationSectionProps = {
  data: EducationData;
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function EducationSection({
  data,
  onExpand,
  isExpanded = false,
}: EducationSectionProps) {
  if (isExpanded) {
    return (
      <div className="relative h-full overflow-auto">
        <CloseButton onClick={onExpand} />

        <div className="max-w-4xl mx-auto px-6 py-8">
          <section>
            <h2 className="text-3xl font-bold mb-8">Education Background</h2>

            <div className="space-y-6">
              {data.educations.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Logo */}
                    {edu.logo && (
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl border border-gray-100 flex items-center justify-center p-2 shadow-sm">
                          <img
                            src={edu.logo}
                            alt={edu.universityShort}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {edu.university}
                          </h3>
                          <p className="text-lg font-semibold text-gray-700">
                            {edu.degree}
                          </p>
                        </div>
                        <span className="mt-2 md:mt-0 text-sm text-gray-500 bg-gray-50 px-4 py-2 rounded-lg whitespace-nowrap">
                          {edu.date}
                        </span>
                      </div>
                      {edu.description && (
                        <div className="mt-4 border-l-4 border-gray-200 pl-4">
                          <p className="text-gray-600 leading-relaxed">
                            {edu.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full">
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          Education
        </SectionHeading_Clickable>
      </div>

      <div className="mt-3 space-y-3 sm:mt-4">
        {data.educations.map((edu, index) => (
          <div key={index} className="flex items-center gap-3">
            {edu.logo && (
              <div className="w-8 h-8 flex-shrink-0 bg-white rounded border border-gray-100 flex items-center justify-center p-1">
                <img
                  src={edu.logo}
                  alt={edu.universityShort}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )}
            <p className="text-meta text-gray-600">
              {edu.universityShort}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
