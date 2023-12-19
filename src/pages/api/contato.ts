import type { NextApiRequest, NextApiResponse } from 'next'

import nodemailer from 'nodemailer'

interface IRequestBodyType extends IFormEmail {
	//...
}

export default function (req: NextApiRequest, res: NextApiResponse) {
	// THIS ROUTE RECEIVES A POST REQUEST!

	const EMAIL = process.env.EMAIL_ADDRESS
	const PASSWORD = process.env.EMAIL_PASSWORD
	const { name, email, phone, message }: IRequestBodyType = req.body
	const REQUIRED_PARAMS = [name, email, phone, message]

	const isMissingRequiredParams =
		REQUIRED_PARAMS.filter(Boolean).length !== REQUIRED_PARAMS.length

	if (isMissingRequiredParams) {
		const message = 'Missing required parameters in request body!'

		return res.status(422).json({ success: false, message })
	}

	const TRANSPORTER = nodemailer.createTransport({
		port: 465,
		secure: true,
		host: 'smtp.gmail.com',
		auth: { user: EMAIL, pass: PASSWORD },
		tls: { rejectUnauthorized: false },
	})

	const MAIL_DATA = {
		from: 'Econverse <site@econverse.com.br>',
		to: EMAIL,
		subject: `Formulário Site Econverse - ${name}`,
		text: `Nome: ${name} | Email: ${email} | Telefone: ${phone} | Mensagem: ${message}`,
		html: `
      <ul>
        <li><strong>Nome:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Telefone:</strong> ${phone}</li>
        <li><strong>Mensagem:</strong> ${message}</li>
      </ul>
    `,
	}

	TRANSPORTER.sendMail(MAIL_DATA, (err, info) => {
		if (err) {
			res.status(400).json({ success: false, message: err })
			return
		}

		// everything went ok
		res.status(200).json({ success: true, message: info })
	})
}
