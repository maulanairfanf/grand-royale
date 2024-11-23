document.addEventListener('DOMContentLoaded', function () {
	const contactUsElements = document.querySelectorAll('.contact-us')

	contactUsElements.forEach(element => {
		const jsonFilePath = element.getAttribute('data-json')

		fetch(jsonFilePath)
			.then(response => response.json())
			.then(data => {
				const contactSectionHTML = `
									<div class="contact section" >
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
									</div>
									`

				element.innerHTML = contactSectionHTML
			})
			.catch(error => {
				console.error('Error loading JSON data:', error)
			})
	})
})
