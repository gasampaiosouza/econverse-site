import { useState } from 'react'
import type { FocusEvent, FormEvent } from 'react'

import Title from 'components/Title'
import AgencyLocation from './AgencyLocation'

import SVG from 'react-inlinesvg'

import patterns from 'src/helpers/validationPatterns'
import { useTranslation } from 'src/hooks/useTranslation'
import Checkbox from '../../Checkbox'

import styles from '../contact.module.scss'
import sendEmail from 'src/functions/send-email'

type IInfoBox = {
	iconPath: string
	message: string
}

type IFormInfo = {
	name: { value: string; error: boolean }
	email: { value: string; error: boolean }
	phone: { value: string; error: boolean }
	message: { value: string; error: boolean }
}

type IBlur = FocusEvent<HTMLInputElement | HTMLTextAreaElement>

const Contact = () => {
	const { t } = useTranslation()
	const [sendButtonText, setSendButtonText] = useState(t['contact.submit'])
	const [formInfo, setFormInfo] = useState<IFormInfo>({} as IFormInfo)

	const handleFormBlur = ({ target }: IBlur, id: keyof IFormInfo) => {
		const validations = { email: patterns.email, phone: patterns.phone }
		const value = target.value

		if (validations[id]) {
			const regex = validations[id]

			if (!regex.test(value)) {
				setFormInfo((prev) => ({ ...prev, [id]: { value, error: true } }))
				return
			}
		}

		return setFormInfo((prev) => ({ ...prev, [id]: { value, error: false } }))
	}

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault()

		const has_error = Object.entries(formInfo)
			.map(([_, entry]) => entry.error)
			.some(Boolean)

			console.log({ has_error })

		if (has_error) return

		setSendButtonText(t['contact.submit.loading'])

		const formDataEntries = Object.entries(formInfo).map(([key, entry]) => [
			key,
			entry.value,
		])

		const email_body: IFormEmail = Object.fromEntries(formDataEntries)
		const { data } = await sendEmail(email_body)

		if (!data.success) {
			const error_message =
				'Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde'

			alert(error_message)
			setSendButtonText(t['contact.submit'])
		}

		// everything went ok
		setSendButtonText(t['contact.submit.success'])
	}

	const InfoBox: React.FC<IInfoBox> = ({ iconPath, message }) => (
		<div className={styles['info-box']}>
			<SVG src={iconPath} />
			<span>{message}</span>
		</div>
	)

	return (
		<section className={styles.contact} id="contact">
			<Title isCentered>{t['contact.title']}</Title>

			<div className={styles.content}>
				<form className={styles['contact-form']} onSubmit={handleSubmit}>
					{/* LEFT SIDE */}
					<div
						className={`${styles.input} ${
							formInfo?.name?.value ? styles.success : ''
						} ${formInfo?.name?.error ? styles.error : ''}`}
					>
						<input
							id="name"
							type="text"
							onBlur={(e) => handleFormBlur(e, 'name')}
							placeholder={t['contact.name']}
							required
						/>

						<Checkbox cssModule={styles} isActive={!!formInfo?.name?.value} />
					</div>

					<div
						className={`${styles.input} ${
							formInfo?.email?.value ? styles.success : ''
						} ${formInfo?.email?.error ? styles.error : ''}`}
					>
						<input
							id="email"
							type="email"
							onBlur={(e) => handleFormBlur(e, 'email')}
							placeholder={t['contact.email']}
							required
						/>

						<Checkbox cssModule={styles} isActive={!!formInfo?.email?.value} />
					</div>

					<div
						className={`${styles.input} ${
							formInfo?.phone?.value ? styles.success : ''
						} ${formInfo?.phone?.error ? styles.error : ''}`}
					>
						<input
							id="phone"
							type="tel"
							onBlur={(e) => handleFormBlur(e, 'phone')}
							placeholder={t['contact.phone']}
							required
						/>

						<Checkbox cssModule={styles} isActive={!!formInfo?.phone?.value} />
					</div>

					<div className={styles.textarea}>
						<textarea
							id="message"
							onBlur={(e) => handleFormBlur(e, 'message')}
							placeholder={t['contact.message']}
							required
						/>

						<button className="button" id="submit">
							{sendButtonText}
						</button>
					</div>
				</form>

				{/* RIGHT SIDE */}
				<div className={styles['contact-info']}>
					<InfoBox
						iconPath="/icons/phone.svg"
						message={`${t['contact.phone']}: +55 11 4193-4591`}
					/>
					<InfoBox
						iconPath="/icons/email.svg"
						message={`${t['contact.email']}: contato@agenciaeconverse.com.br`}
					/>

					<AgencyLocation />
				</div>
			</div>
		</section>
	)
}

export default Contact
