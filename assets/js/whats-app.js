// Dapatkan elemen dengan ID 'whatsapp-logo'
const whatsappLogo = document.getElementById('whatsapp-logo')

// Buat elemen anchor (link)
const anchor = document.createElement('a')
anchor.href = 'https://wa.me/6281234567890' // Ganti nomor telepon dengan nomor kamu
anchor.target = '_blank' // Membuka WhatsApp di tab baru

// Buat elemen gambar
const img = document.createElement('img')
img.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg' // URL logo WhatsApp
img.alt = 'WhatsApp Logo'

// Tambahkan elemen gambar ke dalam anchor
anchor.appendChild(img)

// Tambahkan anchor ke dalam div dengan ID 'whatsapp-logo'
whatsappLogo.appendChild(anchor)
