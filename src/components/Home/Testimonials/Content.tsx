import { useTranslation } from '~/src/hooks/useTranslation';

export function getContent() {
  const { t } = useTranslation();
  
  return [
    {
      description: t['testimonials.rogerio'],
      customer: { info: '<strong>Fátima</strong>, CEO - Drogaria fatima', image: '/img/fatima.jpg' },
    },
    {
      description: t['testimonials.Amit-Eisler'],
      customer: { info: '<strong>Amit Eisler</strong>, Co-Founder - Zissou', image: '/img/amit-eisler.jpg' },
    },
    {
      description: t['testimonials.rogerio'],
      customer: { info: '<strong>Rogério</strong>, Co-Founder - Roger Enterprises', image: '/img/rogerio.jpg' },
    },
    {
      description: t['testimonials.rogerio'],
      customer: { info: '<strong>Pereira</strong>, Founder - Mecânica pereira', image: '/img/amit-eisler.jpg' },
    },
  ]
}