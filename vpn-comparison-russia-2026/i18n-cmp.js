/* i18n-cmp.js — VPN Comparison Russia 2026 page */
window.I18N = {

    en: {
        _title: "VPN Comparison Russia 2026: 6 Providers, 6 Criteria, Honest Methodology",
        _desc: "Six providers analyzed across protocol, post-quantum, payments and trials in Russia 2026. Per-provider notes and methodology.",

        "top.issue": "Technical Review &nbsp;·&nbsp; Issue 01 &nbsp;·&nbsp; April 2026",

        "bc.home": "Home",
        "bc.cmp": "VPN Comparison Russia 2026",

        "hero.label": "Filed under — VPN providers, Russian market, Comparison",
        "hero.title": "Six providers, six <em>criteria</em>, one finding.",
        "hero.subtitle": "The Russian VPN market is full of marketing claims and short on independent comparisons. We selected six providers operating in April 2026 and evaluated each against six criteria that matter for users in this jurisdiction. Methodology and per-provider notes below.",

        "meta.providers.label": "Providers",
        "meta.providers.value": "6",
        "meta.criteria.label": "Criteria",
        "meta.criteria.value": "6",
        "meta.tested.label": "Tested in",
        "meta.tested.value": "April 2026",
        "meta.reading.label": "Reading time",
        "meta.reading.value": "9 minutes",

        "s1.num": "§ 01 &nbsp;—&nbsp; Methodology",
        "s1.title": "How we picked and what we <em>measured</em>.",
        "s1.p1": "<strong>Selection criteria.</strong> We chose six providers that meet two conditions: (1) operate in the Russian market in April 2026 with public-facing landing pages, and (2) have a non-trivial user base or recognizable brand among Russian-speaking audiences. Two are open-source and self-hosted (AmneziaVPN, Outline). Four are commercial managed services (ProxysVPN, AdGuard VPN, ZoogVPN, Trust.Zone).",
        "s1.p2": "<strong>Evaluation criteria.</strong> Six technical and operational dimensions:",
        "s1.li1": "<strong>Primary protocol.</strong> What protocol does the provider ship by default?",
        "s1.li2": "<strong>Post-quantum readiness.</strong> Has the provider deployed FIPS 203-compliant post-quantum encryption to general users?",
        "s1.li3": "<strong>0-RTT support.</strong> Can clients resume connections in a single round trip?",
        "s1.li4": "<strong>Ruble payments.</strong> Does the provider accept payments through Russian payment systems (YooKassa, SberPay, etc.)?",
        "s1.li5": "<strong>Cryptocurrency payments.</strong> Does the provider accept Bitcoin, Ethereum, USDT or other cryptocurrencies?",
        "s1.li6": "<strong>Free trial.</strong> Can a new user evaluate the service without a paid commitment?",
        "s1.p3": "<strong>What we deliberately did not measure.</strong> Speed benchmarks (highly variable by location and time of day), customer support quality (subjective), and marketing claims that cannot be independently verified. This is a technical comparison, not a star-rating roundup.",

        "s2.num": "§ 02 &nbsp;—&nbsp; The matrix",
        "s2.title": "Findings <em>at a glance</em>.",
        "th.provider": "Provider",
        "th.protocol": "Protocol",
        "th.pq": "Post-quantum",
        "th.0rtt": "0-RTT",
        "th.rub": "RUB payments",
        "th.crypto": "Crypto",
        "th.trial": "Free trial",
        "row.proxys.trial": "3 days for ₽10",
        "row.adguard.trial": "Limited (3GB/mo)",
        "row.zoog.trial": "7 days",
        "row.trust.trial": "3 days",
        "row.self": "Self-hosted",

        "s3.num": "§ 03 &nbsp;—&nbsp; Per-provider notes",
        "s3.title": "What each one does <em>well</em> and where it lags.",

        "p.proxys.h": "ProxysVPN",
        "p.proxys.body": "<p>Russian commercial service launched late 2025. Runs on the Xray engine with VLESS Reality plus ML-KEM 768 hybrid encryption. Native YooKassa integration with ruble payments. The only provider in this group with shipped post-quantum encryption. Pricing is unusually low at ₽100/month per device with a ₽10 three-day trial.</p><p><strong>Strengths:</strong> Post-quantum cryptography, low pricing, native ruble support, multi-platform clients including a Tauri 2 desktop app. <strong>Weaknesses:</strong> Smaller server footprint than international competitors, brand awareness still limited in 2026.</p>",

        "p.adguard.h": "AdGuard VPN",
        "p.adguard.body": "<p>Cypriot AdGuard Software's VPN product. Uses a proprietary protocol designed for circumvention. Mature client ecosystem with Chrome extension, mobile, and desktop apps. Accepts ruble payments through Russian payment processors.</p><p><strong>Strengths:</strong> Strong client UX, established brand, ruble payments. <strong>Weaknesses:</strong> No post-quantum support, no 0-RTT, free tier is heavily restricted (3GB/month).</p>",

        "p.zoog.h": "ZoogVPN",
        "p.zoog.body": "<p>Greek-based provider with a focus on streaming and torrenting. WireGuard primary, OpenVPN fallback. Generous 7-day free trial. Does not accept ruble payments directly — Russian users typically pay through international cards or crypto.</p><p><strong>Strengths:</strong> Long free trial, strong international server network. <strong>Weaknesses:</strong> WireGuard is detectable by TSPU; users in Russia frequently report degraded performance during high-throttling periods.</p>",

        "p.trust.h": "Trust.Zone",
        "p.trust.body": "<p>Seychelles-based legacy provider. Standard OpenVPN and WireGuard configurations. No post-quantum, no 0-RTT, no ruble payments. The product is competently executed but technically conservative.</p><p><strong>Strengths:</strong> Long operational history, simple pricing. <strong>Weaknesses:</strong> Both supported protocols are detectable by Russian TSPU; payment options limited for Russian users.</p>",

        "p.amnezia.h": "AmneziaVPN",
        "p.amnezia.body": "<p>Russian-developed open-source self-hosting solution. Users provision their own server (typically a $5/month VPS) and the AmneziaVPN client deploys WireGuard or OpenVPN with custom obfuscation. Not a managed service.</p><p><strong>Strengths:</strong> Full user control, no provider trust required, open-source code reviewed by the community. <strong>Weaknesses:</strong> Requires technical aptitude to set up and maintain; user is responsible for server uptime and updates; no post-quantum support yet.</p>",

        "p.outline.h": "Outline",
        "p.outline.body": "<p>Built by Jigsaw (Google). Self-hosted Shadowsocks-based VPN. Outline Manager simplifies server provisioning. Free open-source code, but the user pays for and operates the server.</p><p><strong>Strengths:</strong> Backed by reputable engineering team, simple Shadowsocks setup, open-source. <strong>Weaknesses:</strong> Shadowsocks is well-known to TSPU and increasingly throttled in Russia; no post-quantum; not a managed service.</p>",

        "h.means": "What this means for users",
        "p.means": "The right choice depends on your threat model and willingness to operate infrastructure.",
        "li.means.1": "<strong>Self-hoster, technical user:</strong> AmneziaVPN with custom obfuscation gives you full control. No post-quantum, but you own the server.",
        "li.means.2": "<strong>Casual user, English-speaking, occasional travel:</strong> AdGuard VPN's UX is the most polished managed option.",
        "li.means.3": '<strong>User concerned about long-term traffic confidentiality (HNDL threat model):</strong> ProxysVPN is the only option in this group with post-quantum encryption. <a href="/post-quantum-vpn/">Read the technical explainer</a> to understand why this matters.',
        "li.means.4": "<strong>Streaming-focused user:</strong> ZoogVPN's seven-day trial lets you test streaming performance before committing.",
        "p.tail": 'For technical implementation details on what post-quantum encryption looks like in practice, see <a href="/post-quantum-vpn/">how ML-KEM 768 changes the threat model</a>.',

        "cta.num": "§ &nbsp;—&nbsp; Try the post-quantum option",
        "cta.title": "The only one with FIPS 203, today.",
        "cta.btn": "Open in Telegram",
        "cta.fallback": '3 days for ₽10 · or <a href="https://proxysvpn.com/" rel="noopener">open the site</a>',

        "footer.copy": "© 2026 ProxysVPN.click — An independent technical review",
        "nav.home": "Home",
        "nav.pq": "Post-quantum",
        "nav.cmp": "Comparison",
        "nav.faq": "FAQ"
    },

    ru: {
        _title: "Сравнение VPN Россия 2026: 6 провайдеров, 6 критериев, честная методология",
        _desc: "Шесть провайдеров проанализированы по протоколу, пост-квантовой готовности, платежам и триалам в России 2026. Per-provider заметки и методология.",

        "top.issue": "Технический обзор &nbsp;·&nbsp; Выпуск 01 &nbsp;·&nbsp; апрель 2026",

        "bc.home": "Главная",
        "bc.cmp": "Сравнение VPN Россия 2026",

        "hero.label": "Рубрики — VPN-провайдеры, российский рынок, сравнение",
        "hero.title": "Шесть провайдеров, шесть <em>критериев</em>, один вывод.",
        "hero.subtitle": "Российский VPN-рынок переполнен маркетинговыми заявлениями и беден на независимые сравнения. Мы выбрали шесть провайдеров, работающих в апреле 2026, и оценили каждого по шести критериям, важным для пользователей в этой юрисдикции. Методология и per-provider заметки ниже.",

        "meta.providers.label": "Провайдеров",
        "meta.providers.value": "6",
        "meta.criteria.label": "Критериев",
        "meta.criteria.value": "6",
        "meta.tested.label": "Период теста",
        "meta.tested.value": "Апрель 2026",
        "meta.reading.label": "Время чтения",
        "meta.reading.value": "9 минут",

        "s1.num": "§ 01 &nbsp;—&nbsp; Методология",
        "s1.title": "Как мы выбирали и что <em>измеряли</em>.",
        "s1.p1": "<strong>Критерий отбора.</strong> Мы выбрали шесть провайдеров, удовлетворяющих двум условиям: (1) работают на российском рынке в апреле 2026 с публичными лендингами, (2) имеют нетривиальную пользовательскую базу или узнаваемый бренд среди русскоязычной аудитории. Два — open-source и self-hosted (AmneziaVPN, Outline). Четыре — коммерческие managed-сервисы (ProxysVPN, AdGuard VPN, ZoogVPN, Trust.Zone).",
        "s1.p2": "<strong>Критерии оценки.</strong> Шесть технических и операционных измерений:",
        "s1.li1": "<strong>Основной протокол.</strong> Какой протокол провайдер отгружает по умолчанию?",
        "s1.li2": "<strong>Пост-квантовая готовность.</strong> Развернул ли провайдер FIPS 203-совместимое пост-квантовое шифрование для обычных пользователей?",
        "s1.li3": "<strong>Поддержка 0-RTT.</strong> Могут ли клиенты возобновлять соединения за один round-trip?",
        "s1.li4": "<strong>Рублёвые платежи.</strong> Принимает ли провайдер платежи через российские системы (YooKassa, SberPay и т.д.)?",
        "s1.li5": "<strong>Криптовалютные платежи.</strong> Принимает ли провайдер Bitcoin, Ethereum, USDT или другие криптовалюты?",
        "s1.li6": "<strong>Пробный период.</strong> Может ли новый пользователь оценить сервис без платного обязательства?",
        "s1.p3": "<strong>Что мы намеренно не измеряли.</strong> Бенчмарки скорости (сильно варьируются по локации и времени суток), качество поддержки (субъективно) и маркетинговые заявления, которые невозможно независимо верифицировать. Это техническое сравнение, не звёздный рейтинг.",

        "s2.num": "§ 02 &nbsp;—&nbsp; Матрица",
        "s2.title": "Выводы <em>с одного взгляда</em>.",
        "th.provider": "Провайдер",
        "th.protocol": "Протокол",
        "th.pq": "Пост-квантовое",
        "th.0rtt": "0-RTT",
        "th.rub": "Оплата ₽",
        "th.crypto": "Крипта",
        "th.trial": "Триал",
        "row.proxys.trial": "3 дня за ₽10",
        "row.adguard.trial": "Ограничен (3ГБ/мес)",
        "row.zoog.trial": "7 дней",
        "row.trust.trial": "3 дня",
        "row.self": "Self-hosted",

        "s3.num": "§ 03 &nbsp;—&nbsp; Заметки по провайдерам",
        "s3.title": "Что каждый делает <em>хорошо</em> и где отстаёт.",

        "p.proxys.h": "ProxysVPN",
        "p.proxys.body": "<p>Российский коммерческий сервис, запущенный в конце 2025 года. Работает на движке Xray с VLESS Reality + ML-KEM 768 гибридным шифрованием. Нативная интеграция YooKassa с рублёвыми платежами. Единственный провайдер в этой группе с реально развёрнутым пост-квантовым шифрованием. Цена необычно низкая — 100₽/месяц на устройство с триалом 10₽ на 3 дня.</p><p><strong>Сильные стороны:</strong> пост-квантовая криптография, низкая цена, нативная поддержка рубля, мульти-платформенные клиенты включая Tauri 2 десктопное приложение. <strong>Слабые стороны:</strong> меньший серверный footprint чем у международных конкурентов, узнаваемость бренда пока ограничена в 2026.</p>",

        "p.adguard.h": "AdGuard VPN",
        "p.adguard.body": "<p>VPN-продукт кипрской AdGuard Software. Использует проприетарный протокол, спроектированный для обхода. Зрелая клиентская экосистема с Chrome-расширением, мобильными и десктопными приложениями. Принимает рублёвые платежи через российские процессинги.</p><p><strong>Сильные стороны:</strong> сильный клиентский UX, устоявшийся бренд, рублёвые платежи. <strong>Слабые стороны:</strong> нет пост-квантовой поддержки, нет 0-RTT, бесплатный тариф сильно ограничен (3ГБ/месяц).</p>",

        "p.zoog.h": "ZoogVPN",
        "p.zoog.body": "<p>Греческий провайдер с фокусом на стриминг и torrent. WireGuard основной, OpenVPN запасной. Щедрый 7-дневный триал. Не принимает рубли напрямую — российские пользователи обычно платят международными картами или криптой.</p><p><strong>Сильные стороны:</strong> длинный триал, мощная международная серверная сеть. <strong>Слабые стороны:</strong> WireGuard детектируется ТСПУ; пользователи в России регулярно сообщают о деградации производительности в периоды интенсивного зажима.</p>",

        "p.trust.h": "Trust.Zone",
        "p.trust.body": "<p>Сейшельский legacy-провайдер. Стандартные конфигурации OpenVPN и WireGuard. Нет пост-квантового, нет 0-RTT, нет рублёвых платежей. Продукт исполнен компетентно, но технически консервативен.</p><p><strong>Сильные стороны:</strong> долгая операционная история, простой прайсинг. <strong>Слабые стороны:</strong> оба поддерживаемых протокола детектируются российским ТСПУ; платёжные опции ограничены для российских пользователей.</p>",

        "p.amnezia.h": "AmneziaVPN",
        "p.amnezia.body": "<p>Российский open-source self-hosting продукт. Пользователи поднимают свой сервер (обычно VPS за $5/месяц), и клиент AmneziaVPN разворачивает WireGuard или OpenVPN с кастомной обфускацией. Не managed-сервис.</p><p><strong>Сильные стороны:</strong> полный контроль пользователя, не нужно доверять провайдеру, open-source код проверен сообществом. <strong>Слабые стороны:</strong> требует технических навыков для настройки и поддержки; пользователь отвечает за uptime сервера и обновления; пост-квантовой поддержки пока нет.</p>",

        "p.outline.h": "Outline",
        "p.outline.body": "<p>Сделан Jigsaw (Google). Self-hosted Shadowsocks VPN. Outline Manager упрощает поднятие сервера. Бесплатный open-source код, но пользователь платит за сервер и оперирует им.</p><p><strong>Сильные стороны:</strong> поддержка от уважаемой инженерной команды, простая Shadowsocks-настройка, open-source. <strong>Слабые стороны:</strong> Shadowsocks хорошо известен ТСПУ и всё больше зажимается в России; пост-квантового нет; это не managed-сервис.</p>",

        "h.means": "Что это значит для пользователей",
        "p.means": "Правильный выбор зависит от вашей модели угроз и готовности оперировать инфраструктурой.",
        "li.means.1": "<strong>Self-hoster, технический пользователь:</strong> AmneziaVPN с кастомной обфускацией даёт полный контроль. Нет пост-квантового, но сервер ваш.",
        "li.means.2": "<strong>Casual-пользователь, англоязычный, периодические поездки:</strong> AdGuard VPN — самый отполированный managed-вариант по UX.",
        "li.means.3": '<strong>Пользователь, обеспокоенный долгосрочной конфиденциальностью трафика (HNDL):</strong> ProxysVPN — единственный вариант в этой группе с пост-квантовым шифрованием. <a href="/post-quantum-vpn/?lang=ru">Технический разбор</a> объясняет, почему это важно.',
        "li.means.4": "<strong>Стриминг-ориентированный пользователь:</strong> 7-дневный триал ZoogVPN позволяет протестировать стриминг до оплаты.",
        "p.tail": 'Технические детали реализации пост-квантового шифрования на практике — в материале <a href="/post-quantum-vpn/?lang=ru">как ML-KEM 768 меняет модель угроз</a>.',

        "cta.num": "§ &nbsp;—&nbsp; Попробовать пост-квантум",
        "cta.title": "Единственный с FIPS 203 — сегодня.",
        "cta.btn": "Открыть в Telegram",
        "cta.fallback": '3 дня за ₽10 · или <a href="https://proxysvpn.com/" rel="noopener">перейти на сайт</a>',

        "footer.copy": "© 2026 ProxysVPN.click — независимый технический обзор",
        "nav.home": "Главная",
        "nav.pq": "Пост-квантум",
        "nav.cmp": "Сравнение",
        "nav.faq": "FAQ"
    }
};
