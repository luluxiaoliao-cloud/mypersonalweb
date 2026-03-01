import type { CertificateCategory } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { ProjectCard } from "./ui/ProjectCard";
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
      {data.map((group) => (
        <div key={group.category} className="mb-4">
          <p className="mt-2 text-meta">{group.category}</p>
          <div
            className={`mt-4 ${isExpanded ? "grid grid-cols-2 gap-6" : "space-y-4"}`}
          >
            {group.certificates.map((certificate) => (
              <ProjectCard
                key={certificate.title}
                title={certificate.title}
                image={certificate.image}
                techStack={[certificate.description, certificate.date]}
                href={certificate.href}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
