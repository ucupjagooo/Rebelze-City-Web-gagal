// Mengaktifkan library AOS (Animate On Scroll)
AOS.init({
    duration: 1000, // Durasi animasi (dalam milidetik)
    once: true      // Animasi hanya terjadi sekali saat elemen muncul
});

// ... (di dalam checkPassword)
if (input === CORRECT_PASSWORD) {
    sessionStorage.setItem(PASSWORD_SESSION_KEY, 'true');
    localStorage.removeItem(ATTEMPTS_LEFT_KEY); // Reset attempts upon success
    document.getElementById('password-gate').classList.add('hidden');
    document.getElementById('main-shop-content').classList.remove('hidden-content');
    initializeShop(); 
}
// ...