document.addEventListener("DOMContentLoaded", () => {

    /* =================================================
       PROJECT FILTER
    ================================================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projects =
        document.querySelectorAll(".project-item");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.dataset.filter;


            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            projects.forEach(project => {

                const category =
                    project.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    project.style.display = "";

                    setTimeout(() => {

                        project.style.opacity = "1";

                    }, 10);

                } else {

                    project.style.opacity = "0";

                    setTimeout(() => {

                        project.style.display = "none";

                    }, 200);

                }

            });

        });

    });


    /* =================================================
       NAVBAR SCROLL
    ================================================= */

    const navbar =
        document.querySelector(".custom-navbar");


    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("navbar-scrolled");

        } else {

            navbar.classList.remove("navbar-scrolled");

        }

    });


    /* =================================================
       CLOSE MOBILE MENU
    ================================================= */

    const navLinks =
        document.querySelectorAll(".navbar-nav .nav-link");

    const navbarCollapse =
        document.querySelector(".navbar-collapse");


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (
                navbarCollapse.classList.contains("show")
            ) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(
                        navbarCollapse
                    );

                if (bsCollapse) {

                    bsCollapse.hide();

                }

            }

        });

    });


    /* =================================================
       SIMPLE REVEAL ANIMATION
    ================================================= */

    const revealElements =
        document.querySelectorAll(
            ".service-card, .project-card, .process-card"
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.1
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

});