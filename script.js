// --- 1. DATA KONTEN LENGKAP ---
// Gambar menggunakan link Unsplash yang spesifik dan vibrant
const baliData = [
    {
        title: "Tari Kecak Uluwatu",
        category: "Seni Tari",
        image: "img/TARI KECAK.jpg", 
        description: "Pertunjukan magis berlatar sunset dengan paduan suara 'Cak' yang menghipnotis."
    },
    {
        title: "Sate Lilit Ikan",
        category: "Kuliner Khas",
        image: "img/SATE LILIT.WEBP", 
        description: "Daging ikan laut segar dicincang dengan kelapa parut dan bumbu genep, dililit batang serai."
    },
    {
        title: "Tari Legong Keraton",
        category: "Seni Tari",
        image: "img/TARI LEGONG.jpeg",
        description: "Keanggunan gerak mata dan jari penari keraton dalam balutan busana emas yang mewah."
    },
    {
        title: "Ayam Betutu Gilimanuk",
        category: "Kuliner Khas",
        image: "img/AYAM BETUTU.jpg",
        description: "Ayam kampung utuh yang dimasak lambat dalam sekam dengan bumbu rempah super pedas."
    },
    {
        title: "Canang Sari",
        category: "Tradisi",
        image: "img/CANANG.jpg", 
        description: "Persembahan bunga warna-warni sebagai wujud rasa syukur harian masyarakat Bali."
    },
    {
        title: "Pura Ulun Danu",
        category: "Arsitektur",
        image: "img/PURA.webp",
        description: "Keharmonisan pura terapung di Danau Beratan dengan latar bukhttps://images.unsplash.com/it berkabut."
    }
];

// --- 2. RENDER KARTU ---
const cardContainer = document.getElementById('cardContainer');
const noResult = document.getElementById('noResult');

function renderCards(data) {
    cardContainer.innerHTML = '';
    if (data.length === 0) {
        noResult.style.display = 'block';
    } else {
        noResult.style.display = 'none';
        data.forEach((item, index) => {
            // Tambahkan delay animasi per kartu
            const delay = index * 100; 
            const cardHTML = `
                <div class="card reveal-on-scroll" style="transition-delay: ${delay}ms">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="card-overlay">
                        <span class="card-tag">${item.category}</span>
                        <h3>${item.title}</h3>
                        <div class="card-desc">${item.description}</div>
                    </div>
                </div>
            `;
            cardContainer.innerHTML += cardHTML;
        });
        // Re-init observer untuk kartu baru
        observeElements();
    }
}

renderCards(baliData);

// --- 3. FITUR PENCARIAN ---
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const filteredData = baliData.filter(item => 
        item.title.toLowerCase().includes(keyword) || 
        item.category.toLowerCase().includes(keyword)
    );
    renderCards(filteredData);
});

// --- 4. SCROLL ANIMATION (REVEAL) ---
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 }); // Muncul ketika 10% elemen terlihat

    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
}

observeElements(); // Jalankan saat load

// --- 5. NAVBAR SCROLL EFFECT ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

// --- 6. HERO SLIDER ---
const slides = document.querySelectorAll('.slide');
const heroText = document.getElementById('heroText');
let currentSlide = 0;

const heroContent = [
    { title: "Keanggunan Tari Bali", sub: "Warisan Nusantara" },
    { title: "Eksotisme Pura Lempuyang", sub: "Gerbang Surga" },
    { title: "Cita Rasa Ayam Betutu", sub: "Kuliner Legendaris" }
];

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    
    // Ubah Teks
    document.getElementById('heroTitle').innerText = heroContent[currentSlide].title;
    document.querySelector('.hero-category').innerText = heroContent[currentSlide].sub;
}

setInterval(nextSlide, 5000);