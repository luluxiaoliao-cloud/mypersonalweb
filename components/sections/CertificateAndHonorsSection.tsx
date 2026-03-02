import type { CertificateCategory } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type CertificateAndHonorsSectionProps = {
  data: CertificateCategory[];
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function CertificateAndHonorsSection({
  data,
  onExpand,
  isExpanded = false,
}: CertificateAndHonorsSectionProps) {
  return (
    <div className="relative h-full">
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          Certificates & Honors
        </SectionHeading_Clickable>
      </div>
      {isExpanded && <CloseButton onClick={onExpand} />}

      <div className={isExpanded ? "pt-4" : ""}>
        {data.map((group) => (
          <div key={group.category}>
            {!isExpanded ? (
              <p className="mt-2 text-meta text-gray-600">
                {group.certificateText || group.category}
              </p>
            ) : (
              <div className="space-y-8">
                {group.certificateText && (
                  <section>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-black rounded"></span>
                      语言证书
                    </h3>
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {group.certificateText}
                      </p>
                    </div>
                  </section>
                )}

                {group.honorText && (
                  <section>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <span className="w-1 h-6 bg-black rounded"></span>
                      荣誉奖项
                    </h3>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                      <div className="space-y-3">
                        {group.honorText.split(';').map((honor, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {honor.trim()}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {group.certificates.length > 0 && !group.certificateText && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {group.certificates.map((certificate) => (
                      <div
                        key={certificate.title}
                        className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                      >
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {certificate.title}
                        </h4>
                        <p className="text-sm text-gray-500">
                          {certificate.description}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          {certificate.date}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
