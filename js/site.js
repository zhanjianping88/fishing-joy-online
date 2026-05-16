(function () {
    const body = document.body;
    const basePath = body.dataset.basePath || "./";
    const currentPage = body.dataset.page || "";

    const navItems = [
        { key: "home", label: "Home", href: `${basePath}` },
        { key: "play", label: "Play", href: `${basePath}play/deep-sea-mode/` },
        { key: "game", label: "Featured Game", href: `${basePath}game/` },
        { key: "blog", label: "Blog", href: `${basePath}blog/` },
        { key: "about", label: "About", href: `${basePath}about/` },
        { key: "privacy", label: "Privacy", href: `${basePath}privacy/` },
        { key: "terms", label: "Terms", href: `${basePath}terms/` },
        { key: "contact", label: "Contact", href: `${basePath}contact/` },
        { key: "license", label: "License", href: `${basePath}license.html` }
    ];

    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");

    if (headerTarget) {
        headerTarget.innerHTML = `
            <header class="site-header">
                <div class="nav-inner">
                    <a class="brand" href="${basePath}">
                        <span class="brand-mark">OA</span>
                        <span class="brand-copy">
                            <strong>Ocean Arcade Game</strong>
                            <span>Free browser arcade games</span>
                        </span>
                    </a>
                    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
                    <nav id="site-nav" class="site-nav" aria-label="Main navigation">
                        ${navItems.map((item) => `
                            <a href="${item.href}" class="${item.key === currentPage ? "is-active" : ""}">${item.label}</a>
                        `).join("")}
                    </nav>
                </div>
            </header>
        `;
    }

    if (footerTarget) {
        footerTarget.innerHTML = `
            <footer class="site-footer">
                <div class="footer-inner">
                    <div class="footer-brand">
                        <span class="brand-mark">OA</span>
                        <span class="brand-copy">
                            <strong>Ocean Arcade Game</strong>
                            <span>Ocean blue browser arcade portal</span>
                        </span>
                    </div>
                    <div class="footer-links">
                        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
                    </div>
                    <p class="footer-note">
                        Ocean Arcade Game keeps browser play front and center, gives support content room to breathe, and preserves the original open source attribution for
                        <a href="https://github.com/imtonyjaa/ggemu-fishing-joy" target="_blank" rel="noopener noreferrer">ggemu-fishing-joy</a>
                        on the license page.
                    </p>
                    <p class="footer-meta">
                        &copy; <span id="footer-year"></span> Ocean Arcade Game. Free browser fishing runs, arcade side routes, and readable ad-safe layouts.
                    </p>
                </div>
            </footer>
        `;
    }

    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.getElementById("site-nav");

    if (navToggle && siteNav) {
        navToggle.addEventListener("click", function () {
            const expanded = navToggle.getAttribute("aria-expanded") === "true";
            navToggle.setAttribute("aria-expanded", String(!expanded));
            siteNav.classList.toggle("is-open", !expanded);
        });
    }

    const yearTarget = document.getElementById("footer-year");
    if (yearTarget) {
        yearTarget.textContent = String(new Date().getFullYear());
    }

    const fullscreenButtons = document.querySelectorAll("[data-fullscreen-target]");
    fullscreenButtons.forEach(function (button) {
        button.addEventListener("click", async function () {
            const targetId = button.getAttribute("data-fullscreen-target");
            const target = targetId ? document.getElementById(targetId) : null;

            if (!target || !document.fullscreenEnabled) {
                return;
            }

            try {
                if (document.fullscreenElement === target) {
                    await document.exitFullscreen();
                } else {
                    await target.requestFullscreen();
                }
            } catch (error) {
                console.warn("Fullscreen failed:", error);
            }
        });
    });
})();
