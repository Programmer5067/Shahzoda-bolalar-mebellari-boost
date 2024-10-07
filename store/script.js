document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown-mun")

    dropdowns.forEach((dropdown) => {
        const select = dropdown.querySelector(".select-mun")
        const selected = dropdown.querySelector(".selected-mun")
        const caret = select.querySelector(".caret-mun")
        const dropdown_menu = dropdown.querySelector(".dropdown-menu-mun")
        const options = dropdown.querySelectorAll(".dropdown-menu-item-mun")

        select.addEventListener("click", () => {
            select.classList.toggle("select-clicked-mun")
            caret.classList.toggle("caret-rotate-mun")
            dropdown_menu.classList.toggle("menu-open-mun")
        })

        options.forEach((option) => {
            option.addEventListener("click", () => {
                selected.innerText = option.innerText
                select.classList.remove("select-clicked-mun")
                caret.classList.remove("caret-rotate-mun")
                dropdown_menu.classList.remove("menu-open-mun")
                options.forEach((option) => {
                    option.classList.remove("active-mun")
                })
                option.classList.add("active-mun")
            })
        })

        const car_block = document.querySelectorAll(".car-block")
        const parta_block = document.querySelectorAll(".parta-block")
        const shkaf_block = document.querySelectorAll(".shkaf-block")
        const komplekt_block = document.querySelectorAll(".komplekt-block")
        const car_option = document.querySelector(".kravat")
        const parta_option = document.querySelector(".parta")
        const shkaf_option = document.querySelector(".shkaf")
        const komplekt_option = document.querySelector(".komplekt")

        options.forEach((option) => {
            option.addEventListener("click", function () {
                selected.textContent = this.textContent

                car_block.forEach((block) => (block.style.display = "block"))
                parta_block.forEach((block) => (block.style.display = "block"))
                shkaf_block.forEach((block) => (block.style.display = "block"))
                komplekt_block.forEach((block) => (block.style.display = "block"))

                if (this === car_option) {
                    parta_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "none"))
                    car_block.forEach((block) => (block.style.display = "block"))
                } else if (this === parta_option) {
                    car_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "none"))
                    parta_block.forEach((block) => (block.style.display = "block"))
                } else if (this === shkaf_option) {
                    car_block.forEach((block) => (block.style.display = "none"))
                    parta_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "block"))
                } else if (this === komplekt_option) {
                    car_block.forEach((block) => (block.style.display = "none"))
                    parta_block.forEach((block) => (block.style.display = "none"))
                    shkaf_block.forEach((block) => (block.style.display = "none"))
                    komplekt_block.forEach((block) => (block.style.display = "block"))
                }
            })
        })
    })
})
