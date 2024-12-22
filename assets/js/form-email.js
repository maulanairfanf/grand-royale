function createContactForm() {
	const form = document.createElement('form')
	form.id = 'contactForm'
	form.className = 'row' // Add Bootstrap row class for layout
	form.name = 'contact-form'
	form.method = 'post'

	// Create a single row for the fields and button
	const fieldGroup = document.createElement('div')
	fieldGroup.className = 'd-flex col-12' // Use flex to align items

	const fields = [
		{ name: 'name', label: 'Name', type: 'text', id: 'name', required: true },
		{
			name: 'email',
			label: 'Email',
			type: 'email',
			id: 'email',
			required: true,
		},
		{
			name: 'number',
			label: 'Phone Number',
			type: 'number',
			id: 'phone',
			required: true,
			pattern: '[0-9]*',
		},
	]

	fields.forEach(field => {
		const formGroup = document.createElement('div')
		formGroup.className = 'form-group col-md-3 p-2' // Each field takes 1/3 of the row

		const label = document.createElement('label')
		label.setAttribute('for', field.id)
		label.textContent = field.label
		formGroup.appendChild(label)

		const input = document.createElement('input')
		input.type = field.type
		input.id = field.id
		input.className = 'form-control'
		input.required = field.required
		input.name = field.name
		if (field.pattern) {
			input.setAttribute('pattern', field.pattern)
		}
		formGroup.appendChild(input)

		fieldGroup.appendChild(formGroup)
	})

	// Create the main button for submission
	const mainButtonDiv = document.createElement('div')
	mainButtonDiv.className =
		'main-button col-md-3 p-2 position-relative d-flex align-items-center' // Align with the fields

	const submitButton = document.createElement('button') // Change to button element
	submitButton.className =
		'detail-button btn button-orange w-100 text-center mt-4' // Bootstrap button class
	submitButton.type = 'submit' // Set type to submit
	submitButton.textContent = 'Submit'

	// Handle form submission
	form.addEventListener('submit', function (event) {
		event.preventDefault()
		if (form.checkValidity()) {
			const formData = {
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				phone: document.getElementById('phone').value,
			}
			sendEmailToYourEmail(formData) // Kirim data ke email Anda
			sendToSpreedSheet()
			// sendHelloEmail(formData.email) // Kirim "hello" ke email yang diisi
		} else {
			form.reportValidity() // Show validation errors
		}
	})

	mainButtonDiv.appendChild(submitButton)
	fieldGroup.appendChild(mainButtonDiv) // Add the button to the same row

	form.appendChild(fieldGroup) // Append the entire field group to the form

	return form
}

async function sendEmailToYourEmail(data) {
	const serviceID = 'service_tgvkwod' // Your service ID
	const templateID = 'template_mwckqt8' // Your template ID

	await emailjs.send(serviceID, templateID, data).then(
		() => {
			// Show toast notification after sending
			createToast('Form berhasil dikirim!')
			// Reset form fields after submission
			document.getElementById('contactForm').reset()
		},
		err => {
			console.error('Failed to send email:', err)
		}
	)
}

function sendHelloEmail(recipientEmail) {
	const serviceID = 'service_f78rjal' // Your service ID
	const helloTemplateID = 'template_2rq471u' // ID template untuk pesan "hello"

	const data = {
		to_email: recipientEmail,
		message: 'hello', // Pesan yang ingin dikirim
	}

	emailjs.send(serviceID, helloTemplateID, data).then(
		() => {
			console.log('Hello email sent successfully')
			// Show toast notification after sending hello email
			createToast('Pesan "hello" berhasil dikirim ke ' + recipientEmail)
		},
		err => {
			console.error('Failed to send hello email:', err)
		}
	)
}

async function sendToSpreedSheet() {
	const scriptURL =
		'https://script.google.com/macros/s/AKfycbybzoUlwnGR-iy9pnXjg4rFwLdymW1uFojMXoiQikhazaxxVozk5RCQGq9qvxVRgVa0/exec'

	const form = document.forms['contact-form']
	console.log('sendToSpreedSheet form', form)

	await form.addEventListener('submit', e => {
		e.preventDefault()

		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => console.log('response', response))
			.catch(error => console.error('Error!', error.message))
	})
}

function createToast(message) {
	const toastContainer = document.createElement('div')
	toastContainer.className = 'toast-container position-fixed top-0 end-0 p-3'
	const toast = document.createElement('div')
	toast.id = 'liveToast'
	toast.className = 'toast'
	toast.role = 'alert'
	toast.ariaLive = 'assertive'
	toast.ariaAtomic = 'true'

	toast.innerHTML = `
		<div class="toast-header" style="background-color: #f35525;">
			<strong class="me-auto text-white">Notifikasi</strong>
			<button type="button" class="btn-close bg-white rounded" data-bs-dismiss="toast" aria-label="Close"></button>
		</div>
		<div class="toast-body bg-white">
			${message}
		</div>
	`

	toastContainer.appendChild(toast)
	document.body.appendChild(toastContainer) // Append toast to body

	// Initialize and show the toast
	const bsToast = new bootstrap.Toast(toast)
	bsToast.show()
}

document.getElementById('contactFormContainer').appendChild(createContactForm())
