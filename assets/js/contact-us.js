document.addEventListener('DOMContentLoaded', function () {
	// Ambil semua elemen dengan kelas 'contact-us'
	const contactUsElements = document.querySelectorAll('.contact-us')

	// Iterasi melalui setiap elemen 'contact-us'
	contactUsElements.forEach(element => {
		// Ambil path file JSON dari atribut data-json
		const jsonFilePath = element.getAttribute('data-json')

		// Ambil data dari file JSON
		fetch(jsonFilePath)
			.then(response => response.json())
			.then(data => {
				// Buat HTML untuk kontak
				const contactsHTML = data.contacts
					.map(
						contact => `
											<div class="col-lg-6">
													<a href="https://wa.me/${contact.phone.replace('+', '')}" target="_blank">
															<div class="item phone">
																	<img src="${contact.image}" alt="Phone Icon" style="max-width: 52px" />
																	<h6>${contact.phone}<br /><span>${contact.name}</span></h6>
															</div>
													</a>
											</div>
									`
					)
					.join('')

				// Buat HTML untuk seluruh bagian
				const contactSectionHTML = `
									<div class="contact section" id="contact">
											<div class="container">
													<div class="row">
															<div class="col-lg-4 offset-lg-4">
																	<div class="section-heading text-center">
																			<h6>| Contact Us</h6>
																			<h2>Get In Touch With Grand Royale Agents ${data.location}</h2>
																	</div>
															</div>
													</div>
											</div>
									</div>

									<div class="contact-content">
											<div class="container">
													<div class="row">
															<div class="col-12">
																	<div id="map">
																			<iframe
																					src="${data.mapSrc}"
																					width="100%"
																					height="500px"
																					frameborder="0"
																					style="border: 0; border-radius: 10px; box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);"
																					allowfullscreen=""
																			></iframe>
																	</div>
															</div>
													</div>

											</div>
									</div>`

				// Masukkan HTML ke dalam elemen saat ini
				element.innerHTML = contactSectionHTML
			})
			.catch(error => {
				console.error('Error loading JSON data:', error)
			})
	})
})
