// Data heading untuk lokasi dan investasi
const headingLocationInvestment = {
	subtitle: '| Lokasi Strategis & Investasi',
	caption:
		'Grand Royale Slawi terletak di lokasi strategis dekat berbagai sarana penunjang dan akses transportasi mudah.',
}

// Data lokasi dan investasi
const contentLocationInvestment = [
	{
		title: 'Rumah Sakit Terdekat',
		description:
			'Dekat dengan rumah sakit untuk kebutuhan medis yang cepat dan mudah dijangkau.',
		icon: 'fa fa-hospital',
	},
	{
		title: 'Perbankan',
		description:
			'Tersedia berbagai fasilitas perbankan untuk kenyamanan transaksi finansial Anda.',
		icon: 'fa fa-university',
	},
	{
		title: 'Akses Transportasi Mudah',
		description:
			'Terletak di jalan Nasional yang memudahkan akses ke berbagai lokasi.',
		icon: 'fa fa-road',
	},
	{
		title: 'Nilai Investasi Meningkat',
		description:
			'Lokasi yang strategis meningkatkan nilai investasi hunian Anda.',
		icon: 'fa fa-chart-line',
	},
]

// Render heading lokasi dan investasi
let locationInvestmentHeadingContainer = document.getElementById(
	'location-investment-heading-container'
)
locationInvestmentHeadingContainer.innerHTML = `
  <div class="col-lg-8 offset-lg-2">
      <div class="section-heading text-center">
          <h6>${headingLocationInvestment.subtitle}</h6>
          <h2>${headingLocationInvestment.caption}</h2>
      </div>
  </div>
`

// Render konten lokasi dan investasi
let locationInvestmentContentContainer = document.getElementById(
	'location-investment-content-container'
)
contentLocationInvestment.forEach(item => {
	locationInvestmentContentContainer.innerHTML += `
      <div class="col-md-6 col-lg-3 mb-4">
          <div class="facility-card">
              <div class="facility-icon">
                  <i class="${item.icon}"></i>
              </div>
              <div class="facility-title">${item.title}</div>
              <div class="facility-description">${item.description}</div>
          </div>
      </div>
  `
})
