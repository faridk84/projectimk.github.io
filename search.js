document.getElementById('search-button').addEventListener('click', function () {
    const searchQuery = document.getElementById('search-input').value.toLowerCase(); // Input pencarian
    const faqItems = document.querySelectorAll('.faq-item'); // Semua item FAQ

    faqItems.forEach(item => {
        const keywords = item.getAttribute('data-keywords').toLowerCase(); // Ambil keywords
        const question = item.querySelector('.faq-question').textContent.toLowerCase(); // Ambil teks pertanyaan
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase(); // Ambil teks jawaban

        // Cek apakah pencarian cocok dengan keywords, pertanyaan, atau jawaban
        if (
            keywords.includes(searchQuery) || 
            question.includes(searchQuery) || 
            answer.includes(searchQuery)
        ) {
            item.style.display = 'block'; // Tampilkan jika cocok
        } else {
            item.style.display = 'none'; // Sembunyikan jika tidak cocok
        }
    });
});
