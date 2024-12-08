document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        // Toggle the visibility of the answer
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-form input");
    const searchButton = document.querySelector(".search-button");
    const faqItems = document.querySelectorAll(".faq-item");

    // Event handler untuk tombol search
    searchButton.addEventListener("click", function (event) {
        event.preventDefault(); // Mencegah reload halaman

        const query = searchInput.value.toLowerCase().trim(); // Ambil input pengguna
        faqItems.forEach(item => {
            const question = item.querySelector(".faq-question").textContent.toLowerCase();
            const answer = item.querySelector(".faq-answer").textContent.toLowerCase();

            // Periksa apakah query ditemukan dalam question atau answer
            if (question.includes(query) || answer.includes(query)) {
                item.style.display = "block"; // Tampilkan jika cocok
            } else {
                item.style.display = "none"; // Sembunyikan jika tidak cocok
            }
        });
    });

    // Reset FAQ saat input kosong
    searchInput.addEventListener("input", function () {
        if (searchInput.value.trim() === "") {
            faqItems.forEach(item => {
                item.style.display = "block"; // Tampilkan semua
            });
        }
    });
});
