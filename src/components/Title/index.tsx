import { DetailedHTMLProps, HTMLAttributes } from 'react'
import styles from './title.module.scss'

interface ITitle
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLHeadingElement>,
		HTMLHeadingElement
	> {
	isCentered?: boolean
	isWhite?: boolean
	modules?: {
		[key: string]: string;
	}
}

const Title: React.FC<ITitle> = ({
	children,
	isCentered,
	isWhite,
	modules,
	...props
}) => {
	const className = `${styles.container} ${isWhite ? styles.white : ''} ${
		isCentered ? styles.centered : ''
	}`

	return (
		<div className={`${className} ${modules ? modules['default-title'] : ''}`}>
			<h1 className={styles.title} {...props}>
				{children}
			</h1>
		</div>
	)
}

export default Title
