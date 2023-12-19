import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

import 'styles/global.scss'
import styles from 'styles/App.module.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={styles.container}>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</main>
	)
}

export default MyApp
