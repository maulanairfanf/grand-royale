// Data heading
const headingExplanation = {
	subtitle: '| Tipe Hunian',
	caption: 'Pilih tipe hunian sesuai kebutuhan Anda',
}

// Data tipe hunian
const contentExplanation = [
	{
		title: 'Type Standard',
		description:
			'Tata ruang yang sudah ditentukan oleh developer dengan penjualan harga standar.',
		icon: 'fa fa-home',
	},
	{
		title: 'Type Custom',
		description:
			'Dirubah dalam spek sesuai dengan persetujuan konsumen secara harga custom tanpa merubah tata ruang dan ukuran bangunan.',
		icon: 'fa fa-pencil-alt',
	},
	{
		title: 'Type Upgrade',
		description:
			'Tata ruang yang ditentukan konsumen dengan perubahan bentuk dan ukuran bangunan baik secara tipe maupun spesifikasi.',
		icon: 'fa fa-expand',
	},
]

// Render heading
let explanationHeadingContainer = document.getElementById(
	'explanation-heading-container'
)
explanationHeadingContainer.innerHTML = `
  <div class="col-lg-4 offset-lg-4">
      <div class="section-heading text-center">
          <h6>${headingExplanation.subtitle}</h6>
          <h2>${headingExplanation.caption}</h2>
      </div>
  </div>
`

// Render tipe hunian
let explanationContentContainer = document.getElementById(
	'explanation-content-container'
)
contentExplanation.forEach(type => {
	explanationContentContainer.innerHTML += `
      <div class="col-md-4">
          <div class="facility-card">
              <div class="facility-icon">
                  <i class="${type.icon}"></i>
              </div>
              <div class="facility-title">${type.title}</div>
              <div class="facility-description">${type.description}</div>
          </div>
      </div>
  `
})
