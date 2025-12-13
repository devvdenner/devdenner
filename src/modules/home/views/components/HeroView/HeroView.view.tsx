import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/_shared/components/Button';
import { cn } from '@/_shared/utils/cn';

import { HeroViewProps } from './HeroView.model';
import { getHeroViewViewModel } from './HeroView.viewmodel';

export const HeroView = async (props: HeroViewProps) => {
  const { profile, styles } = await getHeroViewViewModel(props);
  const t = await getTranslations('Home.hero');

  return (
    <section id="home" className={cn(styles.section())}>
      <div className={cn(styles.blob1())}></div>
      <div className={cn(styles.blob2())}></div>

      <div className={cn(styles.container())}>
        <div className={cn(styles.content())}>
          <p className={cn(styles.greeting())}>{t('greeting')}</p>
          <h1 className={cn(styles.title())}>
            {profile.name}
            <span className={cn(styles.titleDot())}>.</span>
          </h1>
          <h2 className={cn(styles.role())}>{profile.role}</h2>
          <p className={cn(styles.description())}>{profile.description}</p>

          <div className={cn(styles.actions())}>
            <Button href="https://www.linkedin.com/in/denner-nascimento/">
              {t('cta.contact')}
            </Button>
            <Button
              href="https://files.devdenner.com/pdf-files/Jose%20Denner%20Lira%20do%20Nascimento%20-%20Desenvolvedor%20Frontend.pdf"
              variant="secondary"
            >
              {t('cta.resume')}
            </Button>
          </div>
        </div>

        <div className={cn(styles.imageWrapper())}>
          <div className={cn(styles.imageContainer())}>
            <div className={cn(styles.imageBorder())}></div>
            <div className={cn(styles.imageInner())}>
              <Image
                src="https://files.devdenner.com/profiles-pictures/profile-picture-1.jpg"
                alt={profile.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
