const scriptURL =
	'https://script.google.com/macros/s/AKfycbybzoUlwnGR-iy9pnXjg4rFwLdymW1uFojMXoiQikhazaxxVozk5RCQGq9qvxVRgVa0/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
	e.preventDefault()
	console.log('form', form)
	fetch(scriptURL, { method: 'POST', body: new FormData(form) })
		.then(response => alert('Thank you! Form is submitted'))
		.then(() => {
			window.location.reload()
		})
		.catch(error => console.error('Error!', error.message))
})
