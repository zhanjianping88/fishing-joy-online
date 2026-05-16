(function () {
    const body = document.body;
    const basePath = body.dataset.basePath || "./";
    const currentPage = body.dataset.page || "";

    const navItems = [
        { key: "home", label: "首页", href: `${basePath}` },
        { key: "game", label: "游戏", href: `${basePath}game/` },
        { key: "about", label: "关于", href: `${basePath}about/` },
        { key: "privacy", label: "隐私政策", href: `${basePath}privacy/` },
        { key: "terms", label: "服务条款", href: `${basePath}terms/` },
        { key: "contact", label: "联系", href: `${basePath}contact/` },
        { key: "license", label: "许可证", href: `${basePath}license.html` }
    ];

    const headerTarget = document.getElementById("site-header");
    const footerTarget = document.getElementById("site-footer");

    if (headerTarget) {
        headerTarget.innerHTML = `
            <header class="site-header">
                <div class="nav-inner">
                    <a class="brand" href="${basePath}">
                        <span class="brand-mark">FJ</span>
                        <span class="brand-copy">
                            <strong>Fishing Joy Online</strong>
                            <span>Browser fishing mini game</span>
                        </span>
                    </a>
                    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">菜单</button>
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
                    <div class="footer-links">
                        ${navItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join("")}
                    </div>
                    <p class="footer-note">
                        本站基于开源项目 <a href="https://github.com/imtonyjaa/ggemu-fishing-joy" target="_blank" rel="noopener noreferrer">ggemu-fishing-joy</a> 改造，
                        保留 MIT License 与原作者版权说明。
                    </p>
                    <p class="footer-meta">
                        &copy; <span id="footer-year"></span> Fishing Joy Online. License details are available on the license page.
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
})();
