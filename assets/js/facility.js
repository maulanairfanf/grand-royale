// Data heading
const headingFacility = {
	subtitle: '| Facility',
	caption:
		'Hidup nyaman, lengkap dengan fasilitas modern untuk seluruh keluarga.',
}

// Data fasilitas
const contentFacilities = [
	{
		title: 'Taman Bermain',
		description: 'Area bermain anak-anak yang luas dan aman.',
		icon: 'fa fa-child',
	},
	{
		title: 'Komersil Area',
		description: 'Deretan ruko untuk kebutuhan bisnis dan usaha.',
		icon: 'fa fa-store',
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
let facilityHeadingContainer = document.getElementById(
	'facilitiy-heading-container'
)
facilityHeadingContainer.innerHTML = `
            <div class="col-lg-6 offset-lg-3">
                <div class="section-heading text-center">
                    <h6>${headingFacility.subtitle}</h6>
                    <h2>${headingFacility.caption}</h2>
                </div>
            </div>
        `

// Render fasilitas
let facilityContentContainer = document.getElementById(
	'facility-content-container'
)
contentFacilities.forEach(facility => {
	facilityContentContainer.innerHTML += `
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
