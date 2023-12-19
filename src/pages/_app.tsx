import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

import 'styles/global.scss';
import styles from 'styles/App.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <main className={styles.container}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
