document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const mobileMenu = document.getElementById("header--toogle");
    const closeMenu = document.getElementById("close-menu");

    // Mở menu khi nhấn vào hamburger
    mobileMenu.addEventListener("click", function () {
        menu.classList.add("open");
        overlay.classList.add("show");
    });

    // Đóng menu khi nhấn vào overlay hoặc nút đóng
    overlay.addEventListener("click", function () {
        menu.classList.remove("open");
        overlay.classList.remove("show");
    });

    closeMenu.addEventListener("click", function () {
        menu.classList.remove("open");
        overlay.classList.remove("show");
    });
});
