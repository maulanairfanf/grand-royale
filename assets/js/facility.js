// Data heading
const heading = {
	subtitle: '| Facility',
	caption:
		'Hidup nyaman, lengkap dengan fasilitas modern untuk seluruh keluarga.',
}

// Data fasilitas
const facilities = [
	{
		title: 'Taman Bermain',
		description: 'Area bermain anak-anak yang luas dan aman.',
		icon: 'fa fa-child',
	},
	{
		title: 'Kolam Renang',
		description: 'Kolam renang untuk keluarga dan anak-anak.',
		icon: 'fa fa-swimming-pool',
	},
	{
		title: 'Keamanan 24 Jam',
		description: 'Sistem keamanan CCTV dan petugas keamanan.',
		icon: 'fa fa-shield-alt',
	},
	{
		title: 'Lapangan Olahraga',
		description: 'Lapangan futsal dan basket yang modern.',
		icon: 'fa fa-basketball-ball',
	},
]

// Render heading
const headingContainer = document.getElementById('heading-container')
headingContainer.innerHTML = `
            <div class="col-lg-4 offset-lg-4">
                <div class="section-heading text-center">
                    <h6>${heading.subtitle}</h6>
                    <h2>${heading.caption}</h2>
                </div>
            </div>
        `

// Render fasilitas
const facilityContainer = document.getElementById('facility-container')
facilities.forEach(facility => {
	facilityContainer.innerHTML += `
                <div class="col-md-6 col-lg-3 mb-4">
                    <div class="facility-card">
                        <div class="facility-icon">
                            <i class="${facility.icon}"></i>
                        </div>
                        <div class="facility-title">${facility.title}</div>
                        <div class="facility-description">${facility.description}</div>
                    </div>
                </div>
            `
})
