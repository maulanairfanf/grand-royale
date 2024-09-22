document.addEventListener('DOMContentLoaded', function () {
	const contentElement = document.getElementById('content')
	const jsonFilePath = contentElement.getAttribute('data-json')

	fetch(jsonFilePath)
		.then(response => response.json())
		.then(data => {
			let propertiesHtml = ''

			data.forEach(property => {
				propertiesHtml += `
									<div class="col-lg-4 col-md-6">
											<div class="item">
													<a href="${property.details_link}">
															<img src="${property.image}" alt="" />
													</a>
													<span class="category">${property.category}</span>
													<h6>${property.price}</h6>
													<h4>
															<a>${property.type}</a>
													</h4>
													<ul>
															<li>Building: <span>${property.building}</span></li>
															<li>Land: <span>${property.land}</span></li>
															<li>Floor: <span>${property.floor}</span></li>
													</ul>
													<div class="main-button">
															<a class="detail-button" data-bs-toggle="modal" data-bs-target="#propertyModal" data-property='${JSON.stringify(
																property
															)}'>Detail</a>
													</div>
											</div>
									</div>`
			})

			contentElement.innerHTML = propertiesHtml

			// Event delegation for dynamic button
			contentElement.addEventListener('click', function (e) {
				if (e.target.classList.contains('detail-button')) {
					const property = JSON.parse(e.target.getAttribute('data-property'))
					const modalBody = document.getElementById('modalBody')

					// Populate the modal with property details
					modalBody.innerHTML = `
											<h5>${property.type}</h5>
											<img src="${property.image}" alt="${property.type}" style="width: 400px; height: 400px" />
											<p>Category: ${property.category}</p>
											<p>Price: ${property.price}</p>
											<p>Building: ${property.building}</p>
											<p>Land: ${property.land}</p>
											<p>Floor: ${property.floor}</p>
											<p><a href="${property.details_link}" target="_blank">More Details</a></p>
									`
				}
			})
		})
		.catch(error => {
			console.error('Error loading JSON data:', error)
		})
})
