import type { SkillsData } from "@/data/types";
import { CloseButton } from "./ui/CloseButton";
import { SectionHeading_Clickable } from "./ui/SectionHeading_Clickable";
import FallingText from "@/components/ReactBits/FallingText";

type SkillsSectionProps = {
  data: SkillsData;
  onExpand?: () => void;
  isExpanded?: boolean;
};

export function SkillsSection({ data, onExpand, isExpanded = false }: SkillsSectionProps) {
  if (isExpanded) {
    return (
      <div className="relative h-full overflow-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight">Skills</h2>
          <CloseButton onClick={onExpand} />
        </div>

        <div className="space-y-8">
          {data.details.map((category) => (
            <div key={category.category} className="group">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-black rounded-full"></span>
                {category.category}
              </h3>
              <div className="pl-4 border-l-2 border-gray-200">
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 py-1 px-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 如果有 onExpand 处理函数，显示可点击的标题
  if (onExpand) {
    return (
      <div className="overflow-hidden flex h-full flex-col [--falling-text-size:1.3rem] md:[--falling-text-size:1.4rem] xl:[--falling-text-size:1.5rem]">
        <SectionHeading_Clickable onClick={onExpand}>
          Skills
        </SectionHeading_Clickable>
        <FallingText
          className="min-h-10 flex-1 mt-2"
          text={data.skills}
          highlightWords={data.highlights}
          highlightClass="highlighted"
          trigger="click"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="var(--falling-text-size)"
          mouseConstraintStiffness={0.9}
        />
      </div>
    );
  }

  // 默认视图（用于移动端未展开状态）
  return (
    <div className="overflow-hidden flex h-full flex-col [--falling-text-size:1.3rem] md:[--falling-text-size:1.4rem] xl:[--falling-text-size:1.5rem]">
      <h3 className="shrink-0 heading-section-sm">Skills</h3>
      <FallingText
        className="min-h-10 flex-1"
        text={data.skills}
        highlightWords={data.highlights}
        highlightClass="highlighted"
        trigger="click"
        backgroundColor="transparent"
        wireframes={false}
        gravity={0.56}
        fontSize="var(--falling-text-size)"
        mouseConstraintStiffness={0.9}
      />
    </div>
  );
}
