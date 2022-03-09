const acc = document.querySelectorAll('.accordion-header')

acc.forEach((btn) => {
    btn.addEventListener("click", () => {

        btn.classList.toggle("active")
        let panel = btn.nextElementSibling;
        panel.style.maxHeight ? panel.style.maxHeight = null
            : panel.style.maxHeight = panel.scrollHeight + 'px';
    })
})