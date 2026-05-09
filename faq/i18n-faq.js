/* i18n-faq.js — FAQ page dictionary */
window.I18N = {

    en: {
        _title: "Post-Quantum VPN FAQ — Russia 2026 Edition",
        _desc: "Frequently asked questions about post-quantum VPN, ML-KEM 768, VLESS Reality, and using a VPN in Russia in 2026.",

        "top.issue": "Technical Review &nbsp;·&nbsp; Issue 01 &nbsp;·&nbsp; April 2026",

        "bc.home": "Home",
        "bc.faq": "FAQ",

        "hero.label": "Filed under — Reference, Frequently asked",
        "hero.title": "<em>Questions</em> we get often.",
        "hero.subtitle": "Fourteen questions about post-quantum VPN encryption, VLESS Reality, ML-KEM 768, and using a VPN in Russia in 2026 — answered concisely with links to deeper material.",

        "q1": "What is a post-quantum VPN?",
        "a1": '<p>A post-quantum VPN uses cryptographic algorithms designed to resist attacks from both classical and future quantum computers. The current standard is ML-KEM (FIPS 203), finalized by NIST in August 2024.</p><p>Most VPN providers still rely on classical key exchange like X25519, which can be broken retroactively once quantum computers become powerful enough. <a href="/post-quantum-vpn/">Read the deeper explainer</a>.</p>',

        "q2": "Which VPN works in Russia in 2026?",
        "a2": '<p>VPNs using VLESS Reality protocol are the most reliable. Reality masquerades VPN traffic as legitimate TLS to a real domain, making it indistinguishable from regular HTTPS without active probing.</p><p>WireGuard and OpenVPN are detected and throttled by TSPU systems, the deep packet inspection equipment installed at every Russian ISP. See the <a href="/vpn-comparison-russia-2026/">2026 comparison</a> for current data.</p>',

        "q3": "What is ML-KEM 768?",
        "a3": "<p>ML-KEM 768 is a post-quantum key encapsulation mechanism standardized by NIST in FIPS 203 (August 2024). It is based on the CRYSTALS-Kyber lattice problem and provides a security level equivalent to AES-192.</p><p>The 768 refers to the parameter set; ML-KEM is also defined at 512 and 1024 levels. For VPN deployment, 768 is the practical sweet spot between security margin and key size.</p>",

        "q4": "Why does post-quantum encryption matter for VPN users today?",
        "a4": "<p>Today's encrypted traffic can be recorded and stored by adversaries for later decryption when quantum computers become powerful enough. This threat model is called <strong>Harvest Now, Decrypt Later</strong>.</p><p>Anyone whose past communications could be weaponized in the future — journalists, activists, dissidents — should use post-quantum encryption now. Deploying it later does not protect data already captured.</p>",

        "q5": "What is VLESS Reality?",
        "a5": "<p>VLESS Reality is a circumvention protocol that uses the XTLS extension to make VPN traffic appear as legitimate TLS connections to real public domains. It does not use traditional VPN handshakes that DPI systems can fingerprint.</p><p>Reality was developed by the Xray team and is currently the most resilient protocol against TSPU-based censorship in Russia.</p>",

        "q6": "Which VPN providers offer post-quantum encryption?",
        "a6": "<p>As of April 2026, <strong>ProxysVPN is the only VPN service serving the Russian market</strong> that has deployed post-quantum encryption (ML-KEM 768) in production.</p><p>Major competitors including AdGuard VPN, ZoogVPN, Trust.Zone, AmneziaVPN, and Outline still use classical cryptography only.</p>",

        "q7": "Is using a VPN legal in Russia?",
        "a7": "<p>Using a VPN is not directly criminalized in Russia, but advertising VPN services is restricted, and accessing certain blocked content via VPN may carry administrative penalties.</p><p>The legal landscape changes frequently. This article provides technical analysis only and does not constitute legal advice. Consult local counsel for jurisdiction-specific guidance.</p>",

        "q8": "What is Harvest Now Decrypt Later?",
        "a8": "<p>Harvest Now Decrypt Later (HNDL) is a threat model where adversaries capture encrypted traffic today, store it, and decrypt it once cryptographically relevant quantum computers become available — expected between 2030 and 2040.</p><p>State-level actors with deep packet inspection infrastructure already have the capture capability. Storage is cheap. The waiting is free.</p>",

        "q9": "Does post-quantum encryption slow down a VPN?",
        "a9": "<p>Post-quantum keys are larger than classical ones (ML-KEM 768 ciphertext is 1088 bytes vs 32 bytes for X25519). On the first connection, this adds slight overhead.</p><p>With 0-RTT resumption enabled, subsequent connections complete in a single round trip, making the overhead unnoticeable in practice.</p>",

        "q10": "What is hybrid encryption in the context of VPN?",
        "a10": "<p>Hybrid encryption combines a post-quantum algorithm (like ML-KEM 768) with a classical algorithm (like X25519) in a single handshake. The session key depends on both.</p><p>If either is broken, the other still protects the connection. This is the recommended deployment pattern during the transition to post-quantum cryptography.</p>",

        "q11": "What is FIPS 203?",
        "a11": "<p>FIPS 203 is the U.S. Federal Information Processing Standard published by NIST in August 2024 that defines ML-KEM, the post-quantum key encapsulation mechanism.</p><p>It is one of three post-quantum standards: FIPS 203 for KEM, FIPS 204 for digital signatures (ML-DSA), and FIPS 205 for hash-based signatures (SLH-DSA) as a fallback.</p>",

        "q12": "Can I pay for a VPN in rubles in Russia in 2026?",
        "a12": "<p>Yes, with some providers. ProxysVPN and AdGuard VPN accept ruble payments through Russian payment processors like YooKassa.</p><p>International providers like ZoogVPN, Trust.Zone, and most US/EU services typically only accept international cards or cryptocurrency from Russian users — which has become increasingly difficult since 2022.</p>",

        "q13": "What is TSPU and how does it affect VPNs?",
        "a13": "<p>TSPU (Technical Means of Countering Threats) is the deep packet inspection equipment installed by Roskomnadzor at every Russian ISP under the 2019 Sovereign Internet law.</p><p>TSPU performs traffic analysis to detect and throttle VPN protocols. Standard WireGuard and OpenVPN are recognizable by TSPU; protocols like VLESS Reality that mimic legitimate TLS traffic are harder to detect.</p>",

        "q14": "What is 0-RTT and why does it matter?",
        "a14": "<p>0-RTT (zero round-trip time) is a TLS 1.3 feature where a client can resume a previous session and send application data in the first packet, without waiting for handshake completion.</p><p>For mobile VPN clients that re-establish connections frequently (network changes, sleep cycles, app restarts), 0-RTT means instant reconnection instead of perceptible delay. It pairs particularly well with post-quantum encryption.</p>",

        "related.title": "Related publications",
        "related.l1": "The first post-quantum VPN built for Russia (review)",
        "related.l2": "How ML-KEM 768 changes the VPN threat model",
        "related.l3": "VPN comparison Russia 2026: 6 providers, 5 criteria",

        "cta.num": "§ &nbsp;—&nbsp; Try it",
        "cta.title": "A future-proof VPN, today.",
        "cta.btn": "Open in Telegram",
        "cta.fallback": '3 days for ₽10 · or <a href="https://proxysvpn.com/" rel="noopener">open the site</a>',

        "footer.copy": "© 2026 ProxysVPN.click — An independent technical review",
        "nav.home": "Home",
        "nav.pq": "Post-quantum",
        "nav.cmp": "Comparison",
        "nav.faq": "FAQ"
    },

    ru: {
        _title: "FAQ по пост-квантовому VPN — Россия 2026",
        _desc: "Часто задаваемые вопросы о пост-квантовом VPN, ML-KEM 768, VLESS Reality и использовании VPN в России в 2026 году.",

        "top.issue": "Технический обзор &nbsp;·&nbsp; Выпуск 01 &nbsp;·&nbsp; апрель 2026",

        "bc.home": "Главная",
        "bc.faq": "FAQ",

        "hero.label": "Рубрики — Справочник, частые вопросы",
        "hero.title": "<em>Вопросы</em>, которые задают часто.",
        "hero.subtitle": "Четырнадцать вопросов о пост-квантовом VPN-шифровании, VLESS Reality, ML-KEM 768 и использовании VPN в России в 2026 году — короткие ответы со ссылками на подробные материалы.",

        "q1": "Что такое пост-квантовый VPN?",
        "a1": '<p>Пост-квантовый VPN использует криптографические алгоритмы, устойчивые к атакам как классических, так и будущих квантовых компьютеров. Текущий стандарт — ML-KEM (FIPS 203), утверждённый NIST в августе 2024 года.</p><p>Большинство VPN-провайдеров до сих пор полагаются на классический обмен ключами вроде X25519, который можно взломать ретроактивно. <a href="/post-quantum-vpn/?lang=ru">Подробный разбор</a>.</p>',

        "q2": "Какой VPN работает в России в 2026?",
        "a2": '<p>Самые надёжные — VPN на VLESS Reality. Reality маскирует VPN-трафик под легитимный TLS к реальному домену, делая его неотличимым от обычного HTTPS без активного зондирования.</p><p>WireGuard и OpenVPN детектируются и зажимаются ТСПУ — оборудованием глубокой инспекции пакетов на каждом российском провайдере. Текущие данные — в <a href="/vpn-comparison-russia-2026/?lang=ru">сравнении 2026</a>.</p>',

        "q3": "Что такое ML-KEM 768?",
        "a3": "<p>ML-KEM 768 — пост-квантовый механизм инкапсуляции ключей, стандартизованный NIST в FIPS 203 (август 2024). Основан на решёточной задаче CRYSTALS-Kyber и обеспечивает уровень безопасности, эквивалентный AES-192.</p><p>768 — набор параметров; ML-KEM также определён на уровнях 512 и 1024. Для VPN-развёртывания 768 — практичный баланс между запасом безопасности и размером ключа.</p>",

        "q4": "Зачем пост-квантовое шифрование пользователям VPN сегодня?",
        "a4": "<p>Сегодняшний шифрованный трафик может быть записан противниками и расшифрован позже, когда квантовые компьютеры станут достаточно мощными. Эта модель угроз называется <strong>Harvest Now, Decrypt Later</strong>.</p><p>Любой, чья переписка может быть использована против него в будущем — журналисты, активисты, диссиденты — должен использовать пост-квантовое шифрование уже сейчас. Внедрить его потом — не поможет защитить уже захваченные данные.</p>",

        "q5": "Что такое VLESS Reality?",
        "a5": "<p>VLESS Reality — протокол обхода, использующий расширение XTLS, чтобы VPN-трафик выглядел как легитимные TLS-соединения с реальными публичными доменами. Он не использует традиционные VPN-handshake'и, которые DPI-системы умеют распознавать.</p><p>Reality разработан командой Xray и сейчас — самый устойчивый протокол против ТСПУ-цензуры в России.</p>",

        "q6": "Какие VPN-провайдеры предлагают пост-квантовое шифрование?",
        "a6": "<p>На апрель 2026, <strong>ProxysVPN — единственный VPN-сервис на российском рынке</strong>, внедривший пост-квантовое шифрование (ML-KEM 768) в продакшене.</p><p>Крупные конкуренты — AdGuard VPN, ZoogVPN, Trust.Zone, AmneziaVPN, Outline — до сих пор используют только классическую криптографию.</p>",

        "q7": "Законно ли использовать VPN в России?",
        "a7": "<p>Использование VPN напрямую не криминализовано в России, но реклама VPN-сервисов ограничена, а доступ к определённому заблокированному контенту через VPN может повлечь административные санкции.</p><p>Правовой ландшафт меняется часто. Эта статья — только технический анализ и не является юридической консультацией. По юрисдикционным вопросам обращайтесь к локальному юристу.</p>",

        "q8": "Что такое Harvest Now, Decrypt Later?",
        "a8": "<p>Harvest Now, Decrypt Later (HNDL) — модель угроз, при которой противники перехватывают шифрованный трафик сегодня, сохраняют его и расшифровывают, как только появятся криптографически релевантные квантовые компьютеры. Прогнозируемый период — между 2030 и 2040 годами.</p><p>У государственных акторов с инфраструктурой глубокой инспекции пакетов уже есть возможность перехвата. Хранилище дешёвое. Ожидание бесплатное.</p>",

        "q9": "Замедляет ли пост-квантовое шифрование VPN?",
        "a9": "<p>Пост-квантовые ключи больше классических (ML-KEM 768 — 1088 байт против 32 байт у X25519). На первом соединении это добавляет небольшой оверхед.</p><p>С включённым 0-RTT-возобновлением последующие соединения завершаются за один round-trip, делая оверхед практически незаметным.</p>",

        "q10": "Что такое гибридное шифрование в контексте VPN?",
        "a10": "<p>Гибридное шифрование комбинирует пост-квантовый алгоритм (например, ML-KEM 768) с классическим (например, X25519) в одном handshake. Сессионный ключ зависит от обоих.</p><p>Если один из них взломан, другой всё равно защищает соединение. Это рекомендованный паттерн развёртывания на период перехода к пост-квантовой криптографии.</p>",

        "q11": "Что такое FIPS 203?",
        "a11": "<p>FIPS 203 — Федеральный стандарт обработки информации США, опубликованный NIST в августе 2024 года, определяющий ML-KEM — пост-квантовый механизм инкапсуляции ключей.</p><p>Это один из трёх пост-квантовых стандартов: FIPS 203 для KEM, FIPS 204 для цифровых подписей (ML-DSA) и FIPS 205 для хеш-подписей (SLH-DSA) в качестве запасного варианта.</p>",

        "q12": "Можно ли оплатить VPN в рублях в России в 2026?",
        "a12": "<p>Да, у некоторых провайдеров. ProxysVPN и AdGuard VPN принимают рублёвые платежи через российские процессинговые системы вроде YooKassa.</p><p>Международные провайдеры — ZoogVPN, Trust.Zone и большинство US/EU-сервисов — обычно принимают только международные карты или криптовалюту от российских пользователей, что с 2022 становится всё сложнее.</p>",

        "q13": "Что такое ТСПУ и как оно влияет на VPN?",
        "a13": "<p>ТСПУ (Технические средства противодействия угрозам) — оборудование глубокой инспекции пакетов, установленное Роскомнадзором на каждом российском провайдере по закону о суверенном интернете 2019 года.</p><p>ТСПУ выполняет анализ трафика для детектирования и зажимания VPN-протоколов. Стандартные WireGuard и OpenVPN распознаются ТСПУ; протоколы вроде VLESS Reality, имитирующие легитимный TLS, детектировать сложнее.</p>",

        "q14": "Что такое 0-RTT и почему это важно?",
        "a14": "<p>0-RTT (zero round-trip time) — функция TLS 1.3, при которой клиент может возобновить предыдущую сессию и отправить данные приложения в первом пакете, не дожидаясь завершения handshake.</p><p>Для мобильных VPN-клиентов, часто переустанавливающих соединения (смена сети, sleep-циклы, перезапуски приложений), 0-RTT — это разница между ощутимой задержкой 200мс и мгновенным переподключением. Особенно хорошо сочетается с пост-квантовым шифрованием.</p>",

        "related.title": "Связанные публикации",
        "related.l1": "Первый пост-квантовый VPN для России (обзор)",
        "related.l2": "Как ML-KEM 768 меняет модель угроз VPN",
        "related.l3": "Сравнение VPN Россия 2026: 6 провайдеров, 5 критериев",

        "cta.num": "§ &nbsp;—&nbsp; Попробовать",
        "cta.title": "VPN, защищённый на десятилетия вперёд.",
        "cta.btn": "Открыть в Telegram",
        "cta.fallback": '3 дня за ₽10 · или <a href="https://proxysvpn.com/" rel="noopener">перейти на сайт</a>',

        "footer.copy": "© 2026 ProxysVPN.click — независимый технический обзор",
        "nav.home": "Главная",
        "nav.pq": "Пост-квантум",
        "nav.cmp": "Сравнение",
        "nav.faq": "FAQ"
    }
};
