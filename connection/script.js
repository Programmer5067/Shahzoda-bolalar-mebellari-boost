document.addEventListener("DOMContentLoaded", () => {
    if (document.body.clientWidth <= 1000) {
        const num = document.body.querySelector(".num")
        if (num) {
            num.addEventListener("click", function () {
                num.href = "tel:+998998531616"
            })
        }
    }
})
