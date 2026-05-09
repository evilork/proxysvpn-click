/* ============================================================
   app.js — theme toggle + language toggle + reveal + progress
   Inline in <body> so it runs before content paints.
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Theme ---------- */
    var THEME_KEY = 'pcv:theme';
    var stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (e) {}
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var initial = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initial);

    function setTheme(t) {
        document.documentElement.setAttribute('data-theme', t);
        try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    }

    /* ---------- Language ---------- */
    var LANG_KEY = 'pcv:lang';
    var SUPPORTED = ['en', 'ru'];
    var urlParams = new URLSearchParams(window.location.search);
    var urlLang = urlParams.get('lang');
    var storedLang = null;
    try { storedLang = localStorage.getItem(LANG_KEY); } catch (e) {}
    var browserLang = (navigator.language || 'en').slice(0, 2).toLowerCase();
    var lang = SUPPORTED.indexOf(urlLang) >= 0 ? urlLang
             : (SUPPORTED.indexOf(storedLang) >= 0 ? storedLang
             : (SUPPORTED.indexOf(browserLang) >= 0 ? browserLang : 'en'));

    
    // Update OG image based on lang (for SSR-less GitHub Pages, browsers see this on JS-rendered share)
    function updateOgImage(lang) {
        const ogImg = document.querySelector('meta[property="og:image"]');
        const twImg = document.querySelector('meta[name="twitter:image"]');
        const url = lang === 'ru'
            ? 'https://proxysvpn.click/og-image-ru.png'
            : 'https://proxysvpn.click/og-image-en.png';
        if (ogImg) ogImg.setAttribute('content', url);
        if (twImg) twImg.setAttribute('content', url);
    }

function setLang(l) {
        if (SUPPORTED.indexOf(l) < 0) return;
        lang = l;
        try { localStorage.setItem(LANG_KEY, l); } catch (e) {}
        document.documentElement.setAttribute('lang', l);
        applyI18n();
        updateLangButtons();
        // Update URL without reload
        var url = new URL(window.location.href);
        if (l === 'en') url.searchParams.delete('lang');
        else url.searchParams.set('lang', l);
        window.history.replaceState({}, '', url.toString());
    }

    function applyI18n() {
        if (!window.I18N || !window.I18N[lang]) return;
        var dict = window.I18N[lang];
        // Text content
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (dict[key] != null) el.innerHTML = dict[key];
        });
        // Attributes (e.g. title, aria-label, content for meta)
        document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
            var pairs = el.getAttribute('data-i18n-attr').split(',');
            pairs.forEach(function (p) {
                var parts = p.trim().split(':');
                var attr = parts[0];
                var key = parts[1];
                if (attr && key && dict[key] != null) el.setAttribute(attr, dict[key]);
            });
        });
        // <title> tag
        if (dict['_title']) document.title = dict['_title'];
        // <meta name="description">
        if (dict['_desc']) {
            var meta = document.querySelector('meta[name="description"]');
            if (meta) meta.setAttribute('content', dict['_desc']);
        }
    }

    function updateLangButtons() {
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
            else btn.classList.remove('active');
        });
    }

    /* ---------- DOM ready ---------- */
    function onReady(fn) {
        if (document.readyState !== 'loading') fn();
        else document.addEventListener('DOMContentLoaded', fn);
    }

    onReady(function () {
        // Theme button
        var themeBtn = document.querySelector('.theme-toggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                var current = document.documentElement.getAttribute('data-theme');
                setTheme(current === 'dark' ? 'light' : 'dark');
            });
        }

        // Language buttons
        document.querySelectorAll('.lang-btn').forEach(function (btn) {
            btn.addEventListener('click', function () {
                setLang(btn.getAttribute('data-lang'));
            });
        });

        // Apply initial language
        document.documentElement.setAttribute('lang', lang);
        applyI18n();
        updateLangButtons();

        // Reveal-on-scroll
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry, i) {
                    if (entry.isIntersecting) {
                        setTimeout(function () { entry.target.classList.add('in'); }, i * 80);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
        } else {
            document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
        }

        // Reading progress
        var progress = document.getElementById('progress');
        if (progress) {
            window.addEventListener('scroll', function () {
                var h = document.documentElement;
                var scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
                progress.style.width = (scrolled * 100) + '%';
            }, { passive: true });
        }
    });
})();
