import {useTranslation} from 'react-i18next';

export type SlideData = {
  title: string;
  subtitle: string;
  icon: number;
};

export function useSlideData() {
  const {t} = useTranslation();
  const data: SlideData[] = [
    {
      title: t('slides.1.title'),
      subtitle: t('slides.1.subtitle'),
      icon: 0,
    },
    {
      title: t('slides.2.title'),
      subtitle: t('slides.2.subtitle'),
      icon: 1,
    },
    {
      title: t('slides.3.title'),
      subtitle: t('slides.3.subtitle'),
      icon: 2,
    },
  ];

  return data;
}
