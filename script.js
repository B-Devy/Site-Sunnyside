const btn = document.getElementById('hamburger');
const nav = document.getElementById('navigateur');

btn.addEventListener("click", () => {
    nav.classList.toggle('active');
    btn.classList.toggle('active')
});

