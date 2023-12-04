import { useEffect, useRef } from "react";
import { Skill } from "../../core/interfaces/interface";
import { SkillsChipWrapper, SkillsListWrapper } from "./skillsChip";

function SkillsChip({
  skills,
  handleSkillsOverflow,
  className
}: {
  skills: Skill[];
  handleSkillsOverflow?: (isOverflow: boolean) => void;
  className?:string
}) {
  const skillsContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (handleSkillsOverflow) {
      const skillsContainer = skillsContainerRef.current;

      const handleResize = () => {
        if (skillsContainer) {
          const isOverflowing =
            skillsContainer.scrollWidth > skillsContainer.clientWidth;

          handleSkillsOverflow(isOverflowing);
        }
      };

      // Initial check
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize); // calculate the scrollwidth whenever the window gets resized

      // Cleanup function to remove the event listener
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [skills, skillsContainerRef]);

  return (
    <SkillsListWrapper className={` ${className}`} ref={skillsContainerRef}>
      {skills.map((skill: Skill) => {
        return (
          <SkillsChipWrapper key={skill.id}>{skill.name}</SkillsChipWrapper>
        );
      })}
    </SkillsListWrapper>
  );
}
export default SkillsChip;
