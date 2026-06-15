(function () {
    const body = document.body;
    const basePath = body.dataset.basePath || "./";
    const currentPage = body.dataset.page || "";

    const navItems = [
        { key: "home", label: "Home", href: `${basePath}` },
        { key: "play", label: "Play", href: `${basePath}deep-sea-mode/` },
        { key: "game", label: "Featured Game", href: `${basePath}game/` },
        { key: "mahjong", label: "Mahjong", href: `${basePath}mahjong/` },
        { key: "blog", label: "Blog", href: `${basePath}blog/` },
        { key: "about", label: "About", href: `${basePath}about/` },
        { key: "privacy", label: "Privacy", href: `${basePath}privacy/` },
        { key: "terms", label: "Terms", href: `${basePath}terms/` },
        { key: "contact", label: "Contact", href: `${basePath}contact/` },
        { key: "license", label: "License", href: `${basePath}license.html` }
    ];
    const seoItems = [
        { label: "Ocean Arcade Game", href: `${basePath}ocean-arcade-game/` },
        { label: "Play Ocean Arcade", href: `${basePath}play-ocean-arcade/` },
        { label: "Ocean Arcade Online", href: `${basePath}ocean-arcade-online/` },
        { label: "How to Play Ocean Arcade", href: `${basePath}how-to-play-ocean-arcade/` },
        { label: "Ocean Arcade Tips", href: `${basePath}ocean-arcade-tips/` },
        { label: "Free Ocean Arcade Game", href: `${basePath}free-ocean-arcade-game/` }
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
                            <span>Small fish game site, still tinkering with it</span>
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
                            <span>Small indie arcade side project</span>
                        </span>
                    </div>
                    <div class="footer-link-groups">
                        <div>
                            <p class="footer-group-title">Site Links</p>
                            <div class="footer-links">
                                ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
                            </div>
                        </div>
                        <div>
                            <p class="footer-group-title">Ocean Arcade Pages</p>
                            <div class="footer-links">
                                ${seoItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
                            </div>
                        </div>
                    </div>
                    <p class="footer-note">
                        Ocean Arcade Game is a small browser gaming project mostly built around fish patterns, fullscreen runs, and a set of real Ocean Arcade guides for players who want tips, controls, and online play help. Open source attributions for
                        <a href="https://github.com/imtonyjaa/ggemu-fishing-joy" target="_blank" rel="noopener noreferrer">ggemu-fishing-joy</a>
                        and
                        <a href="https://github.com/kobalab/Majiang" target="_blank" rel="noopener noreferrer">kobalab/Majiang</a>
                        are kept on the license page.
                    </p>
                    <p class="footer-meta">
                        &copy; <span id="footer-year"></span> Ocean Arcade Game. Kept online for bigger catches, quick breaks, and that one more round feeling.
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
