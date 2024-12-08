document.addEventListener("DOMContentLoaded", () => {
    // Elemen-elemen yang dibutuhkan
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");
    const filterDropdown = document.getElementById("destination-filter");
    const destinationList = document.getElementById("destination-list");

    // Data destinasi
// Data destinasi beserta gambar, deskripsi, dan lokasi (untuk Google Maps)
const destinations = {
    mountain: [
        {
            name: "Mount Salak",
            image: "photos/mountain/salak.jpg",
            description: "A popular hiking spot in West Java.",
            location: "Mount Salak, West Java, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Mount+Salak+West+Java+Indonesia"
        },
        {
            name: "Mount Gede Pangrango",
            image: "photos/mountain/gede.jpg",
            description: "Known for its scenic views and biodiversity.",
            location: "Mount Gede Pangrango, West Java, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Mount+Gede+Pangrango+West+Java+Indonesia"
        },
        {
            name: "Mount Papandayan",
            image: "photos/mountain/papandayan.jpg",
            description: "A beautiful mountain located in Java.",
            location: "Mount Papandayan, Garut, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Mount+Papandayan+Garut+Indonesia"
        }
    ],
    ocean: [
        {
            name: "Ancol Beach",
            image: "photos/beach/ancol.jpg",
            description: "A famous beach in North Jakarta for relaxation.",
            location: "Ancol Beach, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Ancol+Beach+Jakarta+Indonesia"
        },
        {
            name: "Kepulauan Seribu",
            image: "photos/beach/seribu.jpg",
            description: "An archipelago known for its beautiful islands and coral reefs.",
            location: "Kepulauan Seribu, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Kepulauan+Seribu+Jakarta+Indonesia"
        },
        {
            name: "Marunda Beach",
            image: "photos/beach/marunda.jpg",
            description: "A serene beach near Jakarta for weekend getaways.",
            location: "Marunda Beach, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Marunda+Beach+Jakarta+Indonesia"
        }
    ],
    tourism: [
        {
            name: "National Monument (Monas)",
            image: "photos/tourism/monas.jpg",
            description: "A symbol of Indonesian independence located in Jakarta.",
            location: "National Monument, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=National+Monument+Jakarta+Indonesia"
        },
        {
            name: "Taman Mini Indonesia Indah",
            image: "photos/tourism/taman-mini.jpg",
            description: "A cultural park showcasing Indonesia’s diverse culture.",
            location: "Taman Mini Indonesia Indah, Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Taman+Mini+Indonesia+Indah+Jakarta+Indonesia"
        },
        {
            name: "Kota Tua Jakarta",
            image: "photos/tourism/kota-tua.jpg",
            description: "Historical area in Jakarta with colonial-era buildings.",
            location: "Kota Tua Jakarta, Indonesia",
            mapsUrl: "https://www.google.com/maps?q=Kota+Tua+Jakarta+Indonesia"
        }
    ]
};

// Fungsi untuk mengganti daftar destinasi
function updateDestinationList(type) {
    destinationList.innerHTML = ""; // Hapus konten lama

    let allDestinations = type === "all" 
        ? [...destinations.mountain, ...destinations.ocean, ...destinations.tourism]
        : destinations[type];

    // Tambahkan destinasi ke dalam HTML
    allDestinations.forEach(destination => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("result-item");

        resultItem.innerHTML = `
            <img src="${destination.image}" alt="${destination.name}" />
            <h3>${destination.name}</h3>
            <p>${destination.description}</p>
            <small class="location">${destination.location}</small>
            <button class="maps-button" onclick="window.open('${destination.mapsUrl}', '_blank')">Maps</button>
        `;

        destinationList.appendChild(resultItem);
    });
}

    // Event listener untuk dropdown filter
    filterDropdown.addEventListener("change", (e) => {
        const selectedFilter = e.target.value;
        updateDestinationList(selectedFilter);
    });

    // Tab navigasi
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Hapus class active dari semua tab
            tabs.forEach(t => t.classList.remove("active"));
            // Tambah class active pada tab yang diklik
            tab.classList.add("active");

            // Tampilkan konten tab yang sesuai
            const target = tab.getAttribute("data-target");
            contents.forEach(content => {
                if (content.id === target) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });

    // Set filter default ke "all"
    updateDestinationList("all");
});
