import { cn } from "@/_shared/utils/cn";
import { Button } from "@/_shared/components/Button";

import { HeroViewProps } from "./HeroView.model";
import { useHeroViewViewModel } from "./HeroView.viewmodel";

export const HeroView = (props: HeroViewProps) => {
  const { profile, styles } = useHeroViewViewModel(props);

  return (
    <section id="home" className={cn(styles.section())}>
      {/* Background Blob Effect */}
      <div className={cn(styles.blob1())}></div>
      <div className={cn(styles.blob2())}></div>

      <div className={cn(styles.container())}>
        <div className={cn(styles.content())}>
          <p className={cn(styles.greeting())}>Olá, meu nome é</p>
          <h1 className={cn(styles.title())}>
            {profile.name}
            <span className={cn(styles.titleDot())}>.</span>
          </h1>
          <h2 className={cn(styles.role())}>{profile.role}</h2>
          <p className={cn(styles.description())}>
            {profile.description}
          </p>

          <div className={cn(styles.actions())}>
            <Button
              href="#contact"
            >
              Vamos conversar?
            </Button>
            <Button
              href="#"
              variant="secondary"
            >
              Ver Currículo
            </Button>
          </div>
        </div>

        <div className={cn(styles.imageWrapper())}>
          <div className={cn(styles.imageContainer())}>
            <div className={cn(styles.imageBorder())}></div>
            <div className={cn(styles.imageInner())}>
              {/* Placeholder Image using a gradient/pattern if no user image */}
              <div className={cn(styles.imagePlaceholder())}>
                <span className={cn(styles.imageIcon())}>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
