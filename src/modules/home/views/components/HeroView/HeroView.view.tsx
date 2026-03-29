'use client';

import { CaretDown } from '@phosphor-icons/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { motion } from '@/_shared/adapters/motion';
import { Button } from '@/_shared/components/Button';
import { TypeWriter } from '@/_shared/components/TypeWriter';
import { cn } from '@/_shared/utils/cn';

import { HeroParticles } from './components/HeroParticles/HeroParticles.view';
import { HeroViewProps } from './HeroView.model';
import { useHeroViewViewModel } from './HeroView.viewmodel';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] as const },
  }),
};

export const HeroView = (props: HeroViewProps) => {
  const { profile, styles } = useHeroViewViewModel(props);
  const t = useTranslations('Home.hero');

  const typedRoles = [
    t('typedRoles.0'),
    t('typedRoles.1'),
    t('typedRoles.2'),
    t('typedRoles.3'),
  ];

  return (
    <section id="home" className={cn(styles.section())}>
      <HeroParticles />

      <motion.div
        className={cn(styles.blob1())}
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className={cn(styles.blob2())}
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      />

      <div className={cn(styles.container())}>
        <div className={cn(styles.content())}>
          <motion.p
            className={cn(styles.greeting())}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            {t('greeting')}
          </motion.p>

          <motion.h1
            className={cn(styles.title())}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            {profile.name}
            <span className={cn(styles.titleDot())}>.</span>
          </motion.h1>

          <motion.h2
            className={cn(styles.role())}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <TypeWriter texts={typedRoles} typingSpeed={70} deletingSpeed={35} pauseDuration={2500} />
          </motion.h2>

          <motion.p
            className={cn(styles.description())}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            {profile.description}
          </motion.p>

          <motion.div
            className={cn(styles.actions())}
            variants={fadeUpVariant}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <Button href="https://www.linkedin.com/in/denner-nascimento/">
              {t('cta.contact')}
            </Button>
            <Button
              href="https://files.devdenner.com/pdf-files/Jose%20Denner%20Lira%20do%20Nascimento%20-%20Desenvolvedor%20Frontend.pdf"
              variant="secondary"
            >
              {t('cta.resume')}
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={cn(styles.imageWrapper())}
          variants={scaleInVariant}
          initial="hidden"
          animate="visible"
          custom={0.4}
        >
          <motion.div
            className={cn(styles.imageContainer())}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className={cn(styles.imageBorder())} />
            <div className={cn(styles.imageInner())}>
              <Image
                src="https://files.devdenner.com/profiles-pictures/profile-picture-1.jpg"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={cn(styles.scrollIndicator())}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <CaretDown size={28} weight="bold" />
      </motion.div>
    </section>
  );
};
