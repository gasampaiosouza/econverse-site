import Head from 'next/head';

import Hero from 'components/Home/Hero/index';
import Cases from 'components/Home/Cases/index';
import Products from 'components/Home/Products/index';
import Customers from 'components/Home/Customers/index';
import Certificates from '../components/Home/Certificates';
import Services from '../components/Home/Services';
import Testimonials from '../components/Home/Testimonials';

export default function Home() {
  return (
		<main>
			<Head>
				<title>Agência Econverse | Implantação VTEX e Shopify</title>
			</Head>

			<Hero />
			<Cases />
			<Products />
			<Customers />
			<Certificates />
			<Services />
			<Testimonials />
		</main>
	);
}
