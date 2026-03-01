import type { ExperienceCategory } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { ProjectCard } from "./ui/ProjectCard";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";

type ExperienceSectionProps = {
  data: ExperienceCategory[];
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function ExperienceSection({
  data,
  onExpand,
  isExpanded = false,
}: ExperienceSectionProps) {
  return (
    <div className="relative h-full">
      <div className="flex items-center justify-between">
        <SectionHeading_Clickable onClick={onExpand}>
          Experience
        </SectionHeading_Clickable>
      </div>
      {isExpanded && <CloseButton onClick={onExpand} />}
      {data.map((group) => (
        <div key={group.category} className="mb-4">
          <p className="mt-2 text-meta">{group.category}</p>
          <div
            className={`mt-4 ${isExpanded ? "grid grid-cols-2 gap-6" : "space-y-4"}`}
          >
            {group.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={project.image}
                techStack={project.techStack}
                href={project.href}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
