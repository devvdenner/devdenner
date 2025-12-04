import { cn } from "@/_shared/utils/cn";

import { TechStackProps } from "./TechStack.model";
import { useTechStackViewModel } from "./TechStack.viewmodel";

export const TechStack = (props: TechStackProps) => {
  const { technologies, styles } = useTechStackViewModel(props);

  return (
    <div className={cn(styles.container())}>
      <div className={cn(styles.list())}>
        {technologies.map((tech) => (
          <span
            key={tech}
            className={cn(styles.item())}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
