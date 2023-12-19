import getId from 'helpers/generateUniqueID'

import { useFooterContent } from '../Content'
import styles from '../footer.module.scss'

import Link from 'next/link'
import { useResponsivity } from 'src/hooks/useResponsivity'
import { FooterSlideDown } from './FooterSlideDown'

type Props = { title: string; contentKey: string }

export const ContentTitle: React.FC = ({ children }: any) => (
	<h2 className={styles.title}>{children}</h2>
)

const FooterContentBlock: React.FC<Props> = ({ title, contentKey }) => {
	const { isMobile } = useResponsivity()
	const footerContent = useFooterContent()

	const firstKey = Object.keys(footerContent) as Array<
		keyof typeof footerContent
	>

	console.log({ isMobile })

	// some typing workaround -> just get the first item type
	type ContentItem = (typeof footerContent)[(typeof firstKey)[0]][0]

	const ContentMapping = () => (
		<ul className={styles.content}>
			{footerContent[contentKey as keyof typeof footerContent].map(
				(item: ContentItem) => (
					<li className={styles['content-item']} key={getId()}>
						<Link href={item.link}>{item.label}</Link>
					</li>
				),
			)}
		</ul>
	)

	return isMobile ? (
		<FooterSlideDown title={title}>{ContentMapping()}</FooterSlideDown>
	) : (
		<>
			{/* @ts-ignore */}
			<ContentTitle>{title}</ContentTitle>

			{ContentMapping()}
		</>
	)
}

export default FooterContentBlock
