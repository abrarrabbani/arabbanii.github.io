// script.js

document.addEventListener("DOMContentLoaded", () => {
    // Menambahkan efek shadow pada tombol ketika mouse masuk dan keluar
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(btn => {
      btn.addEventListener("mouseenter", () => {
        btn.classList.add("shadow-lg");
      });
      btn.addEventListener("mouseleave", () => {
        btn.classList.remove("shadow-lg");
      });
    });
  
    // Menambahkan event listener untuk klik tombol kirim email
    const btnEmail = document.querySelector('.btn-outline-primary');
    btnEmail.addEventListener('click', () => {
      alert('Terima kasih telah menghubungi saya!');
    });
  });
  