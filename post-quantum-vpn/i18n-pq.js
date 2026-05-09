/* i18n-pq.js — Post-Quantum VPN explainer */
window.I18N = {

    en: {
        _title: "Post-Quantum VPN: How ML-KEM 768 Changes the Threat Model — 2026 Explainer",
        _desc: "An in-depth technical explanation of post-quantum VPN cryptography. Why ML-KEM 768, hybrid construction, and why VPN users should care about FIPS 203 today.",

        "top.issue": "Technical Review &nbsp;·&nbsp; Issue 01 &nbsp;·&nbsp; April 2026",

        "bc.home": "Home",
        "bc.pq": "Post-Quantum VPN",

        "hero.label": "Filed under — Cryptography, Quantum computing",
        "hero.title": "How <em>post-quantum</em> changes the VPN threat model.",
        "hero.subtitle": "A technical explainer for engineers and security-conscious users. Why ML-KEM 768 was chosen, how hybrid construction works, and what it means for traffic captured today and decrypted tomorrow.",

        "meta.standard.label": "Standard",
        "meta.standard.value": "FIPS 203",
        "meta.published.label": "Published",
        "meta.published.value": "August 2024",
        "meta.type.label": "Type",
        "meta.type.value": "Lattice-based KEM",
        "meta.reading.label": "Reading time",
        "meta.reading.value": "11 minutes",

        "h1": "The shift from \"if\" to \"when\"",
        "p1.1": "For most of the public-key era, the conversation about quantum computers breaking encryption has been theoretical. Shor's algorithm has been known since 1994. The hardware to run it at scale has not. That gap is what cryptographers call the <strong>quantum gap</strong>, and it has been closing.",
        "p1.2": "NIST's response, started in 2016 and finalized in August 2024, was to standardize three post-quantum algorithms. <strong>FIPS 203</strong> defined ML-KEM (Module-Lattice Key Encapsulation Mechanism), based on the CRYSTALS-Kyber proposal. FIPS 204 covered ML-DSA for signatures. FIPS 205 covered SLH-DSA as a hash-based fallback.",
        "p1.3": "For VPNs, the relevant standard is FIPS 203. Key encapsulation is what happens during the handshake when client and server agree on the symmetric key that protects the rest of the session. If that step uses classical math, a future quantum computer can recover the key from recorded traffic.",

        "h2": "Harvest Now, Decrypt Later",
        "p2.1": "The threat model has a name: <strong>HNDL</strong>. State-level adversaries with the resources to run TSPU-class deep packet inspection also have the storage to record interesting traffic indefinitely. They do not need to break it now. They need to wait.",
        "p2.2": "Estimates for cryptographically relevant quantum computers (CRQC) range from optimistic 2030 to conservative 2040. The U.S. National Security Agency has explicitly told its supply chain to migrate to post-quantum by 2035. The window for HNDL is not hypothetical: it is the gap between today's traffic capture and tomorrow's CRQC.",
        "quote": "If your communications would be sensitive ten years from now, you need post-quantum protection ten years ago. The next best time is today.",

        "h3": "Why lattice-based",
        "p3.1": "ML-KEM rests on the hardness of a lattice problem called Module Learning With Errors (MLWE). Lattice problems have a few useful properties:",
        "li3.1": "<strong>No known quantum speedup.</strong> Shor's algorithm efficiently solves discrete logarithm and integer factorization. It does not solve MLWE. Grover's algorithm gives a quadratic speedup on brute force, which is why parameter sets are doubled (768 instead of 384, etc.).",
        "li3.2": "<strong>Mature analysis.</strong> Lattice cryptography has been studied since the 1990s. The hardness assumptions have survived three decades of academic attack.",
        "li3.3": "<strong>Reasonable performance.</strong> ML-KEM 768 produces roughly 1184-byte public keys and 1088-byte ciphertexts. Acceptable for handshakes; not free, but not prohibitive.",
        "p3.2": "Other candidates (code-based, isogeny-based) either lost confidence during evaluation or had performance issues. SIKE, an isogeny scheme, was famously broken in 2022 with a classical attack.",

        "h4": "Why hybrid construction matters",
        "p4.1": "A pure ML-KEM handshake would mean trusting that lattice cryptography holds. While the analysis is solid, post-quantum algorithms are younger than RSA or elliptic curves. A previously unknown attack on lattice problems would be catastrophic if there were no fallback.",
        "p4.2": "The pragmatic answer is <strong>hybrid construction</strong>: combine ML-KEM with a classical algorithm such that the session key depends on both. If lattice cryptography holds, the session is post-quantum secure. If lattice cryptography is broken, the classical layer still protects against today's attackers.",
        "p4.3": "The encryption suite ProxysVPN uses, <code>mlkem768x25519plus.native.0rtt</code>, encodes exactly this:",
        "li4.1": "<strong>mlkem768</strong>: ML-KEM at 768 parameter set, FIPS 203",
        "li4.2": "<strong>x25519</strong>: Curve25519 ECDH, the classical baseline",
        "li4.3": "<strong>plus</strong>: hybrid combination, both must succeed",
        "li4.4": "<strong>native</strong>: implemented at the protocol level, not bolted on",
        "li4.5": "<strong>0rtt</strong>: zero round-trip resumption enabled",

        "h5": "0-RTT and why it matters operationally",
        "p5.1": "Post-quantum keys are larger than classical ones. ML-KEM 768 ciphertext is 1088 bytes versus 32 bytes for X25519. On the first connection, this is unavoidable overhead. On subsequent connections, 0-RTT resumption uses the previously established session ticket to skip the full handshake.",
        "p5.2": "For a mobile VPN client that re-establishes connections frequently (network changes, sleep cycles, application restarts), 0-RTT is the difference between a perceptible 200ms reconnect and an instant one. Without it, post-quantum overhead becomes a UX problem.",

        "h6": "What this looks like on the wire",
        "p6.1": "VLESS Reality plus ML-KEM produces a handshake that looks, to passive observers and most active probes, like a standard TLS 1.3 connection to <code>www.intel.com</code>. The Reality part handles the masquerade. The ML-KEM part runs inside the encrypted channel.",
        "p6.2": "An adversary capturing this traffic in 2026 sees:",
        "li6.1": "TCP connection to port 443 of a normal-looking IP",
        "li6.2": "TLS ClientHello with SNI <code>www.intel.com</code>",
        "li6.3": "Apparently valid certificate exchange",
        "li6.4": "Encrypted application data",
        "p6.3": "If they store this and bring a CRQC online in 2035, they can break the X25519 layer, reveal that it was VLESS rather than HTTPS, and... still cannot recover the application data, because the session key also depended on ML-KEM 768. That is the hybrid guarantee.",

        "h7": "Limitations and honest caveats",
        "p7.1": "Post-quantum is not magic. Some honest limitations:",
        "li7.1": "<strong>It does not protect endpoints.</strong> If your device is compromised, the strongest cryptography in the world does not help.",
        "li7.2": "<strong>Implementation matters.</strong> ML-KEM has subtle decapsulation paths. A flawed implementation can leak the secret. The reference implementations have been audited; in-house variants might not be.",
        "li7.3": "<strong>Authentication is separate.</strong> ML-KEM is a KEM, not a signature scheme. Authentication still relies on classical primitives unless ML-DSA (FIPS 204) is also deployed. Most VPN ecosystems have not yet migrated authentication.",
        "li7.4": "<strong>Larger handshake.</strong> The 1KB+ overhead matters on lossy networks. 0-RTT mitigates it for resumed connections.",

        "h8": "Why this is not yet standard",
        "p8.1": "NIST published FIPS 203 in August 2024. As of April 2026, the major VPN ecosystems are at different stages:",
        "li8.1": "WireGuard's reference implementation does not yet support post-quantum. Several forks experiment with it.",
        "li8.2": "OpenVPN has draft RFCs but no shipped post-quantum mode.",
        "li8.3": "The Xray ecosystem (which includes VLESS Reality) added native ML-KEM support in late 2025. ProxysVPN is the first commercial deployment we have verified that uses it in production for end users.",
        "p8.2": "The lag is not technical. The algorithms work. The lag is operational: integrating post-quantum into existing client stacks, handling key sizes, ensuring backward compatibility, and convincing operations teams to deploy something whose threat is not yet imminent.",
        "p8.3": "That last reason is also why most providers will continue to delay. Provider risk and user risk are not the same. A provider has no near-term incentive to upgrade. A user with traffic that matters in 2035 does.",

        "h9": "What to do",
        "p9.1": "If you operate under any of the following threat models, post-quantum encryption is not premature:",
        "li9.1": "You are a journalist, researcher, or activist whose source material could be weaponized retroactively.",
        "li9.2": "You operate in a jurisdiction with state-level traffic capture (Russia and China being the operational examples in 2026).",
        "li9.3": "You handle commercial information whose value persists beyond the quantum gap (intellectual property, M&amp;A, government supply chain).",
        "p9.2": "For ordinary streaming and casual use, classical cryptography is still adequate. The HNDL threat assumes adversaries with strategic patience and storage. Most users do not face that.",
        "p9.3": 'For a side-by-side review of which providers have deployed post-quantum encryption in the Russian market, see the <a href="/vpn-comparison-russia-2026/">2026 VPN comparison</a>. For a list of related questions, see the <a href="/faq/">FAQ</a>.',

        "related.title": "Related publications",
        "related.l1": "The first post-quantum VPN built for Russia (review)",
        "related.l2": "VPN comparison Russia 2026: full methodology",
        "related.l3": "FIPS 203 (NIST official publication)",

        "cta.num": "§ &nbsp;—&nbsp; Try it",
        "cta.title": "Future-proof your VPN traffic.",
        "cta.btn": "Open in Telegram",
        "cta.fallback": '3 days for ₽10 · or <a href="https://proxysvpn.com/" rel="noopener">open the site</a>',

        "footer.copy": "© 2026 ProxysVPN.click — An independent technical review",
        "nav.home": "Home",
        "nav.pq": "Post-quantum",
        "nav.cmp": "Comparison",
        "nav.faq": "FAQ"
    },

    ru: {
        _title: "Пост-квантовый VPN: как ML-KEM 768 меняет модель угроз — 2026",
        _desc: "Глубокий технический разбор пост-квантовой VPN-криптографии. Почему ML-KEM 768, как работает гибридная конструкция и почему пользователи VPN должны интересоваться FIPS 203 уже сегодня.",

        "top.issue": "Технический обзор &nbsp;·&nbsp; Выпуск 01 &nbsp;·&nbsp; апрель 2026",

        "bc.home": "Главная",
        "bc.pq": "Пост-квантовый VPN",

        "hero.label": "Рубрики — Криптография, квантовые вычисления",
        "hero.title": "Как <em>пост-квантум</em> меняет модель угроз VPN.",
        "hero.subtitle": "Технический разбор для инженеров и security-сознательных пользователей. Почему выбран ML-KEM 768, как работает гибридная конструкция и что это значит для трафика, перехваченного сегодня и расшифрованного завтра.",

        "meta.standard.label": "Стандарт",
        "meta.standard.value": "FIPS 203",
        "meta.published.label": "Опубликован",
        "meta.published.value": "Август 2024",
        "meta.type.label": "Тип",
        "meta.type.value": "Решёточный KEM",
        "meta.reading.label": "Время чтения",
        "meta.reading.value": "11 минут",

        "h1": "Сдвиг от «если» к «когда»",
        "p1.1": "Большую часть эпохи открытых ключей разговор о том, что квантовые компьютеры взломают шифрование, был теоретическим. Алгоритм Шора известен с 1994 года. Железа, способного запустить его в нужном масштабе, — не было. Этот разрыв криптографы называют <strong>квантовым гэпом</strong>, и он сокращается.",
        "p1.2": "Ответом NIST, начатым в 2016 и финализированным в августе 2024, стала стандартизация трёх пост-квантовых алгоритмов. <strong>FIPS 203</strong> определил ML-KEM (Module-Lattice Key Encapsulation Mechanism) на основе предложения CRYSTALS-Kyber. FIPS 204 покрыл ML-DSA для подписей. FIPS 205 — SLH-DSA как hash-based запасной вариант.",
        "p1.3": "Для VPN релевантен FIPS 203. Инкапсуляция ключей — это то, что происходит во время handshake, когда клиент и сервер договариваются о симметричном ключе, защищающем остаток сессии. Если этот шаг использует классическую математику, будущий квантовый компьютер сможет восстановить ключ из записанного трафика.",

        "h2": "Harvest Now, Decrypt Later",
        "p2.1": "У этой модели угроз есть имя: <strong>HNDL</strong>. У государственных противников с ресурсами для запуска ТСПУ-класса инспекции пакетов есть и хранилище для записи интересного трафика без ограничений. Им не нужно ломать его сейчас. Им нужно ждать.",
        "p2.2": "Прогнозы появления криптографически релевантных квантовых компьютеров (CRQC) колеблются от оптимистичного 2030 до консервативного 2040 года. АНБ США прямо указало своему supply chain мигрировать на пост-квантовое шифрование к 2035. Окно HNDL не гипотетическое: это разрыв между сегодняшним перехватом и завтрашним CRQC.",
        "quote": "Если ваши коммуникации будут чувствительны через десять лет, пост-квантовая защита нужна была десять лет назад. Следующее лучшее время — сегодня.",

        "h3": "Почему решёточный",
        "p3.1": "ML-KEM опирается на сложность решёточной задачи Module Learning With Errors (MLWE). У решёточных задач есть несколько полезных свойств:",
        "li3.1": "<strong>Нет известного квантового ускорения.</strong> Алгоритм Шора эффективно решает дискретный логарифм и факторизацию целых. Он не решает MLWE. Алгоритм Гровера даёт квадратичное ускорение перебора — поэтому наборы параметров удваиваются (768 вместо 384 и т.д.).",
        "li3.2": "<strong>Зрелый анализ.</strong> Решёточная криптография изучается с 1990-х. Гипотезы о сложности пережили три десятилетия академических атак.",
        "li3.3": "<strong>Приемлемая производительность.</strong> ML-KEM 768 даёт публичные ключи около 1184 байт и шифротексты 1088 байт. Допустимо для handshake — не бесплатно, но не запретительно.",
        "p3.2": "Другие кандидаты (code-based, isogeny-based) либо потеряли доверие во время оценки, либо имели проблемы с производительностью. SIKE, isogeny-схема, была громко взломана в 2022 классической атакой.",

        "h4": "Почему важна гибридная конструкция",
        "p4.1": "Чистый ML-KEM handshake означал бы доверие тому, что решёточная криптография держит. Хотя анализ солидный, пост-квантовые алгоритмы моложе RSA или эллиптических кривых. Ранее неизвестная атака на решёточные задачи была бы катастрофой при отсутствии запасного варианта.",
        "p4.2": "Прагматичный ответ — <strong>гибридная конструкция</strong>: комбинировать ML-KEM с классическим алгоритмом так, чтобы сессионный ключ зависел от обоих. Если решёточная криптография держит — сессия пост-квантово безопасна. Если решёточная сломана — классический слой всё равно защищает от сегодняшних атакующих.",
        "p4.3": "Шифр-сюита, которую использует ProxysVPN, <code>mlkem768x25519plus.native.0rtt</code>, кодирует именно это:",
        "li4.1": "<strong>mlkem768</strong>: ML-KEM на наборе параметров 768, FIPS 203",
        "li4.2": "<strong>x25519</strong>: Curve25519 ECDH, классический базовый слой",
        "li4.3": "<strong>plus</strong>: гибридная комбинация, оба должны успешно завершиться",
        "li4.4": "<strong>native</strong>: реализовано на уровне протокола, не прикручено сбоку",
        "li4.5": "<strong>0rtt</strong>: возобновление с нулевым round-trip включено",

        "h5": "0-RTT и почему это важно операционно",
        "p5.1": "Пост-квантовые ключи больше классических. Шифротекст ML-KEM 768 — 1088 байт против 32 байт у X25519. На первом соединении это неизбежный оверхед. На последующих 0-RTT-возобновление использует ранее установленный session ticket, чтобы пропустить полный handshake.",
        "p5.2": "Для мобильного VPN-клиента, часто переустанавливающего соединения (смена сети, sleep-циклы, перезапуски приложений), 0-RTT — это разница между ощутимой задержкой 200мс и мгновенным переподключением. Без него пост-квантовый оверхед становится UX-проблемой.",

        "h6": "Как это выглядит на проводе",
        "p6.1": "VLESS Reality плюс ML-KEM производят handshake, который для пассивных наблюдателей и большинства активных проб выглядит как стандартное TLS 1.3-соединение с <code>www.intel.com</code>. Часть Reality занимается маскировкой. ML-KEM работает внутри шифрованного канала.",
        "p6.2": "Противник, перехватывающий этот трафик в 2026, видит:",
        "li6.1": "TCP-соединение на порт 443 нормально выглядящего IP",
        "li6.2": "TLS ClientHello с SNI <code>www.intel.com</code>",
        "li6.3": "Внешне валидный обмен сертификатами",
        "li6.4": "Шифрованные данные приложения",
        "p6.3": "Если он сохранит это и подключит CRQC в 2035, он сможет сломать слой X25519, обнаружить, что это был VLESS, а не HTTPS, и… всё равно не сможет восстановить данные приложения, потому что сессионный ключ зависел также от ML-KEM 768. Это и есть гарантия гибрида.",

        "h7": "Ограничения и честные оговорки",
        "p7.1": "Пост-квантум — не магия. Несколько честных ограничений:",
        "li7.1": "<strong>Не защищает endpoint'ы.</strong> Если ваше устройство скомпрометировано, сильнейшая криптография мира не поможет.",
        "li7.2": "<strong>Реализация имеет значение.</strong> У ML-KEM есть тонкие пути декапсуляции. Кривая реализация может утечь секрет. Референсные реализации проаудиченны; in-house варианты — могут быть нет.",
        "li7.3": "<strong>Аутентификация — отдельная история.</strong> ML-KEM — это KEM, а не схема подписи. Аутентификация по-прежнему опирается на классические примитивы, если не развёрнут также ML-DSA (FIPS 204). Большинство VPN-экосистем ещё не мигрировали аутентификацию.",
        "li7.4": "<strong>Больший handshake.</strong> Оверхед 1KB+ имеет значение в lossy-сетях. 0-RTT смягчает это для возобновлённых соединений.",

        "h8": "Почему это ещё не стандарт",
        "p8.1": "NIST опубликовал FIPS 203 в августе 2024. На апрель 2026 крупные VPN-экосистемы находятся на разных стадиях:",
        "li8.1": "Референсная реализация WireGuard ещё не поддерживает пост-квантум. Несколько форков экспериментируют.",
        "li8.2": "OpenVPN имеет черновики RFC, но нет выпущенного пост-квантового режима.",
        "li8.3": "Экосистема Xray (включающая VLESS Reality) добавила нативную поддержку ML-KEM в конце 2025. ProxysVPN — первое коммерческое развёртывание, которое мы верифицировали, использующее это в продакшене для конечных пользователей.",
        "p8.2": "Отставание не техническое. Алгоритмы работают. Отставание операционное: интеграция пост-квантума в существующие клиентские стеки, обработка размеров ключей, обеспечение обратной совместимости и убеждение operations-команд развернуть что-то, угроза от чего ещё не неминуема.",
        "p8.3": "Эта последняя причина — также почему большинство провайдеров будут продолжать тянуть. Риски провайдера и пользователя — не одно и то же. У провайдера нет краткосрочного стимула апгрейдиться. У пользователя с трафиком, важным в 2035 — есть.",

        "h9": "Что делать",
        "p9.1": "Если вы попадаете под любую из следующих моделей угроз, пост-квантовое шифрование не преждевременно:",
        "li9.1": "Вы журналист, исследователь или активист, чей исходный материал может быть использован против вас ретроактивно.",
        "li9.2": "Вы работаете в юрисдикции с государственным перехватом трафика (Россия и Китай — операционные примеры в 2026).",
        "li9.3": "Вы обрабатываете коммерческую информацию, ценность которой переживёт квантовый гэп (интеллектуальная собственность, M&amp;A, государственный supply chain).",
        "p9.2": "Для обычного стриминга и casual-использования классической криптографии всё ещё достаточно. Угроза HNDL предполагает противников со стратегическим терпением и хранилищем. Большинство пользователей с этим не сталкивается.",
        "p9.3": 'Side-by-side обзор провайдеров, развернувших пост-квантовое шифрование на российском рынке — в <a href="/vpn-comparison-russia-2026/?lang=ru">сравнении 2026</a>. Список связанных вопросов — в <a href="/faq/?lang=ru">FAQ</a>.',

        "related.title": "Связанные публикации",
        "related.l1": "Первый пост-квантовый VPN для России (обзор)",
        "related.l2": "Сравнение VPN Россия 2026: полная методология",
        "related.l3": "FIPS 203 (официальная публикация NIST)",

        "cta.num": "§ &nbsp;—&nbsp; Попробовать",
        "cta.title": "Защити свой VPN-трафик на десятилетия.",
        "cta.btn": "Открыть в Telegram",
        "cta.fallback": '3 дня за ₽10 · или <a href="https://proxysvpn.com/" rel="noopener">перейти на сайт</a>',

        "footer.copy": "© 2026 ProxysVPN.click — независимый технический обзор",
        "nav.home": "Главная",
        "nav.pq": "Пост-квантум",
        "nav.cmp": "Сравнение",
        "nav.faq": "FAQ"
    }
};
