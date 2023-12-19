import styles from './cases.module.scss';
import { SlideSection } from './components/SlideSection';
import { WhatWeDo } from './components/WhatWeDo';

const Cases: React.FC = () => {
  return (
    <section className={styles.cases} id="cases">
      <SlideSection />
      <WhatWeDo />
    </section>
  );
};

export default Cases;
