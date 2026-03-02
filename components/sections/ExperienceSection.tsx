import type { ExperienceCategory } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { ProjectCard } from "./ui/ProjectCard";
import { ProjectCardWithHover } from "./ui/ProjectCardWithHover";
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

      <div className={isExpanded ? "pt-2" : ""}>
        {data.map((group) => (
          <div key={group.category} className="mb-6 last:mb-0">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-lg font-semibold text-gray-800 tracking-tight">
                {group.category}
              </h3>
              {group.projects.length > 0 && (
                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                  {group.projects.length} items
                </span>
              )}
            </div>

            {group.projects.length === 0 ? (
              <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 text-center">
                <div className="text-gray-400 text-sm">
                  Coming soon...
                </div>
              </div>
            ) : (
              <div className={isExpanded ? "space-y-6" : "space-y-4"}>
                {group.projects.map((project) => (
                  <div key={project.title}>
                    <ProjectCardWithHover
                      key={project.title}
                      title={isExpanded ? project.title : (project.titleEn || project.title)}
                      titleEn={isExpanded ? project.titleEn : undefined}
                      image={isExpanded ? project.image : undefined}
                      images={isExpanded ? project.images : undefined}
                      techStack={project.techStack}
                      href={project.href}
                      description={isExpanded ? project.description : undefined}
                      descriptionEn={isExpanded ? project.descriptionEn : undefined}
                      date={isExpanded ? project.date : undefined}
                      company={isExpanded ? project.company : undefined}
                      companyEn={isExpanded ? project.companyEn : undefined}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
