$(document).ready(function () {
	$.getJSON('assets/json/perumahan-1/properties.json', function (data) {
		var propertiesHtml = ''

		data.forEach(function (property) {
			propertiesHtml += `
							<div class="col-lg-4 col-md-6">
									<div class="item">
											<a href="${property.details_link}">
													<img src="${property.image}" alt=""/>
											</a>
											<span class="category">${property.category}</span>
											<h6>${property.price}</h6>
											<h4>
													<a >${property.type}</a>
											</h4>
											<ul>
													<li>Building: <span>${property.building}</span></li>
													<li>Land: <span>${property.land}</span></li>
													<li>Floor: <span>${property.floor}</span></li>
											</ul>
											<div class="main-button">
													<a href="${property.details_link}">Schedule a visit</a>
											</div>
									</div>
							</div>`
		})

		$('.properties #content').html(propertiesHtml)
	})
})
