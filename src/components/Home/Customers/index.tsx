import getId from 'helpers/generateUniqueID'
import { useTranslation } from 'src/hooks/useTranslation'

import Title from 'components/Title'
import styles from './customers.module.scss'

import Image from 'next/image'
import Link from 'next/link'

import { customers } from './Content'

const Customers: React.FC = () => {
	// prevent more than 10 customers
	const customersToShow = 10
	const { t } = useTranslation()

	return (
		<section className={styles.customers} id="customers">
			<Title isCentered>{t['customers.title']}</Title>

			<div className={styles.list}>
				{customers.slice(0, customersToShow).map((customer) => {
					const key = getId()

					return (
						<Link
							key={key}
							href={customer.website}
							className={styles.logo}
							target="_blank"
						>
							{customer.logo}
						</Link>
					)
				})}
			</div>

			<Link href="/clientes" className={`default-link ${styles.more}`}>
				{t['customers.more']}
			</Link>
		</section>
	)
}

export default Customers
