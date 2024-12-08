window.onload = function() {
    setTimeout(function() {
        // Hiding the loader and showing the content
        document.querySelector('.loader-container').style.display = 'none'; // Menghilangkan loader
        document.querySelector('.content').style.display = 'block'; // Menampilkan konten
    }, 1500); // Menunggu selama 1.5 detik untuk menghapus loader
};

function enterWebsite() {
    window.location.href = "landing-page.html";
}