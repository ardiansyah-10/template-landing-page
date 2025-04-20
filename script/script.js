// script/script.js

document.addEventListener("DOMContentLoaded", () => {
  // Tampilkan SweetAlert popup selamat datang
  Swal.fire({
    title: "Halo Sayang❣️",
    text: "Klik mulai sayang, aku baru coba-coba aja ini hehe",
    imageUrl: "assets/img/kepala_kebo-4.png",
    imageWidth: 150,
    imageHeight: 150,
    imageAlt: "Ikon Selamat Datang",
    confirmButtonText: "Mulai",
    customClass: {
      confirmButton: "custom-swal-button",
    },
  });

  // Toggle menu burger
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burger.classList.toggle("toggle");
  });

  // Tutup menu saat klik link (untuk mobile)
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      burger.classList.remove("toggle");
    });
  });

  // Smooth scroll untuk navigasi
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const navbar = document.querySelector(".navbar");
      const target = document.querySelector(this.getAttribute("href"));
      const offset = navbar.offsetHeight;
      const elementPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    });
  });

  const navbar = document.querySelector(".navbar");
  const firstSection = document.getElementById("sec-1");

  const setMarginTop = () => {
    const navbarHeight = navbar.offsetHeight;
    firstSection.style.marginTop = `${navbarHeight}px`;
  };

  // Set margin-top saat halaman dimuat
  setMarginTop();

  // Set margin-top saat ukuran layar berubah (responsive)
  window.addEventListener("resize", setMarginTop);
});
