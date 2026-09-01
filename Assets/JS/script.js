document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".card");

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            // Remove active class from all buttons
            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Add active class to clicked button
            this.classList.add("active");

            // Get selected category
            const selectedFilter = this.getAttribute("data-filter");

            // Show / hide project cards
            projectCards.forEach(function (card) {

                const category = card.getAttribute("data-category");

                if (selectedFilter === "all" || category === selectedFilter) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });


    // Footer year
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
