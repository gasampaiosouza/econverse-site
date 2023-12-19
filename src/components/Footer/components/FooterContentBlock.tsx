import getId from 'helpers/generateUniqueID'

import { footerContent as content } from '../Content'
import styles from '../footer.module.scss'

import Link from 'next/link'
import { useResponsivity } from 'src/hooks/useResponsivity'
import { FooterSlideDown } from './FooterSlideDown'

type Props = { title: string; contentKey: string }

export const ContentTitle: React.FC = ({ children }) => (
	<h2 className={styles.title}>{children}</h2>
)

const FooterContentBlock: React.FC<Props> = ({ title, contentKey }) => {
	const { isMobile } = useResponsivity()
	const footerContent = content()

	const firstKey = Object.keys(footerContent) as Array<
		keyof typeof footerContent
	>

	// some typing workaround -> just get the first item type
	type ContentItem = (typeof footerContent)[(typeof firstKey)[0]][0]

	const ContentMapping = () => (
		<ul className={styles.content}>
			{footerContent[contentKey].map((item: ContentItem) => (
				<li className={styles['content-item']} key={getId()}>
					<Link href={item.link}>{item.label}</Link>
				</li>
			))}
		</ul>
	)

	return isMobile ? (
		<FooterSlideDown title={title}>{ContentMapping()}</FooterSlideDown>
	) : (
		<>
			<ContentTitle>{title}</ContentTitle>

			{ContentMapping()}
		</>
	)
}

export default FooterContentBlock
