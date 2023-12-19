import axios from 'axios'

interface ISendEmail {
	success: boolean
	message: string
}

async function sendEmail(body_data: IFormEmail) {
	const API_URL = '/api/contato'

	const response = await axios.post<ISendEmail>(API_URL, body_data)

	return response
}

export default sendEmail
