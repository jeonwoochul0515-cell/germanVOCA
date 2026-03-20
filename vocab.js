/* * ==========================================================================
 * DATA SECTION (Master Vocabulary List)
 * Generated from PDF source (Day 01 - Day 30)
 * ========================================================================== */
const masterVocabList = [
    // === Existing Words (from main.js) ===
    { id: 1001, word: "Mann", meaning: "남자, 남편", english: "Man", partOfSpeech: "Noun", gender: "der", level: "A1", cognate: true, plural: "Männer", category: "Mensch", examples: [{ de: "Der Mann trinkt Kaffee.", ko: "그 남자는 커피를 마신다." }] },
    { id: 1002, word: "Frau", meaning: "여자, 아내, 부인", english: "Woman/Mrs.", partOfSpeech: "Noun", gender: "die", level: "A1", polysemy: true, plural: "Frauen", category: "Mensch", examples: [{ de: "Die Frau liest ein Buch.", ko: "그 여자는 책을 읽는다." }] },
    { id: 1003, word: "Kind", meaning: "아이", english: "Child", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Kinder", category: "Mensch", examples: [{ de: "Das Kind spielt im Garten.", ko: "그 아이는 정원에서 논다." }] },
    { id: 1004, word: "Vater", meaning: "아버지", english: "Father", partOfSpeech: "Noun", gender: "der", level: "A1", cognate: true, plural: "Väter", category: "Mensch", examples: [{ de: "Mein Vater arbeitet viel.", ko: "나의 아버지는 많이 일한다." }] },
    { id: 1005, word: "Mutter", meaning: "어머니", english: "Mother", partOfSpeech: "Noun", gender: "die", level: "A1", cognate: true, plural: "Mütter", category: "Mensch", examples: [{ de: "Meine Mutter kocht gut.", ko: "나의 어머니는 요리를 잘 한다." }] },
    { id: 1006, word: "Haus", meaning: "집, 건물", english: "House", partOfSpeech: "Noun", gender: "das", level: "A1", cognate: true, plural: "Häuser", category: "Alltag", examples: [{ de: "Das Haus ist groß.", ko: "그 집은 크다." }] },
    { id: 1007, word: "Wasser", meaning: "물", english: "Water", partOfSpeech: "Noun", gender: "das", level: "A1", cognate: true, plural: "Wasser", category: "Essen", examples: [{ de: "Ich trinke Wasser.", ko: "나는 물을 마신다." }] },
    { id: 1008, word: "Brot", meaning: "빵", english: "Bread", partOfSpeech: "Noun", gender: "das", level: "A1", cognate: true, plural: "Brote", category: "Essen", examples: [{ de: "Ich esse Brot zum Frühstück.", ko: "나는 아침에 빵을 먹는다." }] },
    { id: 1009, word: "Apfel", meaning: "사과", english: "Apple", partOfSpeech: "Noun", gender: "der", level: "A1", cognate: true, plural: "Äpfel", category: "Essen", examples: [{ de: "Der Apfel ist rot.", ko: "그 사과는 빨갛다." }] },
    { id: 1010, word: "Schule", meaning: "학교", english: "School", partOfSpeech: "Noun", gender: "die", level: "A1", cognate: true, plural: "Schulen", category: "Bildung", examples: [{ de: "Die Kinder gehen in die Schule.", ko: "아이들은 학교에 간다." }] },
    { id: 1011, word: "Zeit", meaning: "시간, 시대", english: "Time", partOfSpeech: "Noun", gender: "die", level: "A1", polysemy: true, plural: "Zeiten", category: "Abstrakt", examples: [{ de: "Ich habe keine Zeit.", ko: "나는 시간이 없다." }] },
    { id: 1012, word: "Hand", meaning: "손", english: "Hand", partOfSpeech: "Noun", gender: "die", level: "A1", cognate: true, plural: "Hände", category: "Mensch", examples: [{ de: "Ich wasche meine Hände.", ko: "나는 손을 씻는다." }] },
    { id: 1013, word: "Freund", meaning: "친구, 연인", english: "Friend", partOfSpeech: "Noun", gender: "der", level: "A1", cognate: true, polysemy: true, plural: "Freunde", category: "Mensch", examples: [{ de: "Mein Freund wohnt in Berlin.", ko: "내 친구는 베를린에 산다." }] },
    { id: 1014, word: "Stadt", meaning: "도시", english: "City", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Städte", category: "Reise", examples: [{ de: "Die Stadt ist sehr schön.", ko: "그 도시는 매우 아름답다." }] },
    { id: 1015, word: "Land", meaning: "나라, 땅, 시골", english: "Land/Country", partOfSpeech: "Noun", gender: "das", level: "A1", cognate: true, polysemy: true, plural: "Länder", category: "Reise", examples: [{ de: "Deutschland ist ein großes Land.", ko: "독일은 큰 나라이다." }] },
    { id: 1016, word: "Auge", meaning: "눈", english: "Eye", partOfSpeech: "Noun", gender: "das", level: "A1", cognate: true, plural: "Augen", category: "Mensch", examples: [{ de: "Sie hat blaue Augen.", ko: "그녀는 파란 눈을 가지고 있다." }] },
    { id: 1017, word: "Name", meaning: "이름", english: "Name", partOfSpeech: "Noun", gender: "der", level: "A1", cognate: true, plural: "Namen", category: "Mensch", examples: [{ de: "Wie ist Ihr Name?", ko: "성함이 어떻게 되세요?" }] },
    { id: 1018, word: "Tag", meaning: "날, 하루, 낮", english: "Day", partOfSpeech: "Noun", gender: "der", level: "A1", cognate: true, polysemy: true, plural: "Tage", category: "Abstrakt", examples: [{ de: "Heute ist ein schöner Tag.", ko: "오늘은 좋은 날이다." }] },
    { id: 1019, word: "Nacht", meaning: "밤", english: "Night", partOfSpeech: "Noun", gender: "die", level: "A1", cognate: true, plural: "Nächte", category: "Abstrakt", examples: [{ de: "Gute Nacht!", ko: "좋은 밤 되세요!" }] },
    { id: 1020, word: "Mund", meaning: "입", english: "Mouth", partOfSpeech: "Noun", gender: "der", level: "A1", cognate: true, plural: "Münder", category: "Mensch", examples: [{ de: "Mach den Mund auf!", ko: "입을 벌려!" }] },
    { id: 3001, word: "Erfahrung", meaning: "경험", english: "Experience", partOfSpeech: "Noun", gender: "die", level: "B1", plural: "Erfahrungen", category: "Abstrakt", examples: [{ de: "Ich habe viel Erfahrung.", ko: "나는 경험이 많다." }] },
    { id: 3002, word: "Möglichkeit", meaning: "가능성, 기회", english: "Possibility/Opportunity", partOfSpeech: "Noun", gender: "die", level: "B1", polysemy: true, plural: "Möglichkeiten", category: "Abstrakt", examples: [{ de: "Es gibt viele Möglichkeiten.", ko: "많은 가능성이 있다." }] },
    { id: 3003, word: "Entscheidung", meaning: "결정", english: "Decision", partOfSpeech: "Noun", gender: "die", level: "B1", plural: "Entscheidungen", category: "Abstrakt", examples: [{ de: "Das ist eine schwere Entscheidung.", ko: "그것은 어려운 결정이다." }] },
    { id: 3004, word: "Verantwortung", meaning: "책임", english: "Responsibility", partOfSpeech: "Noun", gender: "die", level: "B2", plural: "Verantwortungen", category: "Gesellschaft", examples: [{ de: "Er hat viel Verantwortung.", ko: "그는 책임이 많다." }] },
    { id: 3005, word: "Gesellschaft", meaning: "사회, 단체, 회사", english: "Society/Company", partOfSpeech: "Noun", gender: "die", level: "B2", polysemy: true, plural: "Gesellschaften", category: "Gesellschaft", examples: [{ de: "Die Gesellschaft verändert sich.", ko: "사회가 변하고 있다." }] },
    { id: 3006, word: "Unterschied", meaning: "차이", english: "Difference", partOfSpeech: "Noun", gender: "der", level: "B1", plural: "Unterschiede", category: "Abstrakt", examples: [{ de: "Was ist der Unterschied?", ko: "차이가 뭐야?" }] },
    { id: 3007, word: "Zukunft", meaning: "미래", english: "Future", partOfSpeech: "Noun", gender: "die", level: "B1", plural: "Zukünfte", category: "Abstrakt", examples: [{ de: "Die Zukunft ist ungewiss.", ko: "미래는 불확실하다." }] },
    { id: 3008, word: "Umwelt", meaning: "환경", english: "Environment", partOfSpeech: "Noun", gender: "die", level: "B1", plural: "Umwelten", category: "Natur", examples: [{ de: "Wir müssen die Umwelt schützen.", ko: "우리는 환경을 보호해야 한다." }] },
    { id: 3009, word: "Einfluss", meaning: "영향", english: "Influence", partOfSpeech: "Noun", gender: "der", level: "B2", cognate: true, plural: "Einflüsse", category: "Abstrakt", examples: [{ de: "Er hat großen Einfluss.", ko: "그는 큰 영향력이 있다." }] },
    { id: 3010, word: "Gefühl", meaning: "느낌, 감정", english: "Feeling", partOfSpeech: "Noun", gender: "das", level: "B1", plural: "Gefühle", category: "Abstrakt", examples: [{ de: "Ich habe ein gutes Gefühl.", ko: "나는 좋은 느낌이 든다." }] },
    { id: 3011, word: "Wirtschaft", meaning: "경제, 주점", english: "Economy/Pub", partOfSpeech: "Noun", gender: "die", level: "B2", polysemy: true, plural: "Wirtschaften", category: "Wirtschaft", examples: [{ de: "Die Wirtschaft wächst.", ko: "경제가 성장한다." }] },
    { id: 3012, word: "Verhältnis", meaning: "관계, 비율", english: "Relation/Ratio", partOfSpeech: "Noun", gender: "das", level: "B2", polysemy: true, plural: "Verhältnisse", category: "Abstrakt", examples: [{ de: "Das Verhältnis ist gut.", ko: "관계가 좋다." }] },
    { id: 3013, word: "Bedeutung", meaning: "의미, 중요성", english: "Meaning/Significance", partOfSpeech: "Noun", gender: "die", level: "B1", polysemy: true, plural: "Bedeutungen", category: "Kommunikation", examples: [{ de: "Was ist die Bedeutung?", ko: "의미가 뭐야?" }] },
    { id: 3014, word: "Zustand", meaning: "상태", english: "Condition", partOfSpeech: "Noun", gender: "der", level: "B1", plural: "Zustände", category: "Abstrakt", examples: [{ de: "Der Zustand ist schlecht.", ko: "상태가 나쁘다." }] },
    { id: 3015, word: "Entwicklung", meaning: "발전, 개발", english: "Development", partOfSpeech: "Noun", gender: "die", level: "B1", plural: "Entwicklungen", category: "Gesellschaft", examples: [{ de: "Die Entwicklung ist positiv.", ko: "발전이 긍정적이다." }] },
    { id: 1601, word: "sein", meaning: "~이다, 있다", english: "to be", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ist", past: "war", perfect: "ist gewesen" }, category: "Abstrakt", examples: [{ de: "Ich bin müde.", ko: "나는 피곤하다." }] },
    { id: 1602, word: "haben", meaning: "가지다", english: "to have", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie hat", past: "hatte", perfect: "hat gehabt" }, category: "Abstrakt", examples: [{ de: "Ich habe ein Auto.", ko: "나는 자동차가 있다." }] },
    { id: 1603, word: "werden", meaning: "~이 되다", english: "to become", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wird", past: "wurde", perfect: "ist geworden" }, category: "Abstrakt", examples: [{ de: "Es wird kalt.", ko: "추워지고 있다." }] },
    { id: 1604, word: "können", meaning: "~할 수 있다", english: "can/be able to", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie kann", past: "konnte", perfect: "hat gekonnt" }, category: "Abstrakt", examples: [{ de: "Ich kann Deutsch sprechen.", ko: "나는 독일어를 할 수 있다." }] },
    { id: 1605, word: "machen", meaning: "하다, 만들다", english: "to do/make", partOfSpeech: "Verb", level: "A1", cognate: true, polysemy: true, forms: { present3rd: "er/sie macht", past: "machte", perfect: "hat gemacht" }, category: "Alltag", examples: [{ de: "Was machst du?", ko: "너 뭐 하니?" }] },
    { id: 1606, word: "gehen", meaning: "가다, 작동하다", english: "to go", partOfSpeech: "Verb", level: "A1", cognate: true, polysemy: true, forms: { present3rd: "er/sie geht", past: "ging", perfect: "ist gegangen" }, category: "Alltag", examples: [{ de: "Ich gehe in die Schule.", ko: "나는 학교에 간다." }] },
    { id: 1607, word: "kommen", meaning: "오다", english: "to come", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie kommt", past: "kam", perfect: "ist gekommen" }, category: "Alltag", examples: [{ de: "Er kommt aus Korea.", ko: "그는 한국 출신이다." }] },
    { id: 1608, word: "sehen", meaning: "보다", english: "to see", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie sieht", past: "sah", perfect: "hat gesehen" }, category: "Kommunikation", examples: [{ de: "Ich sehe einen Hund.", ko: "나는 개 한 마리를 본다." }] },
    { id: 1609, word: "essen", meaning: "먹다", english: "to eat", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie isst", past: "aß", perfect: "hat gegessen" }, category: "Essen", examples: [{ de: "Wir essen zusammen.", ko: "우리는 함께 먹는다." }] },
    { id: 1610, word: "trinken", meaning: "마시다", english: "to drink", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie trinkt", past: "trank", perfect: "hat getrunken" }, category: "Essen", examples: [{ de: "Sie trinkt Tee.", ko: "그녀는 차를 마신다." }] },
    { id: 1611, word: "sagen", meaning: "말하다", english: "to say", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie sagt", past: "sagte", perfect: "hat gesagt" }, category: "Kommunikation", examples: [{ de: "Was sagst du?", ko: "뭐라고 말하니?" }] },
    { id: 1612, word: "wissen", meaning: "알다", english: "to know", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie weiß", past: "wusste", perfect: "hat gewusst" }, category: "Kommunikation", examples: [{ de: "Ich weiß es nicht.", ko: "나는 모른다." }] },
    { id: 1613, word: "geben", meaning: "주다, 있다(es gibt)", english: "to give", partOfSpeech: "Verb", level: "A1", cognate: true, polysemy: true, forms: { present3rd: "er/sie gibt", past: "gab", perfect: "hat gegeben" }, category: "Kommunikation", examples: [{ de: "Es gibt viele Leute hier.", ko: "여기에 많은 사람들이 있다." }] },
    { id: 1614, word: "kommen", meaning: "오다", english: "to come", partOfSpeech: "Verb", level: "A1", cognate: true, forms: { present3rd: "er/sie kommt", past: "kam", perfect: "ist gekommen" }, category: "Alltag", examples: [{ de: "Kommst du mit?", ko: "같이 갈래?" }] },
    { id: 1615, word: "heißen", meaning: "~라고 부르다", english: "to be called", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie heißt", past: "hieß", perfect: "hat geheißen" }, category: "Kommunikation", examples: [{ de: "Wie heißt du?", ko: "너 이름이 뭐야?" }] },
    { id: 3601, word: "verstehen", meaning: "이해하다", english: "to understand", partOfSpeech: "Verb", level: "B1", cognate: true, forms: { present3rd: "er/sie versteht", past: "verstand", perfect: "hat verstanden" }, category: "Kommunikation" },
    { id: 3602, word: "versuchen", meaning: "시도하다, 노력하다", english: "to try", partOfSpeech: "Verb", level: "B1", forms: { present3rd: "er/sie versucht", past: "versuchte", perfect: "hat versucht" }, category: "Abstrakt" },
    { id: 3603, word: "entwickeln", meaning: "발전시키다, 개발하다", english: "to develop", partOfSpeech: "Verb", level: "B2", forms: { present3rd: "er/sie entwickelt", past: "entwickelte", perfect: "hat entwickelt" }, category: "Gesellschaft" },
    { id: 3604, word: "entscheiden", meaning: "결정하다", english: "to decide", partOfSpeech: "Verb", level: "B1", forms: { present3rd: "er/sie entscheidet", past: "entschied", perfect: "hat entschieden" }, category: "Abstrakt" },
    { id: 3605, word: "empfehlen", meaning: "추천하다", english: "to recommend", partOfSpeech: "Verb", level: "B1", forms: { present3rd: "er/sie empfiehlt", past: "empfahl", perfect: "hat empfohlen" }, category: "Kommunikation" },
    { id: 3606, word: "vergleichen", meaning: "비교하다", english: "to compare", partOfSpeech: "Verb", level: "B1", forms: { present3rd: "er/sie vergleicht", past: "verglich", perfect: "hat verglichen" }, category: "Abstrakt" },
    { id: 3607, word: "verbessern", meaning: "개선하다, 향상시키다", english: "to improve", partOfSpeech: "Verb", level: "B2", forms: { present3rd: "er/sie verbessert", past: "verbesserte", perfect: "hat verbessert" }, category: "Abstrakt" },
    { id: 3608, word: "erinnern", meaning: "기억하다, 상기시키다", english: "to remember/remind", partOfSpeech: "Verb", level: "B1", polysemy: true, forms: { present3rd: "er/sie erinnert", past: "erinnerte", perfect: "hat erinnert" }, category: "Abstrakt" },
    { id: 3609, word: "erklären", meaning: "설명하다", english: "to explain", partOfSpeech: "Verb", level: "B1", forms: { present3rd: "er/sie erklärt", past: "erklärte", perfect: "hat erklärt" }, category: "Kommunikation" },
    { id: 3610, word: "erreichen", meaning: "도달하다, 연락이 닿다", english: "to reach", partOfSpeech: "Verb", level: "B2", polysemy: true, forms: { present3rd: "er/sie erreicht", past: "erreichte", perfect: "hat erreicht" }, category: "Abstrakt" },
    { id: 3611, word: "erwarten", meaning: "기대하다, 기다리다", english: "to expect", partOfSpeech: "Verb", level: "B2", forms: { present3rd: "er/sie erwartet", past: "erwartete", perfect: "hat erwartet" }, category: "Abstrakt" },
    { id: 3612, word: "genießen", meaning: "즐기다, 누리다", english: "to enjoy", partOfSpeech: "Verb", level: "B1", forms: { present3rd: "er/sie genießt", past: "genoss", perfect: "hat genossen" }, category: "Freizeit" },
    { id: 3613, word: "vermeiden", meaning: "피하다", english: "to avoid", partOfSpeech: "Verb", level: "B2", forms: { present3rd: "er/sie vermeidet", past: "vermied", perfect: "hat vermieden" }, category: "Abstrakt" },
    { id: 3614, word: "gehören", meaning: "~의 것이다, 속하다", english: "to belong to", partOfSpeech: "Verb", level: "B1", forms: { present3rd: "er/sie gehört", past: "gehörte", perfect: "hat gehört" }, category: "Abstrakt" },
    { id: 3615, word: "scheinen", meaning: "빛나다, ~인 것 같다", english: "to shine/seem", partOfSpeech: "Verb", level: "B1", cognate: true, polysemy: true, forms: { present3rd: "er/sie scheint", past: "schien", perfect: "hat geschienen" }, category: "Natur" },
    { id: 1701, word: "gut", meaning: "좋은", english: "good", partOfSpeech: "Adjective", level: "A1", cognate: true, category: "Eigenschaft", examples: [{ de: "Das Essen ist gut.", ko: "음식이 맛있다." }] },
    { id: 1702, word: "schön", meaning: "아름다운, 예쁜, 이미", english: "beautiful/nice", partOfSpeech: "Adjective", level: "A1", polysemy: true, category: "Eigenschaft", examples: [{ de: "Das Wetter ist schön.", ko: "날씨가 좋다." }] },
    { id: 1703, word: "neu", meaning: "새로운", english: "new", partOfSpeech: "Adjective", level: "A1", cognate: true, category: "Eigenschaft", examples: [{ de: "Ich habe ein neues Handy.", ko: "나는 새 핸드폰이 있다." }] },
    { id: 1704, word: "alt", meaning: "오래된, 나이든", english: "old", partOfSpeech: "Adjective", level: "A1", cognate: true, category: "Eigenschaft", examples: [{ de: "Wie alt bist du?", ko: "너 몇 살이야?" }] },
    { id: 1705, word: "groß", meaning: "큰, 키가 큰", english: "big/tall", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft", examples: [{ de: "Er ist sehr groß.", ko: "그는 키가 매우 크다." }] },
    { id: 1706, word: "klein", meaning: "작은", english: "small", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft", examples: [{ de: "Die Wohnung ist klein.", ko: "그 집은 작다." }] },
    { id: 1707, word: "schnell", meaning: "빠른", english: "fast", partOfSpeech: "Adjective", level: "A2", category: "Eigenschaft", examples: [{ de: "Der Zug ist schnell.", ko: "그 기차는 빠르다." }] },
    { id: 1708, word: "langsam", meaning: "느린", english: "slow", partOfSpeech: "Adjective", level: "A2", category: "Eigenschaft", examples: [{ de: "Sprechen Sie bitte langsam.", ko: "천천히 말씀해 주세요." }] },
    { id: 1709, word: "hell", meaning: "밝은", english: "bright", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft", examples: [{ de: "Das Zimmer ist hell.", ko: "그 방은 밝다." }] },
    { id: 1710, word: "dunkel", meaning: "어두운", english: "dark", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft", examples: [{ de: "Es ist dunkel draußen.", ko: "밖이 어둡다." }] },
    { id: 3701, word: "wichtig", meaning: "중요한", english: "important", partOfSpeech: "Adjective", level: "B1", category: "Eigenschaft" },
    { id: 3702, word: "möglich", meaning: "가능한", english: "possible", partOfSpeech: "Adjective", level: "B1", category: "Eigenschaft" },
    { id: 3703, word: "schwierig", meaning: "어려운", english: "difficult", partOfSpeech: "Adjective", level: "B1", category: "Eigenschaft" },
    { id: 3704, word: "verschieden", meaning: "다양한, 다른", english: "different/various", partOfSpeech: "Adjective", level: "B1", polysemy: true, category: "Eigenschaft" },
    { id: 3705, word: "besonder", meaning: "특별한", english: "special", partOfSpeech: "Adjective", level: "B1", category: "Eigenschaft" },
    { id: 3706, word: "erfolgreich", meaning: "성공적인", english: "successful", partOfSpeech: "Adjective", level: "B2", category: "Arbeit" },
    { id: 3707, word: "selbstverständlich", meaning: "자명한, 당연한", english: "self-evident", partOfSpeech: "Adjective", level: "B2", category: "Abstrakt" },
    { id: 3708, word: "abhängig", meaning: "의존하는, ~에 달린", english: "dependent", partOfSpeech: "Adjective", level: "B2", category: "Abstrakt" },
    { id: 3709, word: "ähnlich", meaning: "비슷한", english: "similar", partOfSpeech: "Adjective", level: "B1", category: "Eigenschaft" },
    { id: 3710, word: "gemeinsam", meaning: "공통의, 함께하는", english: "common/together", partOfSpeech: "Adjective", level: "B1", category: "Gesellschaft" },
    { id: 3711, word: "klar", meaning: "맑은, 명확한", english: "clear", partOfSpeech: "Adjective", level: "B1", cognate: true, polysemy: true, category: "Eigenschaft" },
    { id: 3712, word: "genau", meaning: "정확한", english: "exact/accurate", partOfSpeech: "Adjective", level: "B1", category: "Eigenschaft" },
    { id: 3713, word: "falsch", meaning: "틀린, 잘못된", english: "false/wrong", partOfSpeech: "Adjective", level: "A1", cognate: true, category: "Eigenschaft" },
    { id: 3714, word: "echt", meaning: "진짜의, 정말로", english: "real/genuine", partOfSpeech: "Adjective", level: "B1", polysemy: true, category: "Eigenschaft" },
    { id: 3715, word: "stark", meaning: "강한, 매우", english: "strong", partOfSpeech: "Adjective", level: "A1", cognate: true, polysemy: true, category: "Eigenschaft" },

    // === DAY 01 ===
    { id: 20001, word: "heißen", meaning: "~라고 부르다, 이름이 ~이다", english: "to be called", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie heißt", past: "hieß", perfect: "hat geheißen" }, category: "Kommunikation", examples: [{ de: "Ich heiße Anna.", ko: "나는 안나라고 한다." }] },
    { id: 20002, word: "wohnen", meaning: "살다, 거주하다", english: "to live/dwell", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wohnt", past: "wohnte", perfect: "hat gewohnt" }, category: "Alltag", examples: [{ de: "Ich wohne in Berlin.", ko: "나는 베를린에 산다." }] },
    { id: 20003, word: "leben in", meaning: "~에 살다", english: "to live in", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lebt", past: "lebte", perfect: "hat gelebt" }, category: "Alltag", examples: [{ de: "Wir leben in Deutschland.", ko: "우리는 독일에 산다." }] },
    { id: 20004, word: "sprechen", meaning: "말하다", english: "to speak", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie spricht", past: "sprach", perfect: "hat gesprochen" }, category: "Kommunikation", examples: [{ de: "Sprechen Sie Deutsch?", ko: "독일어 하세요?" }] },
    { id: 20005, word: "sich freuen", meaning: "기뻐하다", english: "to be happy/glad", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie freut sich", past: "freute sich", perfect: "hat sich gefreut" }, category: "Abstrakt", examples: [{ de: "Ich freue mich sehr.", ko: "나는 매우 기쁘다." }] },
    { id: 20006, word: "da sein", meaning: "있다, 참석하다", english: "to be there", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ist da", past: "war da", perfect: "ist da gewesen" }, category: "Alltag", examples: [{ de: "Er ist noch nicht da.", ko: "그는 아직 없다." }] },
    { id: 20007, word: "kommen", meaning: "오다", english: "to come", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt", past: "kam", perfect: "ist gekommen" }, category: "Alltag", examples: [{ de: "Wann kommst du?", ko: "너 언제 와?" }] },
    { id: 20008, word: "kommen aus", meaning: "~출신이다", english: "to come from", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt aus", past: "kam aus", perfect: "ist gekommen aus" }, category: "Alltag", examples: [{ de: "Ich komme aus Korea.", ko: "나는 한국에서 왔다." }] },
    { id: 20009, word: "buchstabieren", meaning: "철자를 말하다", english: "to spell", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie buchstabiert", past: "buchstabierte", perfect: "hat buchstabiert" }, category: "Bildung", examples: [{ de: "Können Sie das buchstabieren?", ko: "철자를 말씀해 주시겠어요?" }] },
    { id: 20010, word: "sein", meaning: "~이다, 있다", english: "to be", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ist", past: "war", perfect: "ist gewesen" }, category: "Abstrakt", examples: [{ de: "Das ist mein Buch.", ko: "이것은 내 책이다." }] },
    { id: 20011, word: "Stadt", meaning: "도시", english: "City", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Städte", category: "Reise", examples: [{ de: "Berlin ist eine große Stadt.", ko: "베를린은 큰 도시이다." }] },
    { id: 20012, word: "Sprache", meaning: "언어", english: "Language", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Sprachen", category: "Bildung", examples: [{ de: "Deutsch ist eine Sprache.", ko: "독일어는 하나의 언어이다." }] },
    { id: 20013, word: "Fremdsprache", meaning: "외국어", english: "Foreign Language", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Fremdsprachen", category: "Bildung", examples: [{ de: "Ich lerne eine Fremdsprache.", ko: "나는 외국어를 배운다." }] },
    { id: 20014, word: "sich vorstellen", meaning: "자기소개하다", english: "to introduce oneself", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie stellt sich vor", past: "stellte sich vor", perfect: "hat sich vorgestellt" }, category: "Kommunikation", examples: [{ de: "Ich stelle mich vor.", ko: "자기소개를 합니다." }] },
    { id: 20015, word: "Information", meaning: "정보", english: "Information", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Informationen", category: "Kommunikation", examples: [{ de: "Ich brauche eine Information.", ko: "나는 정보가 필요하다." }] },
    { id: 20016, word: "Adresse", meaning: "주소", english: "Address", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Adressen", category: "Alltag", examples: [{ de: "Was ist Ihre Adresse?", ko: "주소가 어떻게 되세요?" }] },
    { id: 20017, word: "Land", meaning: "나라, 국가", english: "Country", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Länder", category: "Reise", examples: [{ de: "Aus welchem Land kommen Sie?", ko: "어느 나라에서 오셨어요?" }] },
    { id: 20018, word: "Name", meaning: "이름", english: "Name", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Namen", category: "Mensch", examples: [{ de: "Mein Name ist Peter.", ko: "제 이름은 페터입니다." }] },
    { id: 20019, word: "Familienname", meaning: "성(Family Name)", english: "Surname", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Familiennamen", category: "Mensch", examples: [{ de: "Wie ist Ihr Familienname?", ko: "성이 어떻게 되세요?" }] },
    { id: 20020, word: "Anmeldung", meaning: "등록, 신청", english: "Registration", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Anmeldungen", category: "Alltag", examples: [{ de: "Bitte füllen Sie die Anmeldung aus.", ko: "등록서를 작성해 주세요." }] },
    { id: 20021, word: "Entschuldigung", meaning: "사과, 실례합니다", english: "Excuse me/Apology", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Entschuldigungen", category: "Kommunikation", examples: [{ de: "Entschuldigung, wo ist die Schule?", ko: "실례합니다, 학교가 어디예요?" }] },
    { id: 20022, word: "Nummer", meaning: "번호", english: "Number", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Nummern", category: "Alltag", examples: [{ de: "Was ist Ihre Nummer?", ko: "번호가 뭐예요?" }] },
    { id: 20023, word: "Hauptstadt", meaning: "수도", english: "Capital City", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Hauptstädte", category: "Reise", examples: [{ de: "Berlin ist die Hauptstadt.", ko: "베를린은 수도이다." }] },
    { id: 20024, word: "Geburtsort", meaning: "출생지", english: "Place of Birth", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Geburtsorte", category: "Mensch", examples: [{ de: "Mein Geburtsort ist Seoul.", ko: "나의 출생지는 서울이다." }] },
    { id: 20025, word: "Deutsch", meaning: "독일어", english: "German (Language)", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Bildung", examples: [{ de: "Ich lerne Deutsch.", ko: "나는 독일어를 배운다." }] },
    { id: 20026, word: "Korea", meaning: "한국", english: "Korea", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Reise", examples: [{ de: "Ich komme aus Korea.", ko: "나는 한국에서 왔다." }] },
    { id: 20027, word: "Postleitzahl", meaning: "우편번호", english: "Postal Code", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Postleitzahlen", category: "Alltag", examples: [{ de: "Die Postleitzahl ist 10115.", ko: "우편번호는 10115이다." }] },
    { id: 20028, word: "Heimat", meaning: "고향", english: "Homeland", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Heimaten", category: "Reise", examples: [{ de: "Meine Heimat ist Korea.", ko: "나의 고향은 한국이다." }] },
    { id: 20029, word: "Formular", meaning: "서식, 신청서", english: "Form", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Formulare", category: "Alltag", examples: [{ de: "Bitte füllen Sie das Formular aus.", ko: "서식을 작성해 주세요." }] },
    { id: 20030, word: "geboren", meaning: "태어난", english: "born", partOfSpeech: "Adjective", level: "A1", category: "Mensch", examples: [{ de: "Ich bin in Seoul geboren.", ko: "나는 서울에서 태어났다." }] },

    // === DAY 02 ===
    { id: 20031, word: "möchten", meaning: "~하고 싶다", english: "would like to", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie möchte", past: "wollte", perfect: "hat gewollt" }, category: "Abstrakt", examples: [{ de: "Ich möchte Kaffee, bitte.", ko: "커피 주세요." }] },
    { id: 20032, word: "heiraten", meaning: "결혼하다", english: "to marry", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie heiratet", past: "heiratete", perfect: "hat geheiratet" }, category: "Mensch", examples: [{ de: "Sie heiraten im Juni.", ko: "그들은 6월에 결혼한다." }] },
    { id: 20033, word: "danken", meaning: "감사하다", english: "to thank", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie dankt", past: "dankte", perfect: "hat gedankt" }, category: "Kommunikation", examples: [{ de: "Ich danke Ihnen.", ko: "감사합니다." }] },
    { id: 20034, word: "Kinder haben", meaning: "아이가 있다", english: "to have children", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hat Kinder", past: "hatte Kinder", perfect: "hat Kinder gehabt" }, category: "Mensch", examples: [{ de: "Sie haben zwei Kinder.", ko: "그들은 아이가 둘 있다." }] },
    { id: 20035, word: "zusammenleben", meaning: "함께 살다", english: "to live together", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lebt zusammen", past: "lebte zusammen", perfect: "hat zusammengelebt" }, category: "Mensch", examples: [{ de: "Wir leben zusammen.", ko: "우리는 함께 산다." }] },
    { id: 20036, word: "lieben", meaning: "사랑하다", english: "to love", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie liebt", past: "liebte", perfect: "hat geliebt" }, category: "Abstrakt", examples: [{ de: "Ich liebe dich.", ko: "사랑해." }] },
    { id: 20037, word: "besuchen", meaning: "방문하다", english: "to visit", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie besucht", past: "besuchte", perfect: "hat besucht" }, category: "Alltag", examples: [{ de: "Ich besuche meine Eltern.", ko: "나는 부모님을 방문한다." }] },
    { id: 20038, word: "nennen", meaning: "명명하다, 부르다", english: "to name/call", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie nennt", past: "nannte", perfect: "hat genannt" }, category: "Kommunikation", examples: [{ de: "Wir nennen ihn Tom.", ko: "우리는 그를 톰이라고 부른다." }] },
    { id: 20039, word: "teilen", meaning: "나누다, 공유하다", english: "to share/divide", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie teilt", past: "teilte", perfect: "hat geteilt" }, category: "Alltag", examples: [{ de: "Wir teilen das Essen.", ko: "우리는 음식을 나눈다." }] },
    { id: 20040, word: "kennen", meaning: "알다 (사람, 장소)", english: "to know", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kennt", past: "kannte", perfect: "hat gekannt" }, category: "Kommunikation", examples: [{ de: "Kennst du Berlin?", ko: "너 베를린 아니?" }] },
    { id: 20041, word: "Herr", meaning: "씨, 미스터, 신사", english: "Mr./Gentleman", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Herren", category: "Mensch", examples: [{ de: "Guten Tag, Herr Müller.", ko: "안녕하세요, 뮐러 씨." }] },
    { id: 20042, word: "Familie", meaning: "가족", english: "Family", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Familien", category: "Mensch", examples: [{ de: "Meine Familie ist groß.", ko: "우리 가족은 대가족이다." }] },
    { id: 20043, word: "Geschwister", meaning: "형제자매", english: "Siblings", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Geschwister", category: "Mensch", examples: [{ de: "Hast du Geschwister?", ko: "형제자매가 있니?" }] }, // Plural only usually
    { id: 20044, word: "Großeltern", meaning: "조부모", english: "Grandparents", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Großeltern", category: "Mensch", examples: [{ de: "Meine Großeltern wohnen auf dem Land.", ko: "조부모님은 시골에 사신다." }] }, // Plural
    { id: 20045, word: "Großvater", meaning: "할아버지", english: "Grandfather", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Großväter", category: "Mensch", examples: [{ de: "Mein Großvater ist 80 Jahre alt.", ko: "할아버지는 80세이시다." }] },
    { id: 20046, word: "Eltern", meaning: "부모", english: "Parents", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Eltern", category: "Mensch", examples: [{ de: "Meine Eltern arbeiten.", ko: "부모님은 일하신다." }] }, // Plural
    { id: 20047, word: "Sohn", meaning: "아들", english: "Son", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Söhne", category: "Mensch", examples: [{ de: "Ihr Sohn ist vier Jahre alt.", ko: "그녀의 아들은 네 살이다." }] },
    { id: 20048, word: "Freund", meaning: "친구, 남자친구", english: "Friend/Boyfriend", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Freunde", category: "Mensch", examples: [{ de: "Das ist mein Freund.", ko: "이 사람은 내 친구야." }] },
    { id: 20049, word: "Tante", meaning: "이모, 고모, 숙모", english: "Aunt", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Tanten", category: "Mensch", examples: [{ de: "Meine Tante lebt in München.", ko: "이모는 뮌헨에 산다." }] },
    { id: 20050, word: "Mann", meaning: "남자, 남편", english: "Man/Husband", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Männer", category: "Mensch", examples: [{ de: "Mein Mann kocht heute.", ko: "남편이 오늘 요리한다." }] },
    { id: 20051, word: "Wohnort", meaning: "거주지", english: "Place of Residence", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Wohnorte", category: "Alltag", examples: [{ de: "Was ist Ihr Wohnort?", ko: "거주지가 어디세요?" }] },
    { id: 20052, word: "Familienstand", meaning: "결혼 상태(미혼/기혼 등)", english: "Marital Status", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Familienstände", category: "Mensch", examples: [{ de: "Familienstand: verheiratet.", ko: "결혼 상태: 기혼." }] },
    { id: 20053, word: "Familienfoto", meaning: "가족 사진", english: "Family Photo", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Familienfotos", category: "Mensch", examples: [{ de: "Das ist ein Familienfoto.", ko: "이것은 가족 사진이다." }] },
    { id: 20054, word: "Hochzeit", meaning: "결혼식", english: "Wedding", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Hochzeiten", category: "Mensch", examples: [{ de: "Die Hochzeit ist im Juni.", ko: "결혼식은 6월에 있다." }] },
    { id: 20055, word: "Alter", meaning: "나이, 연령", english: "Age", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Alter", category: "Mensch", examples: [{ de: "Das Alter spielt keine Rolle.", ko: "나이는 중요하지 않다." }] },
    { id: 20056, word: "Hund", meaning: "개", english: "Dog", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Hunde", category: "Natur", examples: [{ de: "Der Hund ist süß.", ko: "그 개는 귀엽다." }] },
    { id: 20057, word: "Großfamilie", meaning: "대가족", english: "Extended Family", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Großfamilien", category: "Mensch", examples: [{ de: "Wir sind eine Großfamilie.", ko: "우리는 대가족이다." }] },
    { id: 20058, word: "Wie geht es...?", meaning: "어떻게 지내?", english: "How are you?", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "-", past: "-", perfect: "-" }, category: "Kommunikation", examples: [{ de: "Wie geht es Ihnen?", ko: "어떻게 지내세요?" }] }, // Phrase treated as Verb for simplicity
    { id: 20059, word: "Wie alt...?", meaning: "몇 살이니?", english: "How old...?", partOfSpeech: "Adjective", level: "A1", category: "Kommunikation", examples: [{ de: "Wie alt bist du?", ko: "몇 살이야?" }] }, // Phrase
    { id: 20060, word: "Das ist~", meaning: "이것은 ~이다", english: "This is...", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "-", past: "-", perfect: "-" }, category: "Kommunikation", examples: [{ de: "Das ist meine Mutter.", ko: "이분은 우리 어머니이다." }] },

    // === DAY 03 ===
    { id: 20061, word: "es gibt", meaning: "~이 있다", english: "there is/are", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es gibt", past: "es gab", perfect: "es hat gegeben" }, category: "Abstrakt", examples: [{ de: "Es gibt einen Park hier.", ko: "여기에 공원이 있다." }] },
    { id: 20062, word: "kosten", meaning: "값이 나가다, 비용이 들다", english: "to cost", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kostet", past: "kostete", perfect: "hat gekostet" }, category: "Wirtschaft", examples: [{ de: "Was kostet das?", ko: "이거 얼마예요?" }] },
    { id: 20063, word: "schmecken", meaning: "맛이 나다", english: "to taste", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schmeckt", past: "schmeckte", perfect: "hat geschmeckt" }, category: "Essen", examples: [{ de: "Das schmeckt gut!", ko: "맛있다!" }] },
    { id: 20064, word: "bestellen", meaning: "주문하다", english: "to order", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bestellt", past: "bestellte", perfect: "hat bestellt" }, category: "Essen", examples: [{ de: "Ich bestelle einen Kaffee.", ko: "커피 한 잔 주문합니다." }] },
    { id: 20065, word: "bringen", meaning: "가져오다, 데려오다", english: "to bring", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bringt", past: "brachte", perfect: "hat gebracht" }, category: "Alltag", examples: [{ de: "Bringen Sie mir bitte Wasser.", ko: "물 좀 가져다 주세요." }] },
    { id: 20066, word: "haben", meaning: "가지다", english: "to have", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hat", past: "hatte", perfect: "hat gehabt" }, category: "Abstrakt" },
    { id: 20067, word: "Durst haben", meaning: "목마르다", english: "to be thirsty", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hat Durst", past: "hatte Durst", perfect: "hat Durst gehabt" }, category: "Essen" },
    { id: 20068, word: "Hunger haben", meaning: "배고프다", english: "to be hungry", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hat Hunger", past: "hatte Hunger", perfect: "hat Hunger gehabt" }, category: "Essen" },
    { id: 20069, word: "trinken", meaning: "마시다", english: "to drink", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie trinkt", past: "trank", perfect: "hat getrunken" }, category: "Essen" },
    { id: 20070, word: "essen", meaning: "먹다", english: "to eat", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie isst", past: "aß", perfect: "hat gegessen" }, category: "Essen" },
    { id: 20071, word: "backen", meaning: "굽다", english: "to bake", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bäckt", past: "backte", perfect: "hat gebacken" }, category: "Essen" },
    { id: 20072, word: "nehmen", meaning: "가져가다, (음식을) 먹다/마시다", english: "to take", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie nimmt", past: "nahm", perfect: "hat genommen" }, category: "Alltag" },
    { id: 20073, word: "reservieren", meaning: "예약하다", english: "to reserve", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie reserviert", past: "reservierte", perfect: "hat reserviert" }, category: "Reise" },
    { id: 20074, word: "Lebensmittel", meaning: "식료품", english: "Groceries/Food", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Lebensmittel", category: "Essen" },
    { id: 20075, word: "Restaurant", meaning: "레스토랑, 식당", english: "Restaurant", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Restaurants", category: "Essen" },
    { id: 20076, word: "Lieblingsessen", meaning: "가장 좋아하는 음식", english: "Favorite Food", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Lieblingsessen", category: "Essen" },
    { id: 20077, word: "Markt", meaning: "시장", english: "Market", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Märkte", category: "Wirtschaft" },
    { id: 20078, word: "Sonderangebot", meaning: "특별 할인, 특가품", english: "Special Offer", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Sonderangebote", category: "Wirtschaft" },
    { id: 20079, word: "Preis", meaning: "가격", english: "Price", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Preise", category: "Wirtschaft" },
    { id: 20080, word: "Euro", meaning: "유로", english: "Euro", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Euro", category: "Wirtschaft" },
    { id: 20081, word: "Becher", meaning: "컵, 잔", english: "Cup/Mug", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Becher", category: "Essen" },
    { id: 20082, word: "Abendessen", meaning: "저녁 식사", english: "Dinner", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Abendessen", category: "Essen" },
    { id: 20083, word: "Speisekarte", meaning: "메뉴판", english: "Menu", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Speisekarten", category: "Essen" },
    { id: 20084, word: "Kasse", meaning: "계산대", english: "Cash Register", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Kassen", category: "Wirtschaft" },
    { id: 20085, word: "Rechnung", meaning: "계산서, 청구서", english: "Bill/Invoice", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Rechnungen", category: "Wirtschaft" },
    { id: 20086, word: "Appetit", meaning: "식욕", english: "Appetite", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "-", category: "Essen" },
    { id: 20087, word: "sonst", meaning: "그 외에, 그렇지 않으면", english: "otherwise/else", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20088, word: "billig", meaning: "저렴한, 싼", english: "cheap", partOfSpeech: "Adjective", level: "A1", category: "Wirtschaft" },
    { id: 20089, word: "lecker", meaning: "맛있는", english: "delicious", partOfSpeech: "Adjective", level: "A1", category: "Essen" },
    { id: 20090, word: "lieber", meaning: "차라리, 더 좋아하는", english: "prefer/rather", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    
    // === DAY 04 ===
    { id: 20091, word: "beginnen", meaning: "시작하다", english: "to begin", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie beginnt", past: "begann", perfect: "hat begonnen" }, category: "Abstrakt" },
    { id: 20092, word: "arbeiten", meaning: "일하다", english: "to work", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie arbeitet", past: "arbeitete", perfect: "hat gearbeitet" }, category: "Arbeit" },
    { id: 20093, word: "kochen", meaning: "요리하다", english: "to cook", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kocht", past: "kochte", perfect: "hat gekocht" }, category: "Essen" },
    { id: 20094, word: "aufräumen", meaning: "정리하다, 치우다", english: "to clean up", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie räumt auf", past: "räumte auf", perfect: "hat aufgeräumt" }, category: "Alltag" },
    { id: 20095, word: "aufstehen", meaning: "일어나다, 기상하다", english: "to get up", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie steht auf", past: "stand auf", perfect: "ist aufgestanden" }, category: "Alltag" },
    { id: 20096, word: "denken", meaning: "생각하다", english: "to think", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie denkt", past: "dachte", perfect: "hat gedacht" }, category: "Abstrakt" },
    { id: 20097, word: "gehen", meaning: "가다", english: "to go", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie geht", past: "ging", perfect: "ist gegangen" }, category: "Alltag" },
    { id: 20098, word: "frühstücken", meaning: "아침 식사를 하다", english: "to have breakfast", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie frühstückt", past: "frühstückte", perfect: "hat gefrühstückt" }, category: "Essen" },
    { id: 20099, word: "ins Bett gehen", meaning: "잠자리에 들다", english: "to go to bed", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie geht ins Bett", past: "ging ins Bett", perfect: "ist ins Bett gegangen" }, category: "Alltag" },
    { id: 20100, word: "helfen", meaning: "돕다", english: "to help", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hilft", past: "half", perfect: "hat geholfen" }, category: "Kommunikation" },
    { id: 20101, word: "schicken", meaning: "보내다", english: "to send", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schickt", past: "schickte", perfect: "hat geschickt" }, category: "Kommunikation" },
    { id: 20102, word: "sehen", meaning: "보다", english: "to see", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sieht", past: "sah", perfect: "hat gesehen" }, category: "Kommunikation" },
    { id: 20103, word: "schlafen", meaning: "자다", english: "to sleep", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schläft", past: "schlief", perfect: "hat geschlafen" }, category: "Alltag" },
    { id: 20104, word: "wecken", meaning: "깨우다", english: "to wake someone up", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie weckt", past: "weckte", perfect: "hat geweckt" }, category: "Alltag" },
    { id: 20105, word: "baden", meaning: "목욕하다", english: "to bathe", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie badet", past: "badete", perfect: "hat gebadet" }, category: "Alltag" },
    { id: 20106, word: "brauchen", meaning: "필요하다", english: "to need", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie braucht", past: "brauchte", perfect: "hat gebraucht" }, category: "Abstrakt" },
    { id: 20107, word: "rauchen", meaning: "담배를 피우다", english: "to smoke", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie raucht", past: "rauchte", perfect: "hat geraucht" }, category: "Gesundheit" },
    { id: 20108, word: "sich duschen", meaning: "샤워하다", english: "to take a shower", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie duscht sich", past: "duschte sich", perfect: "hat sich geduscht" }, category: "Alltag" },
    { id: 20109, word: "waschen", meaning: "씻다, 세탁하다", english: "to wash", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wäscht", past: "wusch", perfect: "hat gewaschen" }, category: "Alltag" },
    { id: 20110, word: "anrufen", meaning: "전화하다", english: "to call (phone)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ruft an", past: "rief an", perfect: "hat angerufen" }, category: "Kommunikation" },
    { id: 20111, word: "bitten", meaning: "부탁하다, 요청하다", english: "to ask/request", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bittet", past: "bat", perfect: "hat gebeten" }, category: "Kommunikation" },
    { id: 20112, word: "Morgen", meaning: "아침", english: "Morning", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Morgen", category: "Abstrakt" },
    { id: 20113, word: "Uhr", meaning: "시계, 시(시간)", english: "Clock/O'clock", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Uhren", category: "Alltag" },
    { id: 20114, word: "Zeit", meaning: "시간", english: "Time", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Zeiten", category: "Abstrakt" },
    { id: 20115, word: "Stunde", meaning: "시간(Duration)", english: "Hour", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Stunden", category: "Abstrakt" },
    { id: 20116, word: "Tag", meaning: "날, 하루", english: "Day", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Tage", category: "Abstrakt" },
    { id: 20117, word: "Woche", meaning: "주(Week)", english: "Week", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Wochen", category: "Abstrakt" },
    { id: 20118, word: "Wochenende", meaning: "주말", english: "Weekend", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Wochenenden", category: "Abstrakt" },
    { id: 20119, word: "Monat", meaning: "달, 월", english: "Month", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Monate", category: "Abstrakt" },
    { id: 20120, word: "Vormittag", meaning: "오전", english: "Morning (before noon)", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Vormittage", category: "Abstrakt" },

    // === DAY 05 ===
    { id: 20121, word: "lernen", meaning: "배우다, 공부하다", english: "to learn", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lernt", past: "lernte", perfect: "hat gelernt" }, category: "Bildung" },
    { id: 20122, word: "studieren", meaning: "전공하다, 대학을 다니다", english: "to study (at university)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie studiert", past: "studierte", perfect: "hat studiert" }, category: "Bildung" },
    { id: 20123, word: "ergänzen", meaning: "보충하다, 채우다", english: "to complete/fill in", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ergänzt", past: "ergänzte", perfect: "hat ergänzt" }, category: "Bildung" },
    { id: 20124, word: "bekommen", meaning: "받다, 얻다", english: "to receive/get", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bekommt", past: "bekam", perfect: "hat bekommen" }, category: "Alltag" },
    { id: 20125, word: "wiederholen", meaning: "반복하다, 복습하다", english: "to repeat", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wiederholt", past: "wiederholte", perfect: "hat wiederholt" }, category: "Bildung" },
    { id: 20126, word: "wissen", meaning: "알다 (지식)", english: "to know (fact)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie weiß", past: "wusste", perfect: "hat gewusst" }, category: "Kommunikation" },
    { id: 20127, word: "hören", meaning: "듣다", english: "to hear/listen", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hört", past: "hörte", perfect: "hat gehört" }, category: "Kommunikation" },
    { id: 20128, word: "lesen", meaning: "읽다", english: "to read", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie liest", past: "las", perfect: "hat gelesen" }, category: "Bildung" },
    { id: 20129, word: "markieren", meaning: "표시하다", english: "to mark", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie markiert", past: "markierte", perfect: "hat markiert" }, category: "Bildung" },
    { id: 20130, word: "finden", meaning: "찾다, 발견하다, 생각하다", english: "to find", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie findet", past: "fand", perfect: "hat gefunden" }, category: "Alltag" },
    { id: 20131, word: "verstehen", meaning: "이해하다", english: "to understand", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie versteht", past: "verstand", perfect: "hat verstanden" }, category: "Kommunikation" },
    { id: 20132, word: "schreiben", meaning: "쓰다", english: "to write", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schreibt", past: "schrieb", perfect: "hat geschrieben" }, category: "Kommunikation" },
    { id: 20133, word: "erklären", meaning: "설명하다", english: "to explain", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erklärt", past: "erklärte", perfect: "hat erklärt" }, category: "Kommunikation" },
    { id: 20134, word: "erzählen", meaning: "이야기하다", english: "to tell/narrate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erzählt", past: "erzählte", perfect: "hat erzählt" }, category: "Kommunikation" },
    { id: 20135, word: "Hausaufgabe", meaning: "숙제", english: "Homework", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Hausaufgaben", category: "Bildung" },
    { id: 20136, word: "Antwort", meaning: "대답, 정답", english: "Answer", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Antworten", category: "Kommunikation" },
    { id: 20137, word: "Student", meaning: "대학생", english: "Student (University)", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Studenten", category: "Bildung" },
    { id: 20138, word: "Schule", meaning: "학교", english: "School", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Schulen", category: "Bildung" },
    { id: 20139, word: "Lehrer", meaning: "선생님 (남)", english: "Teacher", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Lehrer", category: "Bildung" },
    { id: 20140, word: "Schüler", meaning: "학생 (초중고)", english: "Pupil/Student", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Schüler", category: "Bildung" },
    { id: 20141, word: "Klasse", meaning: "학급, 반", english: "Class", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Klassen", category: "Bildung" },
    { id: 20142, word: "Ferien", meaning: "방학, 휴가", english: "Vacation", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ferien", category: "Bildung" }, // Plural
    { id: 20143, word: "Lektion", meaning: "과, 수업", english: "Lesson", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Lektionen", category: "Bildung" },
    { id: 20144, word: "Wörterbuch", meaning: "사전", english: "Dictionary", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Wörterbücher", category: "Bildung" },
    { id: 20145, word: "Prüfung", meaning: "시험", english: "Exam", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Prüfungen", category: "Bildung" },
    { id: 20146, word: "Universität", meaning: "대학교", english: "University", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Universitäten", category: "Bildung" },
    { id: 20147, word: "Unterricht", meaning: "수업", english: "Class/Instruction", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "-", category: "Bildung" },
    { id: 20148, word: "Grammatik", meaning: "문법", english: "Grammar", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Grammatiken", category: "Bildung" },
    { id: 20149, word: "Aufgabe", meaning: "과제, 임무", english: "Task/Exercise", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Aufgaben", category: "Bildung" },
    { id: 20150, word: "Text", meaning: "텍스트, 본문", english: "Text", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Texte", category: "Bildung" },

    // === DAY 06 ===
    { id: 20151, word: "kaufen", meaning: "사다", english: "to buy", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kauft", past: "kaufte", perfect: "hat gekauft" }, category: "Wirtschaft" },
    { id: 20152, word: "einkaufen", meaning: "장보다, 쇼핑하다", english: "to shop", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kauft ein", past: "kaufte ein", perfect: "hat eingekauft" }, category: "Wirtschaft" },
    { id: 20153, word: "vergleichen", meaning: "비교하다", english: "to compare", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie vergleicht", past: "verglich", perfect: "hat verglichen" }, category: "Abstrakt" },
    { id: 20154, word: "empfehlen", meaning: "추천하다", english: "to recommend", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie empfiehlt", past: "empfahl", perfect: "hat empfohlen" }, category: "Kommunikation" },
    { id: 20155, word: "wählen", meaning: "선택하다, 고르다", english: "to choose", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wählt", past: "wählte", perfect: "hat gewählt" }, category: "Abstrakt" },
    { id: 20156, word: "zeigen", meaning: "보여주다", english: "to show", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie zeigt", past: "zeigte", perfect: "hat gezeigt" }, category: "Kommunikation" },
    { id: 20157, word: "anschauen", meaning: "바라보다, 구경하다", english: "to look at", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schaut an", past: "schaute an", perfect: "hat angeschaut" }, category: "Alltag" },
    { id: 20158, word: "suchen", meaning: "찾다", english: "to search/look for", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sucht", past: "suchte", perfect: "hat gesucht" }, category: "Alltag" },
    { id: 20159, word: "rechnen", meaning: "계산하다", english: "to calculate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie rechnet", past: "rechnete", perfect: "hat gerechnet" }, category: "Wirtschaft" },
    { id: 20160, word: "anziehen", meaning: "입다 (옷을)", english: "to put on (clothes)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie zieht an", past: "zog an", perfect: "hat angezogen" }, category: "Alltag" },
    { id: 20161, word: "anprobieren", meaning: "입어보다", english: "to try on", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie probiert an", past: "probierte an", perfect: "hat anprobiert" }, category: "Alltag" },
    { id: 20162, word: "bezahlen", meaning: "지불하다, 계산하다", english: "to pay", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bezahlt", past: "bezahlte", perfect: "hat bezahlt" }, category: "Wirtschaft" },
    { id: 20163, word: "zahlen", meaning: "지불하다", english: "to pay", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie zahlt", past: "zahlte", perfect: "hat gezahlt" }, category: "Wirtschaft" },
    { id: 20164, word: "hoffen", meaning: "희망하다, 바라다", english: "to hope", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hofft", past: "hoffte", perfect: "hat gehofft" }, category: "Abstrakt" },
    { id: 20165, word: "fragen", meaning: "질문하다", english: "to ask", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fragt", past: "fragte", perfect: "hat gefragt" }, category: "Kommunikation" },
    { id: 20166, word: "tun", meaning: "하다", english: "to do", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie tut", past: "tat", perfect: "hat getan" }, category: "Abstrakt" },
    { id: 20167, word: "meinen", meaning: "의미하다, 생각하다", english: "to mean/think", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie meint", past: "meinte", perfect: "hat gemeint" }, category: "Kommunikation" },
    { id: 20168, word: "sich schminken", meaning: "화장하다", english: "to put on makeup", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schminkt sich", past: "schminkte sich", perfect: "hat sich geschminkt" }, category: "Alltag" },
    { id: 20169, word: "Kaufhaus", meaning: "백화점", english: "Department Store", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Kaufhäuser", category: "Wirtschaft" },
    { id: 20170, word: "Farbe", meaning: "색깔", english: "Color", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Farben", category: "Eigenschaft" },
    { id: 20171, word: "Größe", meaning: "크기, 치수", english: "Size", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Größen", category: "Eigenschaft" },
    { id: 20172, word: "Gast", meaning: "손님", english: "Guest", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Gäste", category: "Alltag" },
    { id: 20173, word: "Qualität", meaning: "품질", english: "Quality", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Qualitäten", category: "Wirtschaft" },
    { id: 20174, word: "Kleidung", meaning: "의복, 옷", english: "Clothing", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Kleidungen", category: "Alltag" },
    { id: 20175, word: "klein", meaning: "작은", english: "small", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20176, word: "neu", meaning: "새로운", english: "new", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20177, word: "günstig", meaning: "저렴한, 유리한", english: "favorable/cheap", partOfSpeech: "Adjective", level: "A1", category: "Wirtschaft" },
    { id: 20178, word: "kurz", meaning: "짧은", english: "short", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20179, word: "preiswert", meaning: "가격이 적당한", english: "inexpensive", partOfSpeech: "Adjective", level: "A1", category: "Wirtschaft" },
    { id: 20180, word: "welch", meaning: "어떤", english: "which", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },

    // === DAY 07 ===
    { id: 20181, word: "fernsehen", meaning: "TV를 보다", english: "to watch TV", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sieht fern", past: "sah fern", perfect: "hat ferngesehen" }, category: "Freizeit" },
    { id: 20182, word: "sich interessieren (für)", meaning: "~에 관심이 있다", english: "to be interested in", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie interessiert sich", past: "interessierte sich", perfect: "hat sich interessiert" }, category: "Abstrakt" },
    { id: 20183, word: "spielen", meaning: "놀다, 연주하다, 경기하다", english: "to play", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie spielt", past: "spielte", perfect: "hat gespielt" }, category: "Freizeit" },
    { id: 20184, word: "sich bewegen", meaning: "움직이다, 운동하다", english: "to move/exercise", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bewegt sich", past: "bewegte sich", perfect: "hat sich bewegt" }, category: "Freizeit" },
    { id: 20185, word: "laufen", meaning: "달리다, 걷다", english: "to run/walk", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie läuft", past: "lief", perfect: "ist gelaufen" }, category: "Freizeit" },
    { id: 20186, word: "planen", meaning: "계획하다", english: "to plan", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie plant", past: "plante", perfect: "hat geplant" }, category: "Alltag" },
    { id: 20187, word: "sammeln", meaning: "수집하다, 모으다", english: "to collect", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sammelt", past: "sammelte", perfect: "hat gesammelt" }, category: "Freizeit" },
    { id: 20188, word: "grillen", meaning: "굽다, 바비큐하다", english: "to grill", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie grillt", past: "grillte", perfect: "hat gegrillt" }, category: "Essen" },
    { id: 20189, word: "reisen", meaning: "여행하다", english: "to travel", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie reist", past: "reiste", perfect: "ist gereist" }, category: "Reise" },
    { id: 20190, word: "treffen", meaning: "만나다", english: "to meet", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie trifft", past: "traf", perfect: "hat getroffen" }, category: "Kommunikation" },
    { id: 20191, word: "telefonieren", meaning: "전화하다", english: "to telephone", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie telefoniert", past: "telefonierte", perfect: "hat telefoniert" }, category: "Kommunikation" },
    { id: 20192, word: "Sport machen", meaning: "운동하다", english: "to do sports", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie macht Sport", past: "machte Sport", perfect: "hat Sport gemacht" }, category: "Freizeit" },
    { id: 20193, word: "singen", meaning: "노래하다", english: "to sing", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie singt", past: "sang", perfect: "hat gesungen" }, category: "Freizeit" },
    { id: 20194, word: "tanzen", meaning: "춤추다", english: "to dance", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie tanzt", past: "tanzte", perfect: "hat getanzt" }, category: "Freizeit" },
    { id: 20195, word: "stattfinden", meaning: "개최되다, 열리다", english: "to take place", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es findet statt", past: "fand statt", perfect: "hat stattgefunden" }, category: "Alltag" },
    { id: 20196, word: "Hobby", meaning: "취미", english: "Hobby", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Hobbys", category: "Freizeit" },
    { id: 20197, word: "Freizeit", meaning: "여가 시간", english: "Free time", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Freizeit" },
    { id: 20198, word: "Musik", meaning: "음악", english: "Music", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Musiken", category: "Freizeit" },
    { id: 20199, word: "Instrument", meaning: "악기", english: "Instrument", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Instrumente", category: "Freizeit" },
    { id: 20200, word: "Konzert", meaning: "콘서트", english: "Concert", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Konzerte", category: "Freizeit" },
    { id: 20201, word: "Sport", meaning: "스포츠, 운동", english: "Sport", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Sportarten", category: "Freizeit" },
    { id: 20202, word: "Bibliothek", meaning: "도서관", english: "Library", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Bibliotheken", category: "Bildung" },
    { id: 20203, word: "Foto", meaning: "사진", english: "Photo", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Fotos", category: "Freizeit" },
    { id: 20204, word: "Ausstellung", meaning: "전시회", english: "Exhibition", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ausstellungen", category: "Freizeit" },
    { id: 20205, word: "Stück", meaning: "조각, (연극) 작품", english: "Piece/Play", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Stücke", category: "Freizeit" },
    { id: 20206, word: "Museum", meaning: "박물관", english: "Museum", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Museen", category: "Freizeit" },
    { id: 20207, word: "Film", meaning: "영화", english: "Film/Movie", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Filme", category: "Freizeit" },
    { id: 20208, word: "ins Kino gehen", meaning: "영화관에 가다", english: "to go to the cinema", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie geht ins Kino", past: "ging ins Kino", perfect: "ist ins Kino gegangen" }, category: "Freizeit" },
    { id: 20209, word: "Theater", meaning: "극장", english: "Theater", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Theater", category: "Freizeit" },
    { id: 20210, word: "sportlich", meaning: "운동을 좋아하는, 스포티한", english: "sporty", partOfSpeech: "Adjective", level: "A1", category: "Freizeit" },

    // === DAY 08 ===
    { id: 20211, word: "schenken", meaning: "선물하다", english: "to give (as a gift)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schenkt", past: "schenkte", perfect: "hat geschenkt" }, category: "Alltag" },
    { id: 20212, word: "wünschen", meaning: "소원하다, 바라다", english: "to wish", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wünscht", past: "wünschte", perfect: "hat gewünscht" }, category: "Kommunikation" },
    { id: 20213, word: "Bescheid geben", meaning: "알려주다, 통지하다", english: "to let someone know", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gibt Bescheid", past: "gab Bescheid", perfect: "hat Bescheid gegeben" }, category: "Kommunikation" },
    { id: 20214, word: "grüßen", meaning: "인사하다", english: "to greet", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie grüßt", past: "grüßte", perfect: "hat gegrüßt" }, category: "Kommunikation" },
    { id: 20215, word: "jn. kennenlernen", meaning: "~를 알게 되다", english: "to get to know s.o.", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lernt kennen", past: "lernte kennen", perfect: "hat kennengelernt" }, category: "Kommunikation" },
    { id: 20216, word: "feiern", meaning: "축하하다, 기념하다", english: "to celebrate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie feiert", past: "feierte", perfect: "hat gefeiert" }, category: "Freizeit" },
    { id: 20217, word: "einladen", meaning: "초대하다", english: "to invite", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lädt ein", past: "lud ein", perfect: "hat eingeladen" }, category: "Kommunikation" },
    { id: 20218, word: "antworten", meaning: "대답하다", english: "to answer", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie antwortet", past: "antwortete", perfect: "hat geantwortet" }, category: "Kommunikation" },
    { id: 20219, word: "gratulieren", meaning: "축하하다", english: "to congratulate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gratuliert", past: "gratulierte", perfect: "hat gratuliert" }, category: "Kommunikation" },
    { id: 20220, word: "Brief schreiben", meaning: "편지를 쓰다", english: "to write a letter", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schreibt einen Brief", past: "schrieb einen Brief", perfect: "hat einen Brief geschrieben" }, category: "Kommunikation" },
    { id: 20221, word: "organisieren", meaning: "조직하다, 준비하다", english: "to organize", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie organisiert", past: "organisierte", perfect: "hat organisiert" }, category: "Arbeit" },
    { id: 20222, word: "geben", meaning: "주다", english: "to give", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gibt", past: "gab", perfect: "hat gegeben" }, category: "Alltag" },
    { id: 20223, word: "warten", meaning: "기다리다", english: "to wait", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wartet", past: "wartete", perfect: "hat gewartet" }, category: "Alltag" },
    { id: 20224, word: "Dank", meaning: "감사", english: "Thanks", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "-", category: "Kommunikation" },
    { id: 20225, word: "Plan", meaning: "계획", english: "Plan", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Pläne", category: "Alltag" },
    { id: 20226, word: "Spaß", meaning: "재미, 즐거움", english: "Fun", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Späße", category: "Freizeit" },
    { id: 20227, word: "Geburtstag", meaning: "생일", english: "Birthday", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Geburtstage", category: "Mensch" },
    { id: 20228, word: "Party", meaning: "파티", english: "Party", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Partys", category: "Freizeit" },
    { id: 20229, word: "Besuch", meaning: "방문", english: "Visit", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Besuche", category: "Alltag" },
    { id: 20230, word: "Glück", meaning: "행운, 행복", english: "Luck/Happiness", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Abstrakt" },
    { id: 20231, word: "Weihnachten", meaning: "크리스마스", english: "Christmas", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Weihnachten", category: "Freizeit" },
    { id: 20232, word: "Briefmarke", meaning: "우표", english: "Stamp", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Briefmarken", category: "Kommunikation" },
    { id: 20233, word: "Postkarte", meaning: "엽서", english: "Postcard", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Postkarten", category: "Kommunikation" },
    { id: 20234, word: "Einladung", meaning: "초대, 초대장", english: "Invitation", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Einladungen", category: "Kommunikation" },
    { id: 20235, word: "Feier", meaning: "축하 행사, 파티", english: "Celebration", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Feiern", category: "Freizeit" },
    { id: 20236, word: "Fest", meaning: "축제", english: "Festival", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Feste", category: "Freizeit" },
    { id: 20237, word: "Geschenk", meaning: "선물", english: "Gift", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Geschenke", category: "Alltag" },
    { id: 20238, word: "Feierabend", meaning: "퇴근, 일과 후", english: "End of work day", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Feierabende", category: "Arbeit" },
    { id: 20239, word: "Blume", meaning: "꽃", english: "Flower", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Blumen", category: "Natur" },
    { id: 20240, word: "willkommen", meaning: "환영하는", english: "welcome", partOfSpeech: "Adjective", level: "A1", category: "Kommunikation" },

    // === DAY 09 ===
    { id: 20241, word: "mieten", meaning: "빌리다, 임대하다", english: "to rent", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie mietet", past: "mietete", perfect: "hat gemietet" }, category: "Alltag" },
    { id: 20242, word: "vermieten", meaning: "임대해주다, 세 놓다", english: "to rent out", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie vermietet", past: "vermietete", perfect: "hat vermietet" }, category: "Alltag" },
    { id: 20243, word: "schließen", meaning: "닫다, 잠그다", english: "to close", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schließt", past: "schloss", perfect: "hat geschlossen" }, category: "Alltag" },
    { id: 20244, word: "ordnen", meaning: "정리하다, 정돈하다", english: "to organize/order", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ordnet", past: "ordnete", perfect: "hat geordnet" }, category: "Alltag" },
    { id: 20245, word: "gefallen", meaning: "마음에 들다", english: "to please/like", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gefällt", past: "gefiel", perfect: "hat gefallen" }, category: "Abstrakt" },
    { id: 20246, word: "beschreiben", meaning: "묘사하다, 설명하다", english: "to describe", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie beschreibt", past: "beschrieb", perfect: "hat beschrieben" }, category: "Kommunikation" },
    { id: 20247, word: "putzen", meaning: "청소하다, 닦다", english: "to clean", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie putzt", past: "putzte", perfect: "hat geputzt" }, category: "Alltag" },
    { id: 20248, word: "liegen", meaning: "놓여 있다, 눕다", english: "to lie/be located", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie liegt", past: "lag", perfect: "hat gelegen" }, category: "Alltag" },
    { id: 20249, word: "legen", meaning: "놓다, 눕히다", english: "to lay/put", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie legt", past: "legte", perfect: "hat gelegt" }, category: "Alltag" },
    { id: 20250, word: "umziehen", meaning: "이사하다, 갈아입다", english: "to move house", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie zieht um", past: "zog um", perfect: "ist umgezogen" }, category: "Alltag" },
    { id: 20251, word: "ankreuzen", meaning: "X표를 하다", english: "to cross/check", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kreuzt an", past: "kreuzte an", perfect: "hat angekreuzt" }, category: "Bildung" },
    { id: 20252, word: "verkaufen", meaning: "팔다", english: "to sell", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verkauft", past: "verkaufte", perfect: "hat verkauft" }, category: "Wirtschaft" },
    { id: 20253, word: "heizen", meaning: "난방하다", english: "to heat", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie heizt", past: "heizte", perfect: "hat geheizt" }, category: "Alltag" },
    { id: 20254, word: "Zimmer", meaning: "방", english: "Room", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Zimmer", category: "Alltag" },
    { id: 20255, word: "Wohnzimmer", meaning: "거실", english: "Living Room", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Wohnzimmer", category: "Alltag" },
    { id: 20256, word: "Haus", meaning: "집", english: "House", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Häuser", category: "Alltag" },
    { id: 20257, word: "Toilette", meaning: "화장실", english: "Toilet", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Toiletten", category: "Alltag" },
    { id: 20258, word: "Bad", meaning: "욕실", english: "Bathroom", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Bäder", category: "Alltag" },
    { id: 20259, word: "Wohnung", meaning: "주택, 아파트", english: "Apartment", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Wohnungen", category: "Alltag" },
    { id: 20260, word: "Apartment", meaning: "아파트", english: "Apartment", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Apartments", category: "Alltag" },
    { id: 20261, word: "Tisch", meaning: "탁자, 책상", english: "Table", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Tische", category: "Alltag" },
    { id: 20262, word: "Quadratmeter", meaning: "제곱미터", english: "Square Meter", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Quadratmeter", category: "Alltag" },
    { id: 20263, word: "Kaution", meaning: "보증금", english: "Deposit", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Kautionen", category: "Wirtschaft" },
    { id: 20264, word: "Nebenkosten", meaning: "관리비, 부대비용", english: "Utility Costs", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Nebenkosten", category: "Wirtschaft" },
    { id: 20265, word: "2 Zimmer Wohnung", meaning: "방 2개 아파트", english: "2-Room Apartment", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "2 Zimmer Wohnungen", category: "Alltag" },
    { id: 20266, word: "Wand", meaning: "벽", english: "Wall", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Wände", category: "Alltag" },
    { id: 20267, word: "Miete", meaning: "월세, 임대료", english: "Rent", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Mieten", category: "Wirtschaft" },
    { id: 20268, word: "Nähe", meaning: "근처, 가까움", english: "Proximity/Nearness", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Alltag" },
    { id: 20269, word: "Garten", meaning: "정원", english: "Garden", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Gärten", category: "Natur" },
    { id: 20270, word: "möbliert", meaning: "가구가 비치된", english: "furnished", partOfSpeech: "Adjective", level: "A1", category: "Alltag" },

    // === DAY 10 ===
    { id: 20271, word: "fahren", meaning: "타다, 운전하다, 가다", english: "to drive/go", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fährt", past: "fuhr", perfect: "ist gefahren" }, category: "Reise" },
    { id: 20272, word: "abfahren", meaning: "출발하다", english: "to depart", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fährt ab", past: "fuhr ab", perfect: "ist abgefahren" }, category: "Reise" },
    { id: 20273, word: "fliegen", meaning: "날다, 비행기를 타다", english: "to fly", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fliegt", past: "flog", perfect: "ist geflogen" }, category: "Reise" },
    { id: 20274, word: "abfliegen", meaning: "이륙하다", english: "to take off (plane)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fliegt ab", past: "flog ab", perfect: "ist abgeflogen" }, category: "Reise" },
    { id: 20275, word: "ankommen", meaning: "도착하다", english: "to arrive", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt an", past: "kam an", perfect: "ist angekommen" }, category: "Reise" },
    { id: 20276, word: "aussteigen", meaning: "내리다, 하차하다", english: "to get off", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie steigt aus", past: "stieg aus", perfect: "ist ausgestiegen" }, category: "Reise" },
    { id: 20277, word: "einsteigen", meaning: "타다, 승차하다", english: "to get on/in", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie steigt ein", past: "stieg ein", perfect: "ist eingestiegen" }, category: "Reise" },
    { id: 20278, word: "umsteigen", meaning: "갈아타다, 환승하다", english: "to transfer", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie steigt um", past: "stieg um", perfect: "ist umgestiegen" }, category: "Reise" },
    { id: 20279, word: "zurückkommen", meaning: "돌아오다", english: "to come back", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt zurück", past: "kam zurück", perfect: "ist zurückgekommen" }, category: "Reise" },
    { id: 20280, word: "zurückfahren", meaning: "돌아가다", english: "to drive back", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fährt zurück", past: "fuhr zurück", perfect: "ist zurückgefahren" }, category: "Reise" },
    { id: 20281, word: "ansehen", meaning: "바라보다, 구경하다", english: "to look at/watch", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sieht an", past: "sah an", perfect: "hat angesehen" }, category: "Alltag" },
    { id: 20282, word: "Zug", meaning: "기차", english: "Train", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Züge", category: "Reise" },
    { id: 20283, word: "Straßenbahn", meaning: "전차, 트램", english: "Tram", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Straßenbahnen", category: "Reise" },
    { id: 20284, word: "Bahn", meaning: "철도, 전철", english: "Railway/Train", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Bahnen", category: "Reise" },
    { id: 20285, word: "Taxi", meaning: "택시", english: "Taxi", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Taxis", category: "Reise" },
    { id: 20286, word: "Hauptbahnhof", meaning: "중앙역", english: "Central Station", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Hauptbahnhöfe", category: "Reise" },
    { id: 20287, word: "Bahnsteig", meaning: "승강장, 플랫폼", english: "Platform", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Bahnsteige", category: "Reise" },
    { id: 20288, word: "Flugzeug", meaning: "비행기", english: "Airplane", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Flugzeuge", category: "Reise" },
    { id: 20289, word: "Flughafen", meaning: "공항", english: "Airport", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Flughäfen", category: "Reise" },
    { id: 20290, word: "Platz", meaning: "광장, 자리", english: "Square/Place", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Plätze", category: "Reise" },
    { id: 20291, word: "Bus", meaning: "버스", english: "Bus", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Busse", category: "Reise" },
    { id: 20292, word: "Autobahn", meaning: "고속도로", english: "Highway", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Autobahnen", category: "Reise" },
    { id: 20293, word: "Auto", meaning: "자동차", english: "Car", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Autos", category: "Reise" },
    { id: 20294, word: "Fahrrad", meaning: "자전거", english: "Bicycle", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Fahrräder", category: "Reise" },
    { id: 20295, word: "Gleis", meaning: "선로, 플랫폼 번호", english: "Track", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Gleise", category: "Reise" },
    { id: 20296, word: "Ansage", meaning: "안내 방송", english: "Announcement", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ansagen", category: "Kommunikation" },
    { id: 20297, word: "Pass", meaning: "여권", english: "Passport", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Pässe", category: "Reise" },
    { id: 20298, word: "besetzt", meaning: "사용 중인, 바쁜", english: "occupied", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20299, word: "voll", meaning: "가득 찬", english: "full", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20300, word: "pünktlich", meaning: "시간을 엄수하는, 정각에", english: "punctual", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },

    // === DAY 11 ===
    { id: 20301, word: "wehtun", meaning: "아프다, 다치다", english: "to hurt", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie tut weh", past: "tat weh", perfect: "hat wehgetan" }, category: "Gesundheit" },
    { id: 20302, word: "untersuchen", meaning: "진찰하다, 조사하다", english: "to examine", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie untersucht", past: "untersuchte", perfect: "hat untersucht" }, category: "Gesundheit" },
    { id: 20303, word: "husten", meaning: "기침하다", english: "to cough", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hustet", past: "hustete", perfect: "hat gehustet" }, category: "Gesundheit" },
    { id: 20304, word: "verschieben", meaning: "연기하다, 미루다", english: "to postpone", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verschiebt", past: "verschob", perfect: "hat verschoben" }, category: "Alltag" },
    { id: 20305, word: "vorbeikommen", meaning: "들르다, 지나가다", english: "to come by", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt vorbei", past: "kam vorbei", perfect: "ist vorbeigekommen" }, category: "Alltag" },
    { id: 20306, word: "aussehen", meaning: "보이다, 외모가 ~하다", english: "to look (appearance)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sieht aus", past: "sah aus", perfect: "hat ausgesehen" }, category: "Eigenschaft" },
    { id: 20307, word: "absagen", meaning: "취소하다, 거절하다", english: "to cancel", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sagt ab", past: "sagte ab", perfect: "hat abgesagt" }, category: "Kommunikation" },
    { id: 20308, word: "sich fühlen", meaning: "느끼다, 기분이 ~하다", english: "to feel", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fühlt sich", past: "fühlte sich", perfect: "hat sich gefühlt" }, category: "Abstrakt" },
    { id: 20309, word: "sich erkälten", meaning: "감기에 걸리다", english: "to catch a cold", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erkältet sich", past: "erkältete sich", perfect: "hat sich erkältet" }, category: "Gesundheit" },
    { id: 20310, word: "fehlen", meaning: "결석하다, 부족하다", english: "to be missing", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fehlt", past: "fehlte", perfect: "hat gefehlt" }, category: "Abstrakt" },
    { id: 20311, word: "rufen", meaning: "부르다, 전화하다", english: "to call/shout", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ruft", past: "rief", perfect: "hat gerufen" }, category: "Kommunikation" },
    { id: 20312, word: "sagen", meaning: "말하다", english: "to say", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sagt", past: "sagte", perfect: "hat gesagt" }, category: "Kommunikation" },
    { id: 20313, word: "glauben", meaning: "믿다, 생각하다", english: "to believe", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie glaubt", past: "glaubte", perfect: "hat geglaubt" }, category: "Abstrakt" },
    { id: 20314, word: "Termin", meaning: "약속, 일정", english: "Appointment", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Termine", category: "Alltag" },
    { id: 20315, word: "Arzt", meaning: "의사 (남)", english: "Doctor", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Ärzte", category: "Gesundheit" },
    { id: 20316, word: "Doktor", meaning: "박사, 의사", english: "Doctor", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Doktoren", category: "Gesundheit" },
    { id: 20317, word: "Schmerz", meaning: "통증, 아픔", english: "Pain", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Schmerzen", category: "Gesundheit" },
    { id: 20318, word: "Fieber", meaning: "열", english: "Fever", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Fieber", category: "Gesundheit" },
    { id: 20319, word: "Gesundheit", meaning: "건강", english: "Health", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Gesundheit" },
    { id: 20320, word: "Krankheit", meaning: "질병", english: "Illness", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Krankheiten", category: "Gesundheit" },
    { id: 20321, word: "Praxis", meaning: "병원, 진료소, 실습", english: "Practice/Clinic", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Praxen", category: "Gesundheit" },
    { id: 20322, word: "Krankenhaus", meaning: "종합병원", english: "Hospital", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Krankenhäuser", category: "Gesundheit" },
    { id: 20323, word: "Tablette", meaning: "알약", english: "Tablet/Pill", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Tabletten", category: "Gesundheit" },
    { id: 20324, word: "Medikament", meaning: "약", english: "Medication", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Medikamente", category: "Gesundheit" },
    { id: 20325, word: "Operation", meaning: "수술", english: "Surgery", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Operationen", category: "Gesundheit" },
    { id: 20326, word: "Rezept", meaning: "처방전, 요리법", english: "Prescription/Recipe", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Rezepte", category: "Gesundheit" },
    { id: 20327, word: "Apotheke", meaning: "약국", english: "Pharmacy", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Apotheken", category: "Gesundheit" },
    { id: 20328, word: "Besserung", meaning: "차도, 회복", english: "Improvement/Recovery", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Besserungen", category: "Gesundheit" },
    { id: 20329, word: "gesund", meaning: "건강한", english: "healthy", partOfSpeech: "Adjective", level: "A1", category: "Gesundheit" },
    { id: 20330, word: "krank", meaning: "아픈", english: "sick", partOfSpeech: "Adjective", level: "A1", category: "Gesundheit" },

    // === DAY 12 ===
    { id: 20331, word: "regnen", meaning: "비가 오다", english: "to rain", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es regnet", past: "regnete", perfect: "hat geregnet" }, category: "Natur" },
    { id: 20332, word: "scheinen", meaning: "비치다, ~인 것 같다", english: "to shine/seem", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie scheint", past: "schien", perfect: "hat geschienen" }, category: "Natur" },
    { id: 20333, word: "schneien", meaning: "눈이 오다", english: "to snow", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es schneit", past: "schneite", perfect: "hat geschneit" }, category: "Natur" },
    { id: 20334, word: "werden", meaning: "~이 되다", english: "to become", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wird", past: "wurde", perfect: "ist geworden" }, category: "Abstrakt" },
    { id: 20335, word: "Ski fahren", meaning: "스키를 타다", english: "to ski", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fährt Ski", past: "fuhr Ski", perfect: "ist Ski gefahren" }, category: "Freizeit" },
    { id: 20336, word: "spazieren gehen", meaning: "산책하다", english: "to go for a walk", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie geht spazieren", past: "ging spazieren", perfect: "ist spazieren gegangen" }, category: "Freizeit" },
    { id: 20337, word: "fallen", meaning: "떨어지다, 넘어지다", english: "to fall", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fällt", past: "fiel", perfect: "ist gefallen" }, category: "Alltag" },
    { id: 20338, word: "Wetter", meaning: "날씨", english: "Weather", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Natur" },
    { id: 20339, word: "Himmelsrichtung", meaning: "방위 (동서남북)", english: "Cardinal Direction", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Himmelsrichtungen", category: "Natur" },
    { id: 20340, word: "Jahreszeit", meaning: "계절", english: "Season", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Jahreszeiten", category: "Natur" },
    { id: 20341, word: "Grad", meaning: "도 (온도, 각도)", english: "Degree", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Grad", category: "Natur" },
    { id: 20342, word: "Sonne", meaning: "해, 태양", english: "Sun", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Sonnen", category: "Natur" },
    { id: 20343, word: "Wind", meaning: "바람", english: "Wind", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Winde", category: "Natur" },
    { id: 20344, word: "Regen", meaning: "비", english: "Rain", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Regen", category: "Natur" },
    { id: 20345, word: "Regenschirm", meaning: "우산", english: "Umbrella", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Regenschirme", category: "Alltag" },
    { id: 20346, word: "Wolke", meaning: "구름", english: "Cloud", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Wolken", category: "Natur" },
    { id: 20347, word: "Klimaanlage", meaning: "에어컨", english: "Air Conditioner", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Klimaanlagen", category: "Alltag" },
    { id: 20348, word: "Spaziergang", meaning: "산책", english: "Walk", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Spaziergänge", category: "Freizeit" },
    { id: 20349, word: "warm", meaning: "따뜻한", english: "warm", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20350, word: "kalt", meaning: "추운, 차가운", english: "cold", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20351, word: "stark", meaning: "강한", english: "strong", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20352, word: "heiß", meaning: "뜨거운, 더운", english: "hot", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20353, word: "schlecht", meaning: "나쁜", english: "bad", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20354, word: "schlimm", meaning: "심각한, 나쁜", english: "bad/serious", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20355, word: "nass", meaning: "젖은", english: "wet", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20356, word: "sonnig", meaning: "화창한", english: "sunny", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20357, word: "windig", meaning: "바람 부는", english: "windy", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20358, word: "bewölkt", meaning: "구름 낀", english: "cloudy", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20359, word: "kühl", meaning: "시원한, 서늘한", english: "cool", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20360, word: "plus", meaning: "영상의, 더하기", english: "plus", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },

    // === DAY 13 ===
    { id: 20361, word: "buchen", meaning: "예약하다", english: "to book", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bucht", past: "buchte", perfect: "hat gebucht" }, category: "Reise" },
    { id: 20362, word: "dauern", meaning: "지속되다, 걸리다", english: "to last/take time", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es dauert", past: "dauerte", perfect: "hat gedauert" }, category: "Abstrakt" },
    { id: 20363, word: "passieren", meaning: "일어나다, 발생하다", english: "to happen", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es passiert", past: "passierte", perfect: "ist passiert" }, category: "Abstrakt" },
    { id: 20364, word: "mitmachen", meaning: "참여하다, 함께 하다", english: "to participate/join in", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie macht mit", past: "machte mit", perfect: "hat mitgemacht" }, category: "Freizeit" },
    { id: 20365, word: "mitkommen", meaning: "함께 오다/가다", english: "to come along", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt mit", past: "kam mit", perfect: "ist mitgekommen" }, category: "Alltag" },
    { id: 20366, word: "einpacken", meaning: "짐을 싸다, 포장하다", english: "to pack", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie packt ein", past: "packte ein", perfect: "hat eingepackt" }, category: "Reise" },
    { id: 20367, word: "setzen", meaning: "앉히다, 놓다", english: "to set/put/seat", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie setzt", past: "setzte", perfect: "hat gesetzt" }, category: "Alltag" },
    { id: 20368, word: "teilnehmen", meaning: "참가하다", english: "to participate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie nimmt teil", past: "nahm teil", perfect: "hat teilgenommen" }, category: "Gesellschaft" },
    { id: 20369, word: "verpassen", meaning: "놓치다", english: "to miss (bus, etc.)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verpasst", past: "verpasste", perfect: "hat verpasst" }, category: "Reise" },
    { id: 20370, word: "sitzen", meaning: "앉아 있다", english: "to sit", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sitzt", past: "saß", perfect: "hat gesessen" }, category: "Alltag" },
    { id: 20371, word: "vorbereiten", meaning: "준비하다", english: "to prepare", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bereitet vor", past: "bereitete vor", perfect: "hat vorbereitet" }, category: "Alltag" },
    { id: 20372, word: "vorhaben", meaning: "계획하다, 의도하다", english: "to plan/intend", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hat vor", past: "hatte vor", perfect: "hat vorgehabt" }, category: "Alltag" },
    { id: 20373, word: "sich erholen", meaning: "휴식하다, 회복하다", english: "to recover/relax", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erholt sich", past: "erholte sich", perfect: "hat sich erholt" }, category: "Gesundheit" },
    { id: 20374, word: "sich ausruhen", meaning: "쉬다", english: "to rest", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ruht sich aus", past: "ruhte sich aus", perfect: "hat sich ausgeruht" }, category: "Alltag" },
    { id: 20375, word: "verlieren", meaning: "잃어버리다, 지다", english: "to lose", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verliert", past: "verlor", perfect: "hat verloren" }, category: "Abstrakt" },
    { id: 20376, word: "mitfahren", meaning: "동승하다, 함께 타고 가다", english: "to ride along", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fährt mit", past: "fuhr mit", perfect: "ist mitgefahren" }, category: "Reise" },
    { id: 20377, word: "tanken", meaning: "주유하다", english: "to refuel", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie tankt", past: "tankte", perfect: "hat getankt" }, category: "Reise" },
    { id: 20378, word: "fotografieren", meaning: "사진 찍다", english: "to photograph", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fotografiert", past: "fotografierte", perfect: "hat fotografiert" }, category: "Freizeit" },
    { id: 20379, word: "mitnehmen", meaning: "가지고 가다, 데리고 가다", english: "to take along", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie nimmt mit", past: "nahm mit", perfect: "hat mitgenommen" }, category: "Alltag" },
    { id: 20380, word: "ausgehen", meaning: "외출하다", english: "to go out", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie geht aus", past: "ging aus", perfect: "ist ausgegangen" }, category: "Freizeit" },
    { id: 20381, word: "Reiseziel", meaning: "여행지, 목적지", english: "Destination", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Reiseziele", category: "Reise" },
    { id: 20382, word: "Reiseführer", meaning: "여행 가이드북/가이드", english: "Travel Guide", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Reiseführer", category: "Reise" },
    { id: 20383, word: "Durchsage", meaning: "안내 방송", english: "Announcement", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Durchsagen", category: "Kommunikation" },
    { id: 20384, word: "Informationsmaterial", meaning: "안내 자료", english: "Information Material", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Informationsmaterialien", category: "Kommunikation" },
    { id: 20385, word: "Ausflug", meaning: "소풍, 짧은 여행", english: "Excursion", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Ausflüge", category: "Reise" },
    { id: 20386, word: "Auskunft", meaning: "정보, 안내소", english: "Information", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Auskünfte", category: "Kommunikation" },
    { id: 20387, word: "Ausland", meaning: "외국", english: "Foreign Country", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Reise" },
    { id: 20388, word: "Landschaft", meaning: "풍경", english: "Landscape", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Landschaften", category: "Natur" },
    { id: 20389, word: "wunderbar", meaning: "놀라운, 멋진", english: "wonderful", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20390, word: "während", meaning: "~동안에", english: "during", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Preposition usually, marked as Adj/Adv for simplicity in vocab lists

    // === DAY 14 ===
    { id: 20391, word: "groß", meaning: "큰, 키가 큰", english: "big/tall", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20392, word: "nächst", meaning: "다음의", english: "next", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20393, word: "klug", meaning: "똑똑한", english: "smart/clever", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20394, word: "ledig", meaning: "미혼의", english: "single", partOfSpeech: "Adjective", level: "A1", category: "Mensch" },
    { id: 20395, word: "ganz", meaning: "전체의, 꽤", english: "whole/quite", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20396, word: "gerade", meaning: "곧은, 방금", english: "straight/just", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20397, word: "langsam", meaning: "느린", english: "slow", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20398, word: "modern", meaning: "현대적인", english: "modern", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20399, word: "viel", meaning: "많은", english: "much/many", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20400, word: "allein", meaning: "혼자의", english: "alone", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20401, word: "sauber", meaning: "깨끗한", english: "clean", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20402, word: "eilig", meaning: "급한", english: "hurried/urgent", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20403, word: "fleißig", meaning: "부지런한", english: "diligent", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20404, word: "einfach", meaning: "간단한, 단순한", english: "simple/easy", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20405, word: "richtig", meaning: "맞는, 올바른", english: "correct/right", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20406, word: "leicht", meaning: "가벼운, 쉬운", english: "light/easy", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20407, word: "schön", meaning: "아름다운", english: "beautiful", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20408, word: "los", meaning: "느슨한, 출발한", english: "loose/off", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20409, word: "frei", meaning: "자유로운, 비어있는", english: "free", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20410, word: "toll", meaning: "멋진", english: "great", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20411, word: "faul", meaning: "게으른", english: "lazy", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20412, word: "nett", meaning: "친절한", english: "nice", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20413, word: "schnell", meaning: "빠른", english: "fast", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20414, word: "fertig", meaning: "끝난, 준비된", english: "finished/ready", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20415, word: "fremd", meaning: "낯선, 외국의", english: "foreign/strange", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20416, word: "früh", meaning: "이른", english: "early", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20417, word: "dick", meaning: "뚱뚱한, 두꺼운", english: "fat/thick", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20418, word: "schade", meaning: "아쉬운, 유감인", english: "pity/shame", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20419, word: "prima", meaning: "훌륭한", english: "great/fine", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20420, word: "gut", meaning: "좋은", english: "good", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },

    // === DAY 15 ===
    { id: 20421, word: "gern", meaning: "즐겨, 기꺼이", english: "gladly", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20422, word: "hin", meaning: "거기로 (방향)", english: "there/to", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20423, word: "genau", meaning: "정확한", english: "exact", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20424, word: "überall", meaning: "어디에나", english: "everywhere", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20425, word: "wirklich", meaning: "정말로", english: "really", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20426, word: "schwer", meaning: "무거운, 어려운", english: "heavy/difficult", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20427, word: "wieder", meaning: "다시", english: "again", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20428, word: "etwas", meaning: "무언가, 조금", english: "something/somewhat", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Pronoun/Adverb
    { id: 20429, word: "noch", meaning: "아직, 더", english: "still/yet", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20430, word: "links", meaning: "왼쪽으로", english: "left", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Adverb
    { id: 20431, word: "rechts", meaning: "오른쪽으로", english: "right", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Adverb
    { id: 20432, word: "manchmal", meaning: "가끔", english: "sometimes", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20433, word: "leider", meaning: "유감스럽게도", english: "unfortunately", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20434, word: "geradeaus", meaning: "직진하여", english: "straight ahead", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Adverb
    { id: 20435, word: "vielleicht", meaning: "아마도", english: "maybe", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20436, word: "ungefähr", meaning: "대략", english: "approximately", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20437, word: "zusammen", meaning: "함께", english: "together", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20438, word: "später", meaning: "나중에", english: "later", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20439, word: "sehr", meaning: "매우", english: "very", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20440, word: "bald", meaning: "곧", english: "soon", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20441, word: "schon", meaning: "이미", english: "already", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20442, word: "jetzt", meaning: "지금", english: "now", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20443, word: "nur", meaning: "오직", english: "only", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20444, word: "sofort", meaning: "즉시", english: "immediately", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20445, word: "unterwegs", meaning: "도중에", english: "on the way", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Adverb
    { id: 20446, word: "vorgestern", meaning: "그저께", english: "day before yesterday", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20447, word: "übermorgen", meaning: "모레", english: "day after tomorrow", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20448, word: "sogar", meaning: "심지어", english: "even", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20449, word: "circa", meaning: "대략", english: "circa/about", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20450, word: "natürlich", meaning: "물론, 자연스러운", english: "naturally/of course", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },

    // === DAY 16 ===
    { id: 20451, word: "reden", meaning: "말하다", english: "to talk", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie redet", past: "redete", perfect: "hat geredet" }, category: "Kommunikation" },
    { id: 20452, word: "packen", meaning: "싸다, 챙기다", english: "to pack/grab", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie packt", past: "packte", perfect: "hat gepackt" }, category: "Reise" },
    { id: 20453, word: "unternehmen", meaning: "착수하다, (무엇을) 하다", english: "to undertake/do", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie unternimmt", past: "unternahm", perfect: "hat unternommen" }, category: "Freizeit" },
    { id: 20454, word: "mitbringen", meaning: "가져오다", english: "to bring along", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bringt mit", past: "brachte mit", perfect: "hat mitgebracht" }, category: "Alltag" },
    { id: 20455, word: "braten", meaning: "굽다, 볶다", english: "to fry/roast", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie brät", past: "briet", perfect: "hat gebraten" }, category: "Essen" },
    { id: 20456, word: "träumen (von)", meaning: "꿈꾸다", english: "to dream", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie träumt", past: "träumte", perfect: "hat geträumt" }, category: "Abstrakt" },
    { id: 20457, word: "öffnen", meaning: "열다", english: "to open", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie öffnet", past: "öffnete", perfect: "hat geöffnet" }, category: "Alltag" },
    { id: 20458, word: "hängen", meaning: "걸다, 걸려있다", english: "to hang", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hängt", past: "hing", perfect: "hat gehangen" }, category: "Alltag" },
    { id: 20459, word: "verbrauchen", meaning: "소비하다", english: "to consume/use up", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verbraucht", past: "verbrauchte", perfect: "hat verbraucht" }, category: "Wirtschaft" },
    { id: 20460, word: "gehören", meaning: "~에 속하다", english: "to belong to", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gehört", past: "gehörte", perfect: "hat gehört" }, category: "Abstrakt" },
    { id: 20461, word: "geschehen", meaning: "일어나다, 발생하다", english: "to happen", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es geschieht", past: "geschah", perfect: "ist geschehen" }, category: "Abstrakt" },
    { id: 20462, word: "begegnen", meaning: "마주치다", english: "to encounter/meet", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie begegnet", past: "begegnete", perfect: "ist begegnet" }, category: "Kommunikation" },
    { id: 20463, word: "wiederkommen", meaning: "돌아오다", english: "to come back", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt wieder", past: "kam wieder", perfect: "ist wiedergekommen" }, category: "Alltag" },
    { id: 20464, word: "klingen", meaning: "소리가 나다, 들리다", english: "to sound", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie klingt", past: "klang", perfect: "hat geklungen" }, category: "Kommunikation" },
    { id: 20465, word: "streiten", meaning: "싸우다, 논쟁하다", english: "to argue", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie streitet", past: "stritt", perfect: "hat gestritten" }, category: "Kommunikation" },
    { id: 20466, word: "vergessen", meaning: "잊다", english: "to forget", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie vergisst", past: "vergaß", perfect: "hat vergessen" }, category: "Abstrakt" },
    { id: 20467, word: "leihen", meaning: "빌려주다, 빌리다", english: "to lend/borrow", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie leiht", past: "lieh", perfect: "hat geliehen" }, category: "Wirtschaft" },
    { id: 20468, word: "senden", meaning: "보내다, 방송하다", english: "to send/broadcast", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sendet", past: "sandte", perfect: "hat gesandt" }, category: "Kommunikation" },
    { id: 20469, word: "sich unterhalten", meaning: "담소하다, 즐기다", english: "to converse/entertain oneself", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie unterhält sich", past: "unterhielt sich", perfect: "hat sich unterhalten" }, category: "Kommunikation" },
    { id: 20470, word: "erfahren", meaning: "경험하다, 알게 되다", english: "to experience/learn", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erfährt", past: "erfuhr", perfect: "hat erfahren" }, category: "Abstrakt" },
    { id: 20471, word: "erleben", meaning: "체험하다", english: "to experience", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erlebt", past: "erlebte", perfect: "hat erlebt" }, category: "Abstrakt" },
    { id: 20472, word: "vermissen", meaning: "그리워하다, 놓치다", english: "to miss", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie vermisst", past: "vermisste", perfect: "hat vermisst" }, category: "Abstrakt" },
    { id: 20473, word: "sich amüsieren", meaning: "즐기다", english: "to amuse oneself", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie amüsiert sich", past: "amüsierte sich", perfect: "hat sich amüsiert" }, category: "Freizeit" },
    { id: 20474, word: "lächeln", meaning: "미소 짓다", english: "to smile", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lächelt", past: "lächelte", perfect: "hat gelächelt" }, category: "Kommunikation" },
    { id: 20475, word: "Vorstellung", meaning: "소개, 공연, 상상", english: "Introduction/Performance/Idea", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Vorstellungen", category: "Kommunikation" },
    { id: 20476, word: "Freude", meaning: "기쁨", english: "Joy", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Freuden", category: "Abstrakt" },
    { id: 20477, word: "Stimmung", meaning: "기분, 분위기", english: "Mood/Atmosphere", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Stimmungen", category: "Abstrakt" },
    { id: 20478, word: "Überraschung", meaning: "놀라움, 깜짝 선물", english: "Surprise", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Überraschungen", category: "Abstrakt" },
    { id: 20479, word: "Atmosphäre", meaning: "분위기", english: "Atmosphere", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Atmosphären", category: "Abstrakt" },
    { id: 20480, word: "Feiertag", meaning: "휴일, 공휴일", english: "Holiday", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Feiertage", category: "Alltag" },

    // === DAY 17 ===
    { id: 20481, word: "besichtigen", meaning: "관광하다, 구경하다", english: "to sightsee/visit", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie besichtigt", past: "besichtigte", perfect: "hat besichtigt" }, category: "Reise" },
    { id: 20482, word: "sich beeilen", meaning: "서두르다", english: "to hurry", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie beeilt sich", past: "beeilte sich", perfect: "hat sich beeilt" }, category: "Alltag" },
    { id: 20483, word: "abbiegen", meaning: "방향을 바꾸다, 꺾다", english: "to turn", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie biegt ab", past: "bog ab", perfect: "ist abgebogen" }, category: "Reise" },
    { id: 20484, word: "führen", meaning: "이끌다, 안내하다", english: "to lead/guide", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie führt", past: "führte", perfect: "hat geführt" }, category: "Arbeit" },
    { id: 20485, word: "aufpassen", meaning: "주의하다, 돌보다", english: "to watch out/take care", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie passt auf", past: "passte auf", perfect: "hat aufgepasst" }, category: "Alltag" },
    { id: 20486, word: "zurückkommen", meaning: "돌아오다", english: "to come back", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt zurück", past: "kam zurück", perfect: "ist zurückgekommen" }, category: "Reise" },
    { id: 20487, word: "wandern", meaning: "도보 여행하다", english: "to hike", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wandert", past: "wanderte", perfect: "ist gewandert" }, category: "Freizeit" },
    { id: 20488, word: "genießen", meaning: "즐기다", english: "to enjoy", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie genießt", past: "genoss", perfect: "hat genossen" }, category: "Freizeit" },
    { id: 20489, word: "erwarten", meaning: "기대하다, 기다리다", english: "to expect", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erwartet", past: "erwartete", perfect: "hat erwartet" }, category: "Abstrakt" },
    { id: 20490, word: "besorgen", meaning: "구입하다, 처리하다", english: "to get/obtain", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie besorgt", past: "besorgte", perfect: "hat besorgt" }, category: "Alltag" },
    { id: 20491, word: "sich freuen", meaning: "기뻐하다", english: "to look forward to/be happy", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie freut sich", past: "freute sich", perfect: "hat sich gefreut" }, category: "Abstrakt" },
    { id: 20492, word: "Camping", meaning: "캠핑", english: "Camping", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Freizeit" },
    { id: 20493, word: "Stadtzentrum", meaning: "시내 중심가", english: "City Center", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Stadtzentren", category: "Reise" },
    { id: 20494, word: "Buchhandlung", meaning: "서점", english: "Bookstore", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Buchhandlungen", category: "Bildung" },
    { id: 20495, word: "Urlaub", meaning: "휴가", english: "Vacation", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Urlaube", category: "Reise" },
    { id: 20496, word: "Picknick", meaning: "소풍", english: "Picnic", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Picknicks", category: "Freizeit" },
    { id: 20497, word: "Sehenswürdigkeit", meaning: "명소, 볼거리", english: "Sight/Attraction", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Sehenswürdigkeiten", category: "Reise" },
    { id: 20498, word: "Eintrittskarte", meaning: "입장권", english: "Entrance Ticket", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Eintrittskarten", category: "Reise" },
    { id: 20499, word: "Ermäßigung", meaning: "할인", english: "Discount/Reduction", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ermäßigungen", category: "Wirtschaft" },
    { id: 20500, word: "Jugendherberge", meaning: "유스호스텔", english: "Youth Hostel", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Jugendherbergen", category: "Reise" },
    { id: 20501, word: "Gepäck", meaning: "수하물, 짐", english: "Luggage", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Gepäckstücke", category: "Reise" },
    { id: 20502, word: "Richtung", meaning: "방향", english: "Direction", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Richtungen", category: "Reise" },
    { id: 20503, word: "Besorgung", meaning: "구입, 심부름", english: "Errand/Purchase", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Besorgungen", category: "Alltag" }, // Note: Removed duplicate "Richtung" from OCR
    { id: 20504, word: "Schiff", meaning: "배, 선박", english: "Ship", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Schiffe", category: "Reise" },
    { id: 20505, word: "Stadtplan", meaning: "시내 지도", english: "City Map", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Stadtpläne", category: "Reise" },
    { id: 20506, word: "Verspätung", meaning: "지연, 늦음", english: "Delay", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Verspätungen", category: "Reise" },
    { id: 20507, word: "täglich", meaning: "매일의", english: "daily", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20508, word: "spannend", meaning: "흥미진진한", english: "exciting", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20509, word: "berühmt", meaning: "유명한", english: "famous", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20510, word: "sicher", meaning: "안전한, 확실한", english: "safe/sure", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" }, // From day 18, moved to fill gap or just extra

    // === DAY 18 ===
    { id: 20511, word: "abholen", meaning: "마중 나가다, 찾아오다", english: "to pick up", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie holt ab", past: "holte ab", perfect: "hat abgeholt" }, category: "Alltag" },
    { id: 20512, word: "landen", meaning: "착륙하다", english: "to land", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie landet", past: "landete", perfect: "ist gelandet" }, category: "Reise" },
    { id: 20513, word: "halten", meaning: "멈추다, 유지하다", english: "to stop/hold", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hält", past: "hielt", perfect: "hat gehalten" }, category: "Alltag" },
    { id: 20514, word: "bleiben", meaning: "머무르다", english: "to stay", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bleibt", past: "blieb", perfect: "ist geblieben" }, category: "Alltag" },
    { id: 20515, word: "parken", meaning: "주차하다", english: "to park", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie parkt", past: "parkte", perfect: "hat geparkt" }, category: "Reise" },
    { id: 20516, word: "bedeuten", meaning: "의미하다", english: "to mean", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bedeutet", past: "bedeutete", perfect: "hat bedeutet" }, category: "Kommunikation" },
    { id: 20517, word: "folgen", meaning: "따라가다", english: "to follow", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie folgt", past: "folgte", perfect: "ist gefolgt" }, category: "Alltag" },
    { id: 20518, word: "Unfall", meaning: "사고", english: "Accident", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Unfälle", category: "Reise" },
    { id: 20519, word: "Kurve", meaning: "곡선, 커브", english: "Curve", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Kurven", category: "Reise" },
    { id: 20520, word: "Kreuzung", meaning: "교차로", english: "Intersection", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Kreuzungen", category: "Reise" },
    { id: 20521, word: "Maschine", meaning: "기계, 비행기", english: "Machine/Plane", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Maschinen", category: "Reise" },
    { id: 20522, word: "Auskunft", meaning: "안내, 정보", english: "Information", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Auskünfte", category: "Kommunikation" },
    { id: 20523, word: "Abfahrt", meaning: "출발", english: "Departure", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Abfahrten", category: "Reise" },
    { id: 20524, word: "Fahrt", meaning: "주행, 여행", english: "Drive/Journey", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Fahrten", category: "Reise" },
    { id: 20525, word: "Abflug", meaning: "이륙", english: "Departure (Flight)", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Abflüge", category: "Reise" },
    { id: 20526, word: "Automat", meaning: "자동판매기", english: "Vending Machine", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Automaten", category: "Alltag" },
    { id: 20527, word: "Ecke", meaning: "모퉁이", english: "Corner", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ecken", category: "Reise" },
    { id: 20528, word: "Reihe", meaning: "줄, 열", english: "Row", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Reihen", category: "Alltag" },
    { id: 20529, word: "Ankunft", meaning: "도착", english: "Arrival", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ankünfte", category: "Reise" },
    { id: 20530, word: "Anschluss", meaning: "연결, 환승", english: "Connection", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Anschlüsse", category: "Reise" },
    { id: 20531, word: "Ausgang", meaning: "출구", english: "Exit", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Ausgänge", category: "Reise" },
    { id: 20532, word: "Eingang", meaning: "입구", english: "Entrance", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Eingänge", category: "Reise" },
    { id: 20533, word: "Ampel", meaning: "신호등", english: "Traffic Light", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ampeln", category: "Reise" },
    { id: 20534, word: "Linie", meaning: "노선, 선", english: "Line", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Linien", category: "Reise" },
    { id: 20535, word: "Verzeihung", meaning: "용서, 실례합니다", english: "Forgiveness/Pardon", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Kommunikation" },
    { id: 20536, word: "Führerschein", meaning: "운전면허증", english: "Driver's License", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Führerscheine", category: "Reise" },
    { id: 20537, word: "LKW", meaning: "트럭 (Lastkraftwagen)", english: "Truck", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "LKWs", category: "Reise" },
    { id: 20538, word: "Kfz-Werkstatt", meaning: "자동차 정비소", english: "Car Repair Shop", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Kfz-Werkstätten", category: "Reise" },
    { id: 20539, word: "sicher", meaning: "안전한", english: "safe", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20540, word: "hin und zurück", meaning: "왕복으로", english: "there and back", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Phrase

    // === DAY 19 ===
    { id: 20541, word: "üben", meaning: "연습하다", english: "to practice", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie übt", past: "übte", perfect: "hat geübt" }, category: "Bildung" },
    { id: 20542, word: "übersetzen", meaning: "번역하다", english: "to translate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie übersetzt", past: "übersetzte", perfect: "hat übersetzt" }, category: "Bildung" },
    { id: 20543, word: "durchfallen", meaning: "실패하다, (시험에) 떨어지다", english: "to fail", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fällt durch", past: "fiel durch", perfect: "ist durchgefallen" }, category: "Bildung" },
    { id: 20544, word: "korrigieren", meaning: "수정하다", english: "to correct", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie korrigiert", past: "korrigierte", perfect: "hat korrigiert" }, category: "Bildung" },
    { id: 20545, word: "bestehen", meaning: "합격하다, 존재하다", english: "to pass/exist", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie besteht", past: "bestand", perfect: "hat bestanden" }, category: "Bildung" },
    { id: 20546, word: "ausfallen", meaning: "취소되다, 빠지다", english: "to be cancelled", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es fällt aus", past: "fiel aus", perfect: "ist ausgefallen" }, category: "Alltag" },
    { id: 20547, word: "lehren", meaning: "가르치다", english: "to teach", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lehrt", past: "lehrte", perfect: "hat gelehrt" }, category: "Bildung" },
    { id: 20548, word: "stimmen", meaning: "맞다, 투표하다", english: "to be correct/vote", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es stimmt", past: "stimmte", perfect: "hat gestimmt" }, category: "Kommunikation" },
    { id: 20549, word: "aufschlagen", meaning: "펼치다", english: "to open (book)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schlägt auf", past: "schlug auf", perfect: "hat aufgeschlagen" }, category: "Bildung" },
    { id: 20550, word: "Sprachprüfung", meaning: "어학 시험", english: "Language Exam", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Sprachprüfungen", category: "Bildung" },
    { id: 20551, word: "Niveau", meaning: "수준, 레벨", english: "Level", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Niveaus", category: "Bildung" },
    { id: 20552, word: "Zertifikat", meaning: "증명서, 자격증", english: "Certificate", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Zertifikate", category: "Bildung" },
    { id: 20553, word: "Meinung", meaning: "의견", english: "Opinion", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Meinungen", category: "Kommunikation" },
    { id: 20554, word: "Aussprache", meaning: "발음", english: "Pronunciation", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Aussprachen", category: "Bildung" },
    { id: 20555, word: "Zahl", meaning: "숫자", english: "Number", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Zahlen", category: "Abstrakt" },
    { id: 20556, word: "Studentenkollege", meaning: "대학 동기", english: "Fellow Student", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Studentenkollegen", category: "Bildung" },
    { id: 20557, word: "Satz", meaning: "문장", english: "Sentence", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Sätze", category: "Bildung" },
    { id: 20558, word: "Anfang", meaning: "시작", english: "Beginning", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Anfänge", category: "Abstrakt" },
    { id: 20559, word: "Studium", meaning: "대학 공부, 전공", english: "Studies", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Studien", category: "Bildung" },
    { id: 20560, word: "Vorlesung", meaning: "강의", english: "Lecture", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Vorlesungen", category: "Bildung" },
    { id: 20561, word: "Hauptfach", meaning: "전공 과목", english: "Major", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Hauptfächer", category: "Bildung" },
    { id: 20562, word: "Grundschule", meaning: "초등학교", english: "Elementary School", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Grundschulen", category: "Bildung" },
    { id: 20563, word: "Übung", meaning: "연습, 연습 문제", english: "Exercise", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Übungen", category: "Bildung" },
    { id: 20564, word: "Klassenzimmer", meaning: "교실", english: "Classroom", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Klassenzimmer", category: "Bildung" },
    { id: 20565, word: "Studiengebühr", meaning: "등록금", english: "Tuition Fee", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Studiengebühren", category: "Bildung" },
    { id: 20566, word: "Abitur", meaning: "수능 (고등학교 졸업 시험)", english: "A-Levels/High School Diploma", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Bildung" },
    { id: 20567, word: "Mensa", meaning: "구내식당", english: "Cafeteria", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Mensen", category: "Bildung" },
    { id: 20568, word: "langweilig", meaning: "지루한", english: "boring", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20569, word: "falsch", meaning: "틀린", english: "wrong", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20570, word: "wichtig", meaning: "중요한", english: "important", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },

    // === DAY 20 ===
    { id: 20571, word: "umtauschen", meaning: "교환하다", english: "to exchange", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie tauscht um", past: "tauschte um", perfect: "hat umgetauscht" }, category: "Wirtschaft" },
    { id: 20572, word: "kombinieren", meaning: "결합하다", english: "to combine", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kombiniert", past: "kombinierte", perfect: "hat kombiniert" }, category: "Alltag" },
    { id: 20573, word: "anschauen", meaning: "바라보다", english: "to look at", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schaut an", past: "schaute an", perfect: "hat angeschaut" }, category: "Alltag" },
    { id: 20574, word: "stehen", meaning: "서 있다, 어울리다", english: "to stand/suit", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie steht", past: "stand", perfect: "hat gestanden" }, category: "Alltag" },
    { id: 20575, word: "passen", meaning: "맞다, 어울리다", english: "to fit", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie passt", past: "passte", perfect: "hat gepasst" }, category: "Alltag" },
    { id: 20576, word: "liefern", meaning: "배달하다", english: "to deliver", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie liefert", past: "lieferte", perfect: "hat geliefert" }, category: "Wirtschaft" },
    { id: 20577, word: "wechseln", meaning: "바꾸다", english: "to change", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie wechselt", past: "wechselte", perfect: "hat gewechselt" }, category: "Alltag" },
    { id: 20578, word: "zurechtkommen", meaning: "잘 다루다, 해내다", english: "to cope/manage", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kommt zurecht", past: "kam zurecht", perfect: "ist zurechtgekommen" }, category: "Alltag" },
    { id: 20579, word: "messen", meaning: "측정하다", english: "to measure", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie misst", past: "maß", perfect: "hat gemessen" }, category: "Abstrakt" },
    { id: 20580, word: "herstellen", meaning: "생산하다, 만들다", english: "to produce", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie stellt her", past: "stellte her", perfect: "hat hergestellt" }, category: "Wirtschaft" },
    { id: 20581, word: "sich erinnern", meaning: "기억하다", english: "to remember", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erinnert sich", past: "erinnerte sich", perfect: "hat sich erinnert" }, category: "Abstrakt" },
    { id: 20582, word: "tragen", meaning: "입다, 나르다", english: "to wear/carry", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie trägt", past: "trug", perfect: "hat getragen" }, category: "Alltag" },
    { id: 20583, word: "Interesse", meaning: "관심, 흥미", english: "Interest", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Interessen", category: "Abstrakt" },
    { id: 20584, word: "Umkleidekabine", meaning: "탈의실", english: "Changing Room", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Umkleidekabinen", category: "Wirtschaft" },
    { id: 20585, word: "Onlineshop", meaning: "온라인 쇼핑몰", english: "Online Shop", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Onlineshops", category: "Wirtschaft" },
    { id: 20586, word: "Internet", meaning: "인터넷", english: "Internet", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Kommunikation" },
    { id: 20587, word: "Unterwäsche", meaning: "속옷", english: "Underwear", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Alltag" },
    { id: 20588, word: "Marke", meaning: "상표, 브랜드", english: "Brand", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Marken", category: "Wirtschaft" },
    { id: 20589, word: "Anzug", meaning: "양복", english: "Suit", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Anzüge", category: "Alltag" },
    { id: 20590, word: "Quittung", meaning: "영수증", english: "Receipt", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Quittungen", category: "Wirtschaft" },
    { id: 20591, word: "Gebäude", meaning: "건물", english: "Building", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Gebäude", category: "Alltag" },
    { id: 20592, word: "Taschengeld", meaning: "용돈", english: "Pocket Money", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Taschengelder", category: "Wirtschaft" },
    { id: 20593, word: "Reinigung", meaning: "세탁, 청소", english: "Cleaning/Dry Cleaning", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Reinigungen", category: "Alltag" },
    { id: 20594, word: "Schmuck", meaning: "장신구, 보석", english: "Jewelry", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "-", category: "Wirtschaft" },
    { id: 20595, word: "Rabatt", meaning: "할인", english: "Discount", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Rabatte", category: "Wirtschaft" },
    { id: 20596, word: "Geldbeutel", meaning: "지갑", english: "Wallet", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Geldbeutel", category: "Wirtschaft" },
    { id: 20597, word: "zufrieden", meaning: "만족하는", english: "satisfied", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20598, word: "kaum", meaning: "거의 ~않다", english: "hardly", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20599, word: "gültig", meaning: "유효한", english: "valid", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20600, word: "wert", meaning: "가치 있는", english: "worth", partOfSpeech: "Adjective", level: "A1", category: "Wirtschaft" },

    // === DAY 21 ===
    { id: 20601, word: "abreisen", meaning: "출발하다, 떠나다", english: "to depart/leave", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie reist ab", past: "reiste ab", perfect: "ist abgereist" }, category: "Reise" },
    { id: 20602, word: "verreisen", meaning: "여행을 떠나다", english: "to go on a trip", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verreist", past: "verreiste", perfect: "ist verreist" }, category: "Reise" },
    { id: 20603, word: "reservieren", meaning: "예약하다", english: "to reserve", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie reserviert", past: "reservierte", perfect: "hat reserviert" }, category: "Reise" },
    { id: 20604, word: "übernachten", meaning: "숙박하다", english: "to stay overnight", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie übernachtet", past: "übernachtete", perfect: "hat übernachtet" }, category: "Reise" },
    { id: 20605, word: "auspacken", meaning: "짐을 풀다", english: "to unpack", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie packt aus", past: "packte aus", perfect: "hat ausgepackt" }, category: "Reise" },
    { id: 20606, word: "ausleihen", meaning: "빌리다, 빌려주다", english: "to lend/borrow", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie leiht aus", past: "lieh aus", perfect: "hat ausgeliehen" }, category: "Wirtschaft" },
    { id: 20607, word: "einschlafen", meaning: "잠들다", english: "to fall asleep", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schläft ein", past: "schlief ein", perfect: "ist eingeschlafen" }, category: "Alltag" },
    { id: 20608, word: "klingeln", meaning: "벨이 울리다", english: "to ring", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es klingelt", past: "klingelte", perfect: "hat geklingelt" }, category: "Alltag" },
    { id: 20609, word: "lassen", meaning: "~하게 하다, 두다", english: "to let/leave", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lässt", past: "ließ", perfect: "hat gelassen" }, category: "Abstrakt" },
    { id: 20610, word: "sich ausziehen", meaning: "옷을 벗다", english: "to undress", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie zieht sich aus", past: "zog sich aus", perfect: "hat sich ausgezogen" }, category: "Alltag" },
    { id: 20611, word: "Souvenir", meaning: "기념품", english: "Souvenir", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Souvenirs", category: "Reise" },
    { id: 20612, word: "Reisebüro", meaning: "여행사", english: "Travel Agency", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Reisebüros", category: "Reise" },
    { id: 20613, word: "Ruhe", meaning: "휴식, 고요", english: "Rest/Quiet", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Alltag" },
    { id: 20614, word: "Aufenthalt", meaning: "체류", english: "Stay", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Aufenthalte", category: "Reise" },
    { id: 20615, word: "Unterkunft", meaning: "숙소", english: "Accommodation", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Unterkünfte", category: "Reise" },
    { id: 20616, word: "Anreise", meaning: "도착, 오는 길", english: "Arrival/Journey to", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Anreisen", category: "Reise" },
    { id: 20617, word: "Aussicht", meaning: "전망, 경치", english: "View", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Aussichten", category: "Reise" },
    { id: 20618, word: "Rezeption", meaning: "프런트, 접수처", english: "Reception", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Rezeptionen", category: "Reise" },
    { id: 20619, word: "Saison", meaning: "시즌, 성수기", english: "Season", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Saisons", category: "Reise" },
    { id: 20620, word: "Unterschied", meaning: "차이", english: "Difference", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Unterschiede", category: "Abstrakt" },
    { id: 20621, word: "Blick", meaning: "시선, 전망", english: "View/Glance", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Blicke", category: "Abstrakt" },
    { id: 20622, word: "Koffer", meaning: "여행 가방", english: "Suitcase", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Koffer", category: "Reise" },
    { id: 20623, word: "Pension", meaning: "펜션, 하숙집", english: "Pension/Guesthouse", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Pensionen", category: "Reise" },
    { id: 20624, word: "Wäsche", meaning: "빨래, 세탁물", english: "Laundry", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Alltag" },
    { id: 20625, word: "unangenehm", meaning: "불쾌한", english: "unpleasant", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20626, word: "offen", meaning: "열린, 솔직한", english: "open", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20627, word: "bequem", meaning: "편안한", english: "comfortable", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20628, word: "jemand", meaning: "누군가", english: "someone", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Pronoun
    { id: 20629, word: "niemand", meaning: "아무도 ~않다", english: "no one", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Pronoun
    { id: 20630, word: "einsam", meaning: "외로운", english: "lonely", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },

    // === DAY 22 ===
    { id: 20631, word: "versprechen", meaning: "약속하다", english: "to promise", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verspricht", past: "versprach", perfect: "hat versprochen" }, category: "Kommunikation" },
    { id: 20632, word: "vereinbaren", meaning: "합의하다, 약속하다", english: "to agree/arrange", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie vereinbart", past: "vereinbarte", perfect: "hat vereinbart" }, category: "Kommunikation" },
    { id: 20633, word: "ändern", meaning: "바꾸다, 변경하다", english: "to change", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ändert", past: "änderte", perfect: "hat geändert" }, category: "Abstrakt" },
    { id: 20634, word: "raten", meaning: "조언하다, 추측하다", english: "to advise/guess", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie rät", past: "riet", perfect: "hat geraten" }, category: "Kommunikation" },
    { id: 20635, word: "zunehmen", meaning: "증가하다, 살이 찌다", english: "to increase/gain weight", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie nimmt zu", past: "nahm zu", perfect: "hat zugenommen" }, category: "Gesundheit" },
    { id: 20636, word: "abnehmen", meaning: "감소하다, 살을 빼다", english: "to decrease/lose weight", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie nimmt ab", past: "nahm ab", perfect: "hat abgenommen" }, category: "Gesundheit" },
    { id: 20637, word: "atmen", meaning: "숨쉬다", english: "to breathe", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie atmet", past: "atmete", perfect: "hat geatmet" }, category: "Gesundheit" },
    { id: 20638, word: "verabreden", meaning: "약속하다 (시간/장소)", english: "to make an appointment", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verabredet sich", past: "verabredete sich", perfect: "hat sich verabredet" }, category: "Kommunikation" },
    { id: 20639, word: "sich brechen", meaning: "부러지다", english: "to break (bone)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bricht sich", past: "brach sich", perfect: "hat sich gebrochen" }, category: "Gesundheit" },
    { id: 20640, word: "sich verletzen", meaning: "다치다", english: "to injure oneself", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verletzt sich", past: "verletzte sich", perfect: "hat sich verletzt" }, category: "Gesundheit" },
    { id: 20641, word: "sterben", meaning: "죽다", english: "to die", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie stirbt", past: "starb", perfect: "ist gestorben" }, category: "Gesundheit" },
    { id: 20642, word: "melden", meaning: "알리다, 신고하다", english: "to report", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie meldet", past: "meldete", perfect: "hat gemeldet" }, category: "Kommunikation" },
    { id: 20643, word: "prüfen", meaning: "검사하다, 시험하다", english: "to examine/test", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie prüft", past: "prüfte", perfect: "hat geprüft" }, category: "Bildung" },
    { id: 20644, word: "probieren", meaning: "시도하다, 맛보다", english: "to try/taste", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie probiert", past: "probierte", perfect: "hat probiert" }, category: "Essen" },
    { id: 20645, word: "operieren", meaning: "수술하다", english: "to operate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie operiert", past: "operierte", perfect: "hat operiert" }, category: "Gesundheit" },
    { id: 20646, word: "sorgen", meaning: "걱정하다, 돌보다", english: "to worry/care for", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sorgt", past: "sorgte", perfect: "hat gesorgt" }, category: "Abstrakt" },
    { id: 20647, word: "Körperteil", meaning: "신체 부위", english: "Body Part", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Körperteile", category: "Mensch" },
    { id: 20648, word: "Sprechstunde", meaning: "진료 시간, 상담 시간", english: "Office Hour/Consultation Hour", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Sprechstunden", category: "Gesundheit" },
    { id: 20649, word: "Verabredung", meaning: "약속", english: "Appointment/Date", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Verabredungen", category: "Kommunikation" },
    { id: 20650, word: "Krankenschein", meaning: "진단서, 병가원", english: "Sick Note", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Krankenscheine", category: "Gesundheit" },
    { id: 20651, word: "Krankenwagen", meaning: "구급차", english: "Ambulance", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Krankenwagen", category: "Gesundheit" },
    { id: 20652, word: "Wartezimmer", meaning: "대기실", english: "Waiting Room", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Wartezimmer", category: "Gesundheit" },
    { id: 20653, word: "Schmerzmittel", meaning: "진통제", english: "Painkiller", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Schmerzmittel", category: "Gesundheit" },
    { id: 20654, word: "Attest", meaning: "진단서", english: "Medical Certificate", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Atteste", category: "Gesundheit" },
    { id: 20655, word: "Gesundheitskarte", meaning: "건강보험증", english: "Health Insurance Card", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Gesundheitskarten", category: "Gesundheit" },
    { id: 20656, word: "Grippe", meaning: "독감", english: "Flu", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Grippen", category: "Gesundheit" },
    { id: 20657, word: "Medizin", meaning: "의학, 약", english: "Medicine", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Medizinen", category: "Gesundheit" },
    { id: 20658, word: "Mittel", meaning: "수단, 약제", english: "Means/Remedy", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Mittel", category: "Gesundheit" },
    { id: 20659, word: "vorsichtig", meaning: "조심스러운", english: "careful", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20660, word: "fit", meaning: "건강한, 컨디션이 좋은", english: "fit", partOfSpeech: "Adjective", level: "A1", category: "Gesundheit" },

    // === DAY 23 ===
    { id: 20661, word: "aussuchen", meaning: "고르다, 선발하다", english: "to choose/select", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sucht aus", past: "suchte aus", perfect: "hat ausgesucht" }, category: "Alltag" },
    { id: 20662, word: "Bescheid sagen", meaning: "알려주다", english: "to inform", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sagt Bescheid", past: "sagte Bescheid", perfect: "hat Bescheid gesagt" }, category: "Kommunikation" },
    { id: 20663, word: "kontrollieren", meaning: "검사하다, 통제하다", english: "to check/control", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kontrolliert", past: "kontrollierte", perfect: "hat kontrolliert" }, category: "Arbeit" },
    { id: 20664, word: "schalten", meaning: "전환하다, (스위치를) 돌리다", english: "to switch", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schaltet", past: "schaltete", perfect: "hat geschaltet" }, category: "Alltag" },
    { id: 20665, word: "aufmachen", meaning: "열다", english: "to open", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie macht auf", past: "machte auf", perfect: "hat aufgemacht" }, category: "Alltag" },
    { id: 20666, word: "anmachen", meaning: "켜다 (전자제품)", english: "to turn on", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie macht an", past: "machte an", perfect: "hat angemacht" }, category: "Alltag" },
    { id: 20667, word: "nachfragen", meaning: "문의하다, 다시 묻다", english: "to inquire", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fragt nach", past: "fragte nach", perfect: "hat nachgefragt" }, category: "Kommunikation" },
    { id: 20668, word: "funktionieren", meaning: "작동하다", english: "to function", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es funktioniert", past: "funktionierte", perfect: "hat funktioniert" }, category: "Alltag" },
    { id: 20669, word: "verschicken", meaning: "발송하다", english: "to send off", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verschickt", past: "verschickte", perfect: "hat verschickt" }, category: "Kommunikation" },
    { id: 20670, word: "reparieren", meaning: "수리하다", english: "to repair", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie repariert", past: "reparierte", perfect: "hat repariert" }, category: "Alltag" },
    { id: 20671, word: "aus sein", meaning: "꺼져 있다, 끝나다", english: "to be off/over", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es ist aus", past: "war aus", perfect: "ist aus gewesen" }, category: "Alltag" },
    { id: 20672, word: "holen", meaning: "가져오다", english: "to fetch/get", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie holt", past: "holte", perfect: "hat geholt" }, category: "Alltag" },
    { id: 20673, word: "produzieren", meaning: "생산하다", english: "to produce", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie produziert", past: "produzierte", perfect: "hat produziert" }, category: "Wirtschaft" },
    { id: 20674, word: "Computer", meaning: "컴퓨터", english: "Computer", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Computer", category: "Arbeit" },
    { id: 20675, word: "Reparatur", meaning: "수리", english: "Repair", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Reparaturen", category: "Alltag" },
    { id: 20676, word: "Aufzug", meaning: "엘리베이터", english: "Elevator", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Aufzüge", category: "Alltag" },
    { id: 20677, word: "Techniker", meaning: "기술자", english: "Technician", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Techniker", category: "Arbeit" },
    { id: 20678, word: "Nachricht", meaning: "뉴스, 소식, 메시지", english: "News/Message", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Nachrichten", category: "Kommunikation" },
    { id: 20679, word: "Apparat", meaning: "기계, 장치", english: "Apparatus/Device", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Apparate", category: "Alltag" },
    { id: 20680, word: "Anrufbeantworter", meaning: "자동응답기", english: "Answering Machine", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Anrufbeantworter", category: "Kommunikation" },
    { id: 20681, word: "Telefon", meaning: "전화기", english: "Telephone", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Telefone", category: "Kommunikation" },
    { id: 20682, word: "Augenblick", meaning: "순간, 찰나", english: "Moment", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Augenblicke", category: "Abstrakt" },
    { id: 20683, word: "Medien", meaning: "미디어, 대중매체", english: "Media", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Medien", category: "Kommunikation" }, // Plural
    { id: 20684, word: "Heizung", meaning: "난방, 히터", english: "Heating", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Heizungen", category: "Alltag" },
    { id: 20685, word: "Gebrauchsanweisung", meaning: "사용 설명서", english: "Instructions", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Gebrauchsanweisungen", category: "Alltag" },
    { id: 20686, word: "digital", meaning: "디지털의", english: "digital", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20687, word: "kaputt", meaning: "고장 난", english: "broken", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20688, word: "kostenlos", meaning: "무료의", english: "free of charge", partOfSpeech: "Adjective", level: "A1", category: "Wirtschaft" },
    { id: 20689, word: "technisch", meaning: "기술적인", english: "technical", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20690, word: "so... wie möglich", meaning: "가능한 한 ~하게", english: "as... as possible", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Phrase

    // === DAY 24 ===
    { id: 20691, word: "sich verspäten", meaning: "지각하다, 늦다", english: "to be late", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verspätet sich", past: "verspätete sich", perfect: "hat sich verspätet" }, category: "Alltag" },
    { id: 20692, word: "aufgeben", meaning: "포기하다, 맡기다", english: "to give up/give in", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gibt auf", past: "gab auf", perfect: "hat aufgegeben" }, category: "Abstrakt" },
    { id: 20693, word: "sich bewerben", meaning: "지원하다", english: "to apply", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bewirbt sich", past: "bewarb sich", perfect: "hat sich beworben" }, category: "Arbeit" },
    { id: 20694, word: "zurückrufen", meaning: "답신 전화하다", english: "to call back", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie ruft zurück", past: "rief zurück", perfect: "hat zurückgerufen" }, category: "Kommunikation" },
    { id: 20695, word: "ausrichten", meaning: "전하다, 개최하다", english: "to pass on (message)/host", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie richtet aus", past: "richtete aus", perfect: "hat ausgerichtet" }, category: "Kommunikation" },
    { id: 20696, word: "versuchen", meaning: "시도하다", english: "to try", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie versucht", past: "versuchte", perfect: "hat versucht" }, category: "Abstrakt" },
    { id: 20697, word: "verbinden", meaning: "연결하다", english: "to connect", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verbindet", past: "verband", perfect: "hat verbunden" }, category: "Kommunikation" },
    { id: 20698, word: "speichern", meaning: "저장하다", english: "to save (data)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie speichert", past: "speicherte", perfect: "hat gespeichert" }, category: "Arbeit" },
    { id: 20699, word: "vorschlagen", meaning: "제안하다", english: "to suggest", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schlägt vor", past: "schlug vor", perfect: "hat vorgeschlagen" }, category: "Kommunikation" },
    { id: 20700, word: "drucken", meaning: "인쇄하다", english: "to print", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie druckt", past: "druckte", perfect: "hat gedruckt" }, category: "Arbeit" },
    { id: 20701, word: "Interview", meaning: "인터뷰, 면접", english: "Interview", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Interviews", category: "Arbeit" },
    { id: 20702, word: "Beruf", meaning: "직업", english: "Profession", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Berufe", category: "Arbeit" },
    { id: 20703, word: "Job", meaning: "일, 아르바이트", english: "Job", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Jobs", category: "Arbeit" },
    { id: 20704, word: "Stelle", meaning: "자리, 일자리", english: "Position/Place", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Stellen", category: "Arbeit" },
    { id: 20705, word: "Ausbildung", meaning: "직업 교육, 교육", english: "Apprenticeship/Education", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ausbildungen", category: "Arbeit" },
    { id: 20706, word: "Durchwahl", meaning: "직통 전화", english: "Extension Number", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Durchwahlen", category: "Arbeit" },
    { id: 20707, word: "Anzeige", meaning: "광고, 공고", english: "Advertisement", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Anzeigen", category: "Arbeit" },
    { id: 20708, word: "Selbstbedienung", meaning: "셀프 서비스", english: "Self-service", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Selbstbedienungen", category: "Wirtschaft" },
    { id: 20709, word: "Abteilung", meaning: "부서", english: "Department", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Abteilungen", category: "Arbeit" },
    { id: 20710, word: "Geschäftsreise", meaning: "출장", english: "Business Trip", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Geschäftsreisen", category: "Arbeit" },
    { id: 20711, word: "Chef", meaning: "상사, 사장", english: "Boss", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Chefs", category: "Arbeit" },
    { id: 20712, word: "Einkommen", meaning: "수입, 소득", english: "Income", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Einkommen", category: "Wirtschaft" },
    { id: 20713, word: "Überstunde", meaning: "초과 근무, 야근", english: "Overtime", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Überstunden", category: "Arbeit" },
    { id: 20714, word: "Vorstellungsgespräch", meaning: "면접", english: "Job Interview", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Vorstellungsgespräche", category: "Arbeit" },
    { id: 20715, word: "Unternehmen", meaning: "기업, 회사", english: "Company/Enterprise", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Unternehmen", category: "Arbeit" },
    { id: 20716, word: "Angestellte", meaning: "직원, 회사원", english: "Employee", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Angestellten", category: "Arbeit" },
    { id: 20717, word: "Stellenangebot", meaning: "구인 광고", english: "Job Offer", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Stellenangebote", category: "Arbeit" },
    { id: 20718, word: "arbeitslos", meaning: "실직한", english: "unemployed", partOfSpeech: "Adjective", level: "A1", category: "Arbeit" },
    { id: 20719, word: "selbstständig", meaning: "자영업의, 독립적인", english: "self-employed/independent", partOfSpeech: "Adjective", level: "A1", category: "Arbeit" },
    { id: 20720, word: "angestellt", meaning: "고용된", english: "employed", partOfSpeech: "Adjective", level: "A1", category: "Arbeit" },

    // === DAY 25 ===
    { id: 20721, word: "schaffen", meaning: "해내다, 창조하다", english: "to manage/create", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schafft", past: "schaffte", perfect: "hat geschafft" }, category: "Abstrakt" },
    { id: 20722, word: "überlegen", meaning: "숙고하다, 생각하다", english: "to consider/think over", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie überlegt", past: "überlegte", perfect: "hat überlegt" }, category: "Abstrakt" },
    { id: 20723, word: "nachdenken", meaning: "곰곰이 생각하다", english: "to reflect/think about", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie denkt nach", past: "dachte nach", perfect: "hat nachgedacht" }, category: "Abstrakt" },
    { id: 20724, word: "Recht haben", meaning: "옳다", english: "to be right", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hat Recht", past: "hatte Recht", perfect: "hat Recht gehabt" }, category: "Kommunikation" },
    { id: 20725, word: "beneiden", meaning: "부러워하다", english: "to envy", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie beneidet", past: "beneidete", perfect: "hat beneidet" }, category: "Abstrakt" },
    { id: 20726, word: "behaupten", meaning: "주장하다", english: "to claim", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie behauptet", past: "behauptete", perfect: "hat behauptet" }, category: "Kommunikation" },
    { id: 20727, word: "erkennen", meaning: "인식하다, 알아보다", english: "to recognize", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erkennt", past: "erkannte", perfect: "hat erkannt" }, category: "Abstrakt" },
    { id: 20728, word: "diskutieren", meaning: "토론하다", english: "to discuss", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie diskutiert", past: "diskutierte", perfect: "hat diskutiert" }, category: "Kommunikation" },
    { id: 20729, word: "feststellen", meaning: "확인하다, 확정하다", english: "to determine/establish", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie stellt fest", past: "stellte fest", perfect: "hat festgestellt" }, category: "Abstrakt" },
    { id: 20730, word: "sich befreien", meaning: "해방되다", english: "to free oneself", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie befreit sich", past: "befreite sich", perfect: "hat sich befreit" }, category: "Abstrakt" },
    { id: 20731, word: "abmachen", meaning: "약속하다, 합의하다", english: "to arrange/agree", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie macht ab", past: "machte ab", perfect: "hat abgemacht" }, category: "Kommunikation" },
    { id: 20732, word: "ablehnen", meaning: "거절하다", english: "to reject/refuse", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie lehnt ab", past: "lehnte ab", perfect: "hat abgelehnt" }, category: "Kommunikation" },
    { id: 20733, word: "entscheiden", meaning: "결정하다", english: "to decide", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie entscheidet", past: "entschied", perfect: "hat entschieden" }, category: "Abstrakt" },
    { id: 20734, word: "anfangen", meaning: "시작하다", english: "to start", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie fängt an", past: "fing an", perfect: "hat angefangen" }, category: "Abstrakt" },
    { id: 20735, word: "korrigieren", meaning: "수정하다", english: "to correct", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie korrigiert", past: "korrigierte", perfect: "hat korrigiert" }, category: "Bildung" },
    { id: 20736, word: "missverstehen", meaning: "오해하다", english: "to misunderstand", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie missversteht", past: "missverstand", perfect: "hat missverstanden" }, category: "Kommunikation" },
    { id: 20737, word: "versuchen", meaning: "시도하다", english: "to try", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie versucht", past: "versuchte", perfect: "hat versucht" }, category: "Abstrakt" },
    { id: 20738, word: "Idee", meaning: "아이디어", english: "Idea", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ideen", category: "Abstrakt" },
    { id: 20739, word: "Quatsch", meaning: "헛소리, 말도 안 되는 소리", english: "Nonsense", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "-", category: "Kommunikation" },
    { id: 20740, word: "Karriere", meaning: "경력, 커리어", english: "Career", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Karrieren", category: "Arbeit" },
    { id: 20741, word: "Vorschlag", meaning: "제안", english: "Suggestion", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Vorschläge", category: "Kommunikation" },
    { id: 20742, word: "Wissen", meaning: "지식", english: "Knowledge", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Bildung" },
    { id: 20743, word: "Hauptsache", meaning: "요점, 중요한 것", english: "Main thing", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Hauptsachen", category: "Abstrakt" },
    { id: 20744, word: "selbstverständlich", meaning: "당연한", english: "self-evident", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20745, word: "kompliziert", meaning: "복잡한", english: "complicated", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20746, word: "unmöglich", meaning: "불가능한", english: "impossible", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20747, word: "einverstanden", meaning: "동의하는", english: "agreed", partOfSpeech: "Adjective", level: "A1", category: "Kommunikation" },
    { id: 20748, word: "verschieden", meaning: "다양한, 다른", english: "different/various", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20749, word: "tatsächlich", meaning: "실제로, 사실상", english: "actually", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20750, word: "intelligent", meaning: "지적인", english: "intelligent", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },

    // === DAY 26 ===
    { id: 20751, word: "abheben", meaning: "인출하다, (전화를) 받다", english: "to withdraw/pick up", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hebt ab", past: "hob ab", perfect: "hat abgehoben" }, category: "Wirtschaft" },
    { id: 20752, word: "einzahlen", meaning: "입금하다", english: "to deposit", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie zahlt ein", past: "zahlte ein", perfect: "hat eingezahlt" }, category: "Wirtschaft" },
    { id: 20753, word: "überweisen", meaning: "송금하다", english: "to transfer (money)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie überweist", past: "überwies", perfect: "hat überwiesen" }, category: "Wirtschaft" },
    { id: 20754, word: "einen Kredit aufnehmen", meaning: "대출을 받다", english: "to take out a loan", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie nimmt einen Kredit auf", past: "nahm einen Kredit auf", perfect: "hat einen Kredit aufgenommen" }, category: "Wirtschaft" },
    { id: 20755, word: "ausgeben", meaning: "지출하다", english: "to spend", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gibt aus", past: "gab aus", perfect: "hat ausgegeben" }, category: "Wirtschaft" },
    { id: 20756, word: "sparen", meaning: "저축하다, 아끼다", english: "to save", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie spart", past: "sparte", perfect: "hat gespart" }, category: "Wirtschaft" },
    { id: 20757, word: "gelten", meaning: "유효하다, 적용되다", english: "to be valid/apply", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie gilt", past: "galt", perfect: "hat gegolten" }, category: "Abstrakt" },
    { id: 20758, word: "aufschreiben", meaning: "적어두다, 기록하다", english: "to write down", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schreibt auf", past: "schrieb auf", perfect: "hat aufgeschrieben" }, category: "Kommunikation" },
    { id: 20759, word: "verstecken", meaning: "숨기다", english: "to hide", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie versteckt", past: "versteckte", perfect: "hat versteckt" }, category: "Alltag" },
    { id: 20760, word: "abbuchen", meaning: "차감하다, 이체하다", english: "to debit", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bucht ab", past: "buchte ab", perfect: "hat abgebucht" }, category: "Wirtschaft" },
    { id: 20761, word: "ausfüllen", meaning: "기입하다, 작성하다", english: "to fill out", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie füllt aus", past: "füllte aus", perfect: "hat ausgefüllt" }, category: "Alltag" },
    { id: 20762, word: "eröffnen", meaning: "개설하다, 열다", english: "to open (account/shop)", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie eröffnet", past: "eröffnete", perfect: "hat eröffnet" }, category: "Wirtschaft" },
    { id: 20763, word: "Bank", meaning: "은행", english: "Bank", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Banken", category: "Wirtschaft" },
    { id: 20764, word: "EC-Karte", meaning: "직불카드, 체크카드", english: "Debit Card", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "EC-Karten", category: "Wirtschaft" },
    { id: 20765, word: "Geldautomat", meaning: "현금 자동 입출금기 (ATM)", english: "ATM", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Geldautomaten", category: "Wirtschaft" },
    { id: 20766, word: "Portemonnaie", meaning: "지갑", english: "Wallet/Purse", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Portemonnaies", category: "Wirtschaft" },
    { id: 20767, word: "Konto", meaning: "계좌", english: "Account", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Konten", category: "Wirtschaft" },
    { id: 20768, word: "Kreditkarte", meaning: "신용카드", english: "Credit Card", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Kreditkarten", category: "Wirtschaft" },
    { id: 20769, word: "Zins", meaning: "이자", english: "Interest", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Zinsen", category: "Wirtschaft" },
    { id: 20770, word: "Gebühr", meaning: "수수료, 요금", english: "Fee", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Gebühren", category: "Wirtschaft" },
    { id: 20771, word: "Betrag", meaning: "금액", english: "Amount", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Beträge", category: "Wirtschaft" },
    { id: 20772, word: "Bargeld", meaning: "현금", english: "Cash", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Wirtschaft" },
    { id: 20773, word: "Schein", meaning: "지폐, 증명서", english: "Bill/Certificate", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Scheine", category: "Wirtschaft" },
    { id: 20774, word: "Rente", meaning: "연금", english: "Pension", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Renten", category: "Wirtschaft" },
    { id: 20775, word: "Geheimzahl", meaning: "비밀번호 (PIN)", english: "PIN", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Geheimzahlen", category: "Wirtschaft" },
    { id: 20776, word: "Bestätigung", meaning: "확인, 확인서", english: "Confirmation", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Bestätigungen", category: "Kommunikation" },
    { id: 20777, word: "Alarm", meaning: "경보, 알람", english: "Alarm", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Alarme", category: "Alltag" },
    { id: 20778, word: "Ausweis", meaning: "신분증", english: "ID Card", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Ausweise", category: "Alltag" },
    { id: 20779, word: "Schalter", meaning: "창구, 스위치", english: "Counter/Switch", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Schalter", category: "Alltag" },
    { id: 20780, word: "Service-Nummer", meaning: "서비스 번호", english: "Service Number", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Service-Nummern", category: "Kommunikation" },

    // === DAY 27 ===
    { id: 20781, word: "vermuten", meaning: "추측하다", english: "to suspect/assume", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie vermutet", past: "vermutete", perfect: "hat vermutet" }, category: "Abstrakt" },
    { id: 20782, word: "schwitzen", meaning: "땀을 흘리다", english: "to sweat", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schwitzt", past: "schwitzte", perfect: "hat geschwitzt" }, category: "Gesundheit" },
    { id: 20783, word: "sich sonnen", meaning: "일광욕하다", english: "to sunbathe", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie sonnt sich", past: "sonnte sich", perfect: "hat sich gesonnt" }, category: "Freizeit" },
    { id: 20784, word: "aufhören", meaning: "그만두다, 멈추다", english: "to stop", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie hört auf", past: "hörte auf", perfect: "hat aufgehört" }, category: "Abstrakt" },
    { id: 20785, word: "leuchten", meaning: "빛나다", english: "to shine", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie leuchtet", past: "leuchtete", perfect: "hat geleuchtet" }, category: "Natur" },
    { id: 20786, word: "frieren", meaning: "춥다, 얼다", english: "to freeze", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie friert", past: "fror", perfect: "hat gefroren" }, category: "Natur" },
    { id: 20787, word: "hageln", meaning: "우박이 내리다", english: "to hail", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "es hagelt", past: "hagelte", perfect: "hat gehagelt" }, category: "Natur" },
    { id: 20788, word: "blasen", meaning: "불다", english: "to blow", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie bläst", past: "blies", perfect: "hat geblasen" }, category: "Natur" },
    { id: 20789, word: "Pflanze", meaning: "식물", english: "Plant", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Pflanzen", category: "Natur" },
    { id: 20790, word: "Stern", meaning: "별", english: "Star", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Sterne", category: "Natur" },
    { id: 20791, word: "Welt", meaning: "세상, 세계", english: "World", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Welten", category: "Gesellschaft" },
    { id: 20792, word: "Natur", meaning: "자연", english: "Nature", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "-", category: "Natur" },
    { id: 20793, word: "Meer", meaning: "바다", english: "Sea", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Meere", category: "Natur" },
    { id: 20794, word: "Temperatur", meaning: "온도, 기온", english: "Temperature", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Temperaturen", category: "Natur" },
    { id: 20795, word: "Eis", meaning: "얼음, 아이스크림", english: "Ice/Ice Cream", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "-", category: "Essen" },
    { id: 20796, word: "Schnee", meaning: "눈", english: "Snow", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "-", category: "Natur" },
    { id: 20797, word: "Nebel", meaning: "안개", english: "Fog", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Nebel", category: "Natur" },
    { id: 20798, word: "Sturm", meaning: "폭풍", english: "Storm", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Stürme", category: "Natur" },
    { id: 20799, word: "Luft", meaning: "공기", english: "Air", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Lüfte", category: "Natur" },
    { id: 20800, word: "Fluss", meaning: "강", english: "River", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Flüsse", category: "Natur" },
    { id: 20801, word: "Baum", meaning: "나무", english: "Tree", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Bäume", category: "Natur" },
    { id: 20802, word: "Wald", meaning: "숲", english: "Forest", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Wälder", category: "Natur" },
    { id: 20803, word: "regnerisch", meaning: "비 오는", english: "rainy", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20804, word: "klar", meaning: "맑은, 명확한", english: "clear", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20805, word: "dunkel", meaning: "어두운", english: "dark", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20806, word: "unglaublich", meaning: "믿을 수 없는", english: "incredible", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20807, word: "allmählich", meaning: "점차적인", english: "gradual", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20808, word: "bedeckt", meaning: "덮인, 흐린", english: "covered/overcast", partOfSpeech: "Adjective", level: "A1", category: "Natur" },
    { id: 20809, word: "wegen", meaning: "~때문에", english: "because of", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Preposition
    { id: 20810, word: "trotz", meaning: "~에도 불구하고", english: "despite", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Preposition

    // === DAY 28 ===
    { id: 20811, word: "sich erkundigen", meaning: "문의하다, 알아보다", english: "to inquire", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie erkundigt sich", past: "erkundigte sich", perfect: "hat sich erkundigt" }, category: "Kommunikation" },
    { id: 20812, word: "sich verwählen", meaning: "전화를 잘못 걸다", english: "to dial the wrong number", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verwählt sich", past: "verwählte sich", perfect: "hat sich verwählt" }, category: "Kommunikation" },
    { id: 20813, word: "kündigen", meaning: "해고하다, 사직하다, 해지하다", english: "to resign/terminate", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie kündigt", past: "kündigte", perfect: "hat gekündigt" }, category: "Arbeit" },
    { id: 20814, word: "übernehmen", meaning: "넘겨받다, 맡다", english: "to take over", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie übernimmt", past: "übernahm", perfect: "hat übernommen" }, category: "Arbeit" },
    { id: 20815, word: "analysieren", meaning: "분석하다", english: "to analyze", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie analysiert", past: "analysierte", perfect: "hat analysiert" }, category: "Arbeit" },
    { id: 20816, word: "dienen", meaning: "봉사하다, 근무하다", english: "to serve", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie dient", past: "diente", perfect: "hat gedient" }, category: "Arbeit" },
    { id: 20817, word: "vorschlagen", meaning: "제안하다", english: "to suggest", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie schlägt vor", past: "schlug vor", perfect: "hat vorgeschlagen" }, category: "Kommunikation" },
    { id: 20818, word: "verdienen", meaning: "(돈을) 벌다", english: "to earn", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie verdient", past: "verdiente", perfect: "hat verdient" }, category: "Arbeit" },
    { id: 20819, word: "begrüßen", meaning: "환영하다, 인사하다", english: "to greet/welcome", partOfSpeech: "Verb", level: "A1", forms: { present3rd: "er/sie begrüßt", past: "begrüßte", perfect: "hat begrüßt" }, category: "Kommunikation" },
    { id: 20820, word: "Steuer", meaning: "세금", english: "Tax", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Steuern", category: "Wirtschaft" },
    { id: 20821, word: "Lust", meaning: "흥미, 의욕", english: "Desire/Mood", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Lüste", category: "Abstrakt" },
    { id: 20822, word: "Teilzeitarbeit", meaning: "파트타임 근무", english: "Part-time Work", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Teilzeitarbeiten", category: "Arbeit" },
    { id: 20823, word: "Beziehung", meaning: "관계", english: "Relationship", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Beziehungen", category: "Mensch" },
    { id: 20824, word: "Programm", meaning: "프로그램", english: "Program", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Programme", category: "Kommunikation" },
    { id: 20825, word: "Typ", meaning: "유형, 타입", english: "Type", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Typen", category: "Abstrakt" },
    { id: 20826, word: "Sendung", meaning: "방송, 발송", english: "Broadcast/Shipment", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Sendungen", category: "Kommunikation" },
    { id: 20827, word: "Rat", meaning: "조언", english: "Advice", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Ratschläge", category: "Kommunikation" },
    { id: 20828, word: "Mitteilung", meaning: "통지, 메시지", english: "Message/Notice", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Mitteilungen", category: "Kommunikation" },
    { id: 20829, word: "System", meaning: "시스템, 체계", english: "System", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Systeme", category: "Abstrakt" },
    { id: 20830, word: "Import", meaning: "수입", english: "Import", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Importe", category: "Wirtschaft" },
    { id: 20831, word: "Export", meaning: "수출", english: "Export", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Exporte", category: "Wirtschaft" },
    { id: 20832, word: "Seminar", meaning: "세미나", english: "Seminar", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Seminare", category: "Bildung" },
    { id: 20833, word: "Lohn", meaning: "임금, 급여", english: "Wage", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Löhne", category: "Arbeit" },
    { id: 20834, word: "Mitarbeiter", meaning: "직원, 동료", english: "Coworker/Employee", partOfSpeech: "Noun", gender: "der", level: "A1", plural: "Mitarbeiter", category: "Arbeit" },
    { id: 20835, word: "Ordnung", meaning: "질서, 정돈", english: "Order", partOfSpeech: "Noun", gender: "die", level: "A1", plural: "Ordnungen", category: "Abstrakt" },
    { id: 20836, word: "Praktikum", meaning: "실습, 인턴십", english: "Internship", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Praktika", category: "Arbeit" },
    { id: 20837, word: "Projekt", meaning: "프로젝트", english: "Project", partOfSpeech: "Noun", gender: "das", level: "A1", plural: "Projekte", category: "Arbeit" },
    { id: 20838, word: "aktiv", meaning: "활동적인", english: "active", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20839, word: "anstrengend", meaning: "힘든, 고된", english: "strenuous/exhausting", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20840, word: "effektiv", meaning: "효과적인", english: "effective", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },

    // === DAY 29 ===
    { id: 20841, word: "reich", meaning: "부유한, 풍부한", english: "rich", partOfSpeech: "Adjective", level: "A1", category: "Wirtschaft" },
    { id: 20842, word: "breit", meaning: "넓은", english: "wide", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20843, word: "weiter", meaning: "계속되는, 더 먼", english: "further", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20844, word: "rund", meaning: "둥근", english: "round", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20845, word: "komisch", meaning: "이상한, 웃긴", english: "funny/strange", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20846, word: "persönlich", meaning: "개인적인", english: "personal", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20847, word: "salzig", meaning: "짠", english: "salty", partOfSpeech: "Adjective", level: "A1", category: "Essen" },
    { id: 20848, word: "dringend", meaning: "긴급한", english: "urgent", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20849, word: "wahr", meaning: "진실된, 참인", english: "true", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20850, word: "hoch", meaning: "높은", english: "high", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20851, word: "schwach", meaning: "약한", english: "weak", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20852, word: "neugierig", meaning: "호기심 많은", english: "curious", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20853, word: "vegetarisch", meaning: "채식의", english: "vegetarian", partOfSpeech: "Adjective", level: "A1", category: "Essen" },
    { id: 20854, word: "arm", meaning: "가난한", english: "poor", partOfSpeech: "Adjective", level: "A1", category: "Wirtschaft" },
    { id: 20855, word: "wenig", meaning: "적은", english: "little/few", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20856, word: "dünn", meaning: "얇은, 마른", english: "thin", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20857, word: "tot", meaning: "죽은", english: "dead", partOfSpeech: "Adjective", level: "A1", category: "Gesundheit" },
    { id: 20858, word: "blöd", meaning: "멍청한, 어리석은", english: "stupid", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20859, word: "nervös", meaning: "불안한, 신경질적인", english: "nervous", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20860, word: "laut", meaning: "시끄러운", english: "loud", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20861, word: "traurig", meaning: "슬픈", english: "sad", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20862, word: "hässlich", meaning: "못생긴", english: "ugly", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20863, word: "stark", meaning: "강한", english: "strong", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20864, word: "deutlich", meaning: "분명한", english: "clear/distinct", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20865, word: "satt", meaning: "배부른", english: "full (eaten)", partOfSpeech: "Adjective", level: "A1", category: "Essen" },
    { id: 20866, word: "erst", meaning: "맨 처음의, 이제 막", english: "first/only", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20867, word: "leer", meaning: "빈", english: "empty", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20868, word: "gefährlich", meaning: "위험한", english: "dangerous", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" },
    { id: 20869, word: "plötzlich", meaning: "갑작스러운", english: "sudden", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" },
    { id: 20870, word: "müde", meaning: "피곤한", english: "tired", partOfSpeech: "Adjective", level: "A1", category: "Gesundheit" },

    // === DAY 30 ===
    { id: 20871, word: "weit", meaning: "멀리", english: "far", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20872, word: "fast", meaning: "거의", english: "almost", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20873, word: "etwa", meaning: "약, 대략", english: "about/approximately", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20874, word: "mehr", meaning: "더", english: "more", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20875, word: "öfter(s)", meaning: "자주, 종종", english: "more often", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20876, word: "insgesamt", meaning: "전체적으로, 총", english: "altogether", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20877, word: "drinnen", meaning: "안에", english: "inside", partOfSpeech: "Adjective", level: "A1", category: "Alltag" }, // Adverb
    { id: 20878, word: "immer", meaning: "항상", english: "always", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20879, word: "selten", meaning: "드물게", english: "rarely", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20880, word: "überhaupt", meaning: "대체로, 전혀 (부정문)", english: "at all/generally", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20881, word: "besser", meaning: "더 나은", english: "better", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" }, // Adverb
    { id: 20882, word: "bestimmt", meaning: "틀림없이, 분명히", english: "definitely/certainly", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20883, word: "rückwärts", meaning: "뒤로", english: "backwards", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Adverb
    { id: 20884, word: "hoffentlich", meaning: "바라건대", english: "hopefully", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20885, word: "entlang", meaning: "~을 따라서", english: "along", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Adverb/Prep
    { id: 20886, word: "höchstens", meaning: "기껏해야", english: "at most", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20887, word: "besonders", meaning: "특히", english: "especially", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20888, word: "häufig", meaning: "빈번한", english: "frequently", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20889, word: "genauso", meaning: "똑같이", english: "just as", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20890, word: "zunächst", meaning: "우선, 처음에", english: "first of all", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20891, word: "zuerst", meaning: "먼저", english: "first", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20892, word: "oft", meaning: "자주", english: "often", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20893, word: "dagegen", meaning: "반대로, 그에 반해", english: "against it/on the other hand", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20894, word: "gleichfalls", meaning: "마찬가지로", english: "likewise", partOfSpeech: "Adjective", level: "A1", category: "Kommunikation" }, // Adverb
    { id: 20895, word: "nie", meaning: "결코 ~않다", english: "never", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20896, word: "zuletzt", meaning: "마지막으로", english: "lastly", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20897, word: "anders", meaning: "다르게", english: "differently", partOfSpeech: "Adjective", level: "A1", category: "Eigenschaft" }, // Adverb
    { id: 20898, word: "zurück", meaning: "뒤로, 돌아와서", english: "back", partOfSpeech: "Adjective", level: "A1", category: "Reise" }, // Adverb
    { id: 20899, word: "meistens", meaning: "대부분, 주로", english: "mostly", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb
    { id: 20900, word: "wohl", meaning: "아마도, 잘", english: "probably/well", partOfSpeech: "Adjective", level: "A1", category: "Abstrakt" }, // Adverb

    // END_OF_VOCAB_LIST
];

/* * ==========================================================================
 * COMPOUND WORD DATA (Kompositum / 결합어)
 * Maps word IDs to their compound parts with etymology
 * ========================================================================== */
const compoundData = {
    // === Base words (결합어) ===
    3007: { parts: ["zu", "Kunft"], partMeanings: ["~으로", "오다(kommen)에서 유래"], note: "미래 = '다가올 것'" },
    3008: { parts: ["Um", "Welt"], partMeanings: ["둘레, 주위", "세상"], note: "환경 = '주위의 세상'" },
    3009: { parts: ["Ein", "Fluss"], partMeanings: ["안으로", "흐름"], note: "영향 = '안으로 흘러드는 것'" },
    3014: { parts: ["Zu", "Stand"], partMeanings: ["~에", "서 있음"], note: "상태 = '어떤 위치에 서 있는 것'" },

    // === DAY 01 ===
    20013: { parts: ["Fremd", "sprache"], partMeanings: ["낯선, 외국의", "언어"], note: "외국어 = '낯선 언어'" },
    20019: { parts: ["Familien", "name"], partMeanings: ["가족의", "이름"], note: "성 = '가족의 이름'" },
    20023: { parts: ["Haupt", "stadt"], partMeanings: ["주된, 으뜸의", "도시"], note: "수도 = '주된 도시'" },
    20024: { parts: ["Geburt", "s", "ort"], partMeanings: ["출생", "연결음", "장소"], note: "출생지 = '태어난 장소'" },
    20027: { parts: ["Post", "leit", "zahl"], partMeanings: ["우편", "안내의", "숫자"], note: "우편번호 = '우편 안내 숫자'" },

    // === DAY 02 ===
    20044: { parts: ["Groß", "eltern"], partMeanings: ["큰, 위대한", "부모"], note: "조부모 = '큰 부모'" },
    20045: { parts: ["Groß", "vater"], partMeanings: ["큰, 위대한", "아버지"], note: "할아버지 = '큰 아버지'" },
    20051: { parts: ["Wohn", "ort"], partMeanings: ["거주의", "장소"], note: "거주지 = '사는 장소'" },
    20052: { parts: ["Familien", "stand"], partMeanings: ["가족의", "상태"], note: "결혼 상태 = '가족 상태'" },
    20053: { parts: ["Familien", "foto"], partMeanings: ["가족의", "사진"], note: "가족 사진" },
    20057: { parts: ["Groß", "familie"], partMeanings: ["큰", "가족"], note: "대가족 = '큰 가족'" },

    // === DAY 03 ===
    20074: { parts: ["Leben", "s", "mittel"], partMeanings: ["삶, 생명", "연결음", "수단"], note: "식료품 = '삶의 수단'" },
    20076: { parts: ["Liebling", "s", "essen"], partMeanings: ["가장 좋아하는 것", "연결음", "음식"], note: "가장 좋아하는 음식" },
    20078: { parts: ["Sonder", "angebot"], partMeanings: ["특별한", "제안, 제공"], note: "특가 = '특별한 제안'" },
    20082: { parts: ["Abend", "essen"], partMeanings: ["저녁", "식사"], note: "저녁 식사 = '저녁에 먹는 것'" },
    20083: { parts: ["Speise", "karte"], partMeanings: ["음식", "카드"], note: "메뉴판 = '음식 카드'" },

    // === DAY 04 ===
    20118: { parts: ["Wochen", "ende"], partMeanings: ["주(week)의", "끝"], note: "주말 = '한 주의 끝'" },
    20120: { parts: ["Vor", "mittag"], partMeanings: ["전, 앞", "정오"], note: "오전 = '정오 전'" },

    // === DAY 05 ===
    20135: { parts: ["Haus", "aufgabe"], partMeanings: ["집", "과제"], note: "숙제 = '집에서 하는 과제'" },
    20144: { parts: ["Wörter", "buch"], partMeanings: ["단어들", "책"], note: "사전 = '단어들의 책'" },

    // === DAY 06 ===
    20169: { parts: ["Kauf", "haus"], partMeanings: ["구매", "집, 건물"], note: "백화점 = '구매의 집'" },

    // === DAY 07 ===
    20197: { parts: ["Frei", "zeit"], partMeanings: ["자유로운", "시간"], note: "여가 = '자유로운 시간'" },

    // === DAY 08 ===
    20227: { parts: ["Geburt", "s", "tag"], partMeanings: ["출생", "연결음", "날"], note: "생일 = '태어난 날'" },
    20232: { parts: ["Brief", "marke"], partMeanings: ["편지", "표시, 마크"], note: "우표 = '편지의 표시'" },
    20233: { parts: ["Post", "karte"], partMeanings: ["우편", "카드"], note: "엽서 = '우편 카드'" },
    20238: { parts: ["Feier", "abend"], partMeanings: ["축하, 행사", "저녁"], note: "퇴근 = '축하할 저녁' (일과 끝)" },

    // === DAY 09 ===
    20255: { parts: ["Wohn", "zimmer"], partMeanings: ["거주의", "방"], note: "거실 = '사는 방'" },
    20262: { parts: ["Quadrat", "meter"], partMeanings: ["정사각형", "미터"], note: "제곱미터" },
    20264: { parts: ["Neben", "kosten"], partMeanings: ["부수적인", "비용"], note: "관리비 = '부수 비용'" },

    // === DAY 10 ===
    20283: { parts: ["Straßen", "bahn"], partMeanings: ["거리의", "철도"], note: "전차 = '거리의 철도'" },
    20286: { parts: ["Haupt", "bahn", "hof"], partMeanings: ["주된", "철도", "뜰, 역"], note: "중앙역 = '주된 철도역'" },
    20287: { parts: ["Bahn", "steig"], partMeanings: ["철도", "오르는 곳"], note: "승강장 = '철도 오르는 곳'" },
    20288: { parts: ["Flug", "zeug"], partMeanings: ["비행", "도구"], note: "비행기 = '비행 도구'" },
    20289: { parts: ["Flug", "hafen"], partMeanings: ["비행", "항구"], note: "공항 = '비행 항구'" },
    20292: { parts: ["Auto", "bahn"], partMeanings: ["자동차", "도로"], note: "고속도로 = '자동차 도로'" },
    20294: { parts: ["Fahr", "rad"], partMeanings: ["주행", "바퀴"], note: "자전거 = '주행하는 바퀴'" },

    // === DAY 11 ===
    20322: { parts: ["Kranken", "haus"], partMeanings: ["아픈 사람들의", "집"], note: "병원 = '아픈 사람들의 집'" },

    // === DAY 12 ===
    20339: { parts: ["Himmel", "s", "richtung"], partMeanings: ["하늘", "연결음", "방향"], note: "방위 = '하늘의 방향'" },
    20340: { parts: ["Jahr", "es", "zeit"], partMeanings: ["해, 년", "연결음", "시간"], note: "계절 = '한 해의 시간'" },
    20345: { parts: ["Regen", "schirm"], partMeanings: ["비", "가리개"], note: "우산 = '비 가리개'" },
    20347: { parts: ["Klima", "anlage"], partMeanings: ["기후", "설비"], note: "에어컨 = '기후 설비'" },
    20348: { parts: ["Spazier", "gang"], partMeanings: ["거닐다", "걸음"], note: "산책 = '거니는 걸음'" },

    // === DAY 13 ===
    20381: { parts: ["Reise", "ziel"], partMeanings: ["여행", "목표"], note: "여행지 = '여행의 목표'" },
    20382: { parts: ["Reise", "führer"], partMeanings: ["여행", "안내자"], note: "여행 가이드" },
    20384: { parts: ["Information", "s", "material"], partMeanings: ["정보", "연결음", "자료"], note: "안내 자료 = '정보 자료'" },
    20388: { parts: ["Land", "schaft"], partMeanings: ["땅, 지역", "~의 모습"], note: "풍경 = '땅의 모습'" },

    // === DAY 16 ===
    20480: { parts: ["Feier", "tag"], partMeanings: ["축하", "날"], note: "공휴일 = '축하하는 날'" },

    // === DAY 17 ===
    20493: { parts: ["Stadt", "zentrum"], partMeanings: ["도시", "중심"], note: "시내 중심가 = '도시의 중심'" },
    20494: { parts: ["Buch", "handlung"], partMeanings: ["책", "거래, 상점"], note: "서점 = '책 상점'" },
    20497: { parts: ["Sehen", "s", "würdig", "keit"], partMeanings: ["보다", "연결음", "가치 있는", "~함"], note: "명소 = '볼 가치가 있는 것'" },
    20498: { parts: ["Eintritt", "s", "karte"], partMeanings: ["입장", "연결음", "카드"], note: "입장권 = '입장 카드'" },
    20500: { parts: ["Jugend", "herberge"], partMeanings: ["청소년", "숙소"], note: "유스호스텔 = '청소년 숙소'" },
    20505: { parts: ["Stadt", "plan"], partMeanings: ["도시", "지도, 계획"], note: "시내 지도 = '도시 지도'" },

    // === DAY 18 ===
    20536: { parts: ["Führer", "schein"], partMeanings: ["운전자", "증명서"], note: "운전면허증 = '운전자 증명서'" },
    20538: { parts: ["Kfz", "Werkstatt"], partMeanings: ["자동차(Kraftfahrzeug)", "작업장"], note: "자동차 정비소 = '자동차 작업장'" },

    // === DAY 19 ===
    20550: { parts: ["Sprach", "prüfung"], partMeanings: ["언어의", "시험"], note: "어학 시험 = '언어 시험'" },
    20561: { parts: ["Haupt", "fach"], partMeanings: ["주된", "과목"], note: "전공 = '주된 과목'" },
    20562: { parts: ["Grund", "schule"], partMeanings: ["기초", "학교"], note: "초등학교 = '기초 학교'" },
    20564: { parts: ["Klassen", "zimmer"], partMeanings: ["학급의", "방"], note: "교실 = '학급의 방'" },
    20565: { parts: ["Studien", "gebühr"], partMeanings: ["학업의", "수수료"], note: "등록금 = '학업 수수료'" },

    // === DAY 20 ===
    20584: { parts: ["Um", "kleide", "kabine"], partMeanings: ["바꾸다", "옷을 입다", "칸"], note: "탈의실 = '옷 갈아입는 칸'" },
    20587: { parts: ["Unter", "wäsche"], partMeanings: ["아래", "빨래, 옷"], note: "속옷 = '아래에 입는 옷'" },
    20592: { parts: ["Taschen", "geld"], partMeanings: ["주머니의", "돈"], note: "용돈 = '주머니 돈'" },
    20596: { parts: ["Geld", "beutel"], partMeanings: ["돈", "주머니"], note: "지갑 = '돈 주머니'" },

    // === DAY 21 ===
    20612: { parts: ["Reise", "büro"], partMeanings: ["여행", "사무실"], note: "여행사 = '여행 사무실'" },

    // === DAY 22 ===
    20647: { parts: ["Körper", "teil"], partMeanings: ["몸", "부분"], note: "신체 부위 = '몸의 부분'" },
    20648: { parts: ["Sprech", "stunde"], partMeanings: ["말하다", "시간"], note: "진료시간 = '상담 시간'" },
    20650: { parts: ["Kranken", "schein"], partMeanings: ["아픈 사람의", "증명서"], note: "진단서 = '병자 증명서'" },
    20651: { parts: ["Kranken", "wagen"], partMeanings: ["아픈 사람의", "차량"], note: "구급차 = '병자의 차량'" },
    20652: { parts: ["Warte", "zimmer"], partMeanings: ["기다리다", "방"], note: "대기실 = '기다리는 방'" },
    20653: { parts: ["Schmerz", "mittel"], partMeanings: ["통증", "수단, 약제"], note: "진통제 = '통증의 약'" },
    20655: { parts: ["Gesundheit", "s", "karte"], partMeanings: ["건강", "연결음", "카드"], note: "건강보험증 = '건강 카드'" },

    // === DAY 23 ===
    20680: { parts: ["Anruf", "beantworter"], partMeanings: ["전화", "응답기"], note: "자동응답기 = '전화 응답기'" },
    20682: { parts: ["Augen", "blick"], partMeanings: ["눈의", "시선"], note: "순간 = '눈 깜짝할 사이'" },
    20685: { parts: ["Gebrauch", "s", "anweisung"], partMeanings: ["사용", "연결음", "안내"], note: "사용설명서 = '사용 안내'" },

    // === DAY 24 ===
    20706: { parts: ["Durch", "wahl"], partMeanings: ["직통의", "선택, 다이얼"], note: "직통전화 = '직통 다이얼'" },
    20708: { parts: ["Selbst", "bedienung"], partMeanings: ["스스로", "서비스"], note: "셀프서비스 = '자기 서비스'" },
    20710: { parts: ["Geschäft", "s", "reise"], partMeanings: ["사업", "연결음", "여행"], note: "출장 = '사업 여행'" },
    20714: { parts: ["Vorstellung", "s", "gespräch"], partMeanings: ["소개", "연결음", "대화"], note: "면접 = '소개 대화'" },
    20717: { parts: ["Stellen", "angebot"], partMeanings: ["자리의", "제안"], note: "구인 광고 = '자리 제안'" },

    // === DAY 25 ===
    20743: { parts: ["Haupt", "sache"], partMeanings: ["주된", "것, 사안"], note: "요점 = '주된 것'" },

    // === DAY 26 ===
    20765: { parts: ["Geld", "automat"], partMeanings: ["돈", "자동기계"], note: "ATM = '돈 자동기계'" },
    20768: { parts: ["Kredit", "karte"], partMeanings: ["신용", "카드"], note: "신용카드 = '신용 카드'" },
    20772: { parts: ["Bar", "geld"], partMeanings: ["현금의, 즉시의", "돈"], note: "현금 = '즉시 쓸 수 있는 돈'" },
    20775: { parts: ["Geheim", "zahl"], partMeanings: ["비밀의", "숫자"], note: "비밀번호 = '비밀 숫자'" },

    // === DAY 28 ===
    20822: { parts: ["Teil", "zeit", "arbeit"], partMeanings: ["부분", "시간", "일"], note: "파트타임 = '부분 시간 일'" },
    20834: { parts: ["Mit", "arbeiter"], partMeanings: ["함께", "일하는 사람"], note: "동료 = '함께 일하는 사람'" },
};

/* * ==========================================================================
 * REKTION DATA (전치사 짝꿍 + 재귀동사)
 * 동사/형용사 + 전치사 + 격(Akk/Dat) 세트
 * ========================================================================== */
const rektionData = {
    // ---------- 동사 + 전치사 (Verb + Präposition) ----------

    // warten auf + Akk.
    20223: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "auf", case: "Akk",
            formula: "warten auf + Akk.",
            meaningKo: "~를/을 기다리다",
            example: "Ich warte auf den Bus.",
            exampleKo: "나는 버스를 기다린다."
        }]
    },
    // denken an + Akk.
    20096: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "an", case: "Akk",
            formula: "denken an + Akk.",
            meaningKo: "~를/을 생각하다",
            example: "Ich denke an dich.",
            exampleKo: "나는 너를 생각한다."
        }]
    },
    // sich freuen auf/über + Akk.
    20005: {
        type: "verb", isReflexive: true,
        patterns: [
            {
                prep: "auf", case: "Akk",
                formula: "sich freuen auf + Akk.",
                meaningKo: "~를/을 기대하다 (미래)",
                example: "Ich freue mich auf die Ferien.",
                exampleKo: "나는 방학을 기대한다."
            },
            {
                prep: "über", case: "Akk",
                formula: "sich freuen über + Akk.",
                meaningKo: "~에 대해 기뻐하다 (현재/과거)",
                example: "Ich freue mich über das Geschenk.",
                exampleKo: "나는 선물에 대해 기뻐한다."
            }
        ]
    },
    // sich freuen (DAY 16 duplicate)
    20491: {
        type: "verb", isReflexive: true,
        patterns: [
            {
                prep: "auf", case: "Akk",
                formula: "sich freuen auf + Akk.",
                meaningKo: "~를/을 기대하다 (미래)",
                example: "Wir freuen uns auf das Wochenende.",
                exampleKo: "우리는 주말을 기대한다."
            },
            {
                prep: "über", case: "Akk",
                formula: "sich freuen über + Akk.",
                meaningKo: "~에 대해 기뻐하다 (현재/과거)",
                example: "Sie freut sich über die gute Note.",
                exampleKo: "그녀는 좋은 성적에 기뻐한다."
            }
        ]
    },
    // sich interessieren für + Akk.
    20182: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "für", case: "Akk",
            formula: "sich interessieren für + Akk.",
            meaningKo: "~에 관심이 있다",
            example: "Er interessiert sich für Musik.",
            exampleKo: "그는 음악에 관심이 있다."
        }]
    },
    // teilnehmen an + Dat.
    20368: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "an", case: "Dat",
            formula: "teilnehmen an + Dat.",
            meaningKo: "~에 참가하다",
            example: "Ich nehme an dem Kurs teil.",
            exampleKo: "나는 그 강좌에 참가한다."
        }]
    },
    // sich erinnern an + Akk.
    20581: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "an", case: "Akk",
            formula: "sich erinnern an + Akk.",
            meaningKo: "~를/을 기억하다",
            example: "Ich erinnere mich an den Urlaub.",
            exampleKo: "나는 그 휴가를 기억한다."
        }]
    },
    // erinnern an + Akk. (B1)
    3608: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "an", case: "Akk",
            formula: "sich erinnern an + Akk.",
            meaningKo: "~를/을 기억하다 / ~에게 상기시키다",
            example: "Erinnerst du dich an mich?",
            exampleKo: "너 나를 기억하니?"
        }]
    },
    // hoffen auf + Akk.
    20164: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "auf", case: "Akk",
            formula: "hoffen auf + Akk.",
            meaningKo: "~를/을 바라다",
            example: "Wir hoffen auf gutes Wetter.",
            exampleKo: "우리는 좋은 날씨를 바란다."
        }]
    },
    // bitten um + Akk.
    20111: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "um", case: "Akk",
            formula: "bitten um + Akk.",
            meaningKo: "~를/을 부탁하다",
            example: "Ich bitte um Hilfe.",
            exampleKo: "나는 도움을 부탁한다."
        }]
    },
    // gehören zu + Dat.
    20460: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "zu", case: "Dat",
            formula: "gehören zu + Dat.",
            meaningKo: "~에 속하다",
            example: "Das gehört zu meinem Job.",
            exampleKo: "그것은 내 직업에 속한다."
        }]
    },
    // gehören zu + Dat. (B1)
    3614: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "zu", case: "Dat",
            formula: "gehören zu + Dat.",
            meaningKo: "~에 속하다, ~의 것이다",
            example: "Der Hund gehört zu der Familie.",
            exampleKo: "그 개는 그 가족에 속한다."
        }]
    },
    // beginnen mit + Dat.
    20091: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "beginnen mit + Dat.",
            meaningKo: "~로/으로 시작하다",
            example: "Wir beginnen mit der Arbeit.",
            exampleKo: "우리는 일을 시작한다."
        }]
    },
    // aufhören mit + Dat.
    20784: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "aufhören mit + Dat.",
            meaningKo: "~를/을 그만두다",
            example: "Hör auf mit dem Lärm!",
            exampleKo: "그 소음 좀 그만해!"
        }]
    },
    // gratulieren zu + Dat.
    20219: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "zu", case: "Dat",
            formula: "gratulieren zu + Dat.",
            meaningKo: "~를/을 축하하다",
            example: "Ich gratuliere dir zum Geburtstag.",
            exampleKo: "네 생일을 축하해."
        }]
    },
    // antworten auf + Akk.
    20218: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "auf", case: "Akk",
            formula: "antworten auf + Akk.",
            meaningKo: "~에 대답하다",
            example: "Er antwortet auf die Frage.",
            exampleKo: "그는 질문에 대답한다."
        }]
    },
    // sich vorbereiten auf + Akk.
    20371: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "auf", case: "Akk",
            formula: "sich vorbereiten auf + Akk.",
            meaningKo: "~를/을 준비하다",
            example: "Ich bereite mich auf die Prüfung vor.",
            exampleKo: "나는 시험을 준비한다."
        }]
    },
    // sich erholen von + Dat.
    20373: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "von", case: "Dat",
            formula: "sich erholen von + Dat.",
            meaningKo: "~에서 회복하다/쉬다",
            example: "Er erholt sich von der Krankheit.",
            exampleKo: "그는 병에서 회복 중이다."
        }]
    },
    // träumen von + Dat.
    20456: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "von", case: "Dat",
            formula: "träumen von + Dat.",
            meaningKo: "~에 대해 꿈꾸다",
            example: "Ich träume von einer Reise.",
            exampleKo: "나는 여행을 꿈꾼다."
        }]
    },
    // glauben an + Akk.
    20313: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "an", case: "Akk",
            formula: "glauben an + Akk.",
            meaningKo: "~를/을 믿다",
            example: "Ich glaube an dich.",
            exampleKo: "나는 너를 믿는다."
        }]
    },
    // diskutieren über + Akk.
    20728: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "über", case: "Akk",
            formula: "diskutieren über + Akk.",
            meaningKo: "~에 대해 토론하다",
            example: "Wir diskutieren über das Thema.",
            exampleKo: "우리는 그 주제에 대해 토론한다."
        }]
    },
    // suchen nach + Dat.
    20158: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "nach", case: "Dat",
            formula: "suchen nach + Dat.",
            meaningKo: "~를/을 찾다",
            example: "Ich suche nach meinem Schlüssel.",
            exampleKo: "나는 내 열쇠를 찾고 있다."
        }]
    },
    // fragen nach + Dat.
    20165: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "nach", case: "Dat",
            formula: "fragen nach + Dat.",
            meaningKo: "~에 대해 묻다",
            example: "Er fragt nach dem Weg.",
            exampleKo: "그는 길을 물어본다."
        }]
    },
    // sprechen über + Akk.
    20004: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "über", case: "Akk",
            formula: "sprechen über + Akk.",
            meaningKo: "~에 대해 말하다",
            example: "Wir sprechen über den Film.",
            exampleKo: "우리는 그 영화에 대해 말한다."
        }]
    },
    // sich bewerben um + Akk.
    20693: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "um", case: "Akk",
            formula: "sich bewerben um + Akk.",
            meaningKo: "~에 지원하다",
            example: "Sie bewirbt sich um die Stelle.",
            exampleKo: "그녀는 그 자리에 지원한다."
        }]
    },
    // sich erkundigen nach + Dat.
    20811: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "nach", case: "Dat",
            formula: "sich erkundigen nach + Dat.",
            meaningKo: "~에 대해 문의하다",
            example: "Er erkundigt sich nach dem Preis.",
            exampleKo: "그는 가격에 대해 문의한다."
        }]
    },
    // nachdenken über + Akk.
    20723: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "über", case: "Akk",
            formula: "nachdenken über + Akk.",
            meaningKo: "~에 대해 곰곰이 생각하다",
            example: "Ich denke über das Problem nach.",
            exampleKo: "나는 그 문제에 대해 곰곰이 생각한다."
        }]
    },
    // aufpassen auf + Akk.
    20485: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "auf", case: "Akk",
            formula: "aufpassen auf + Akk.",
            meaningKo: "~를/을 돌보다/주의하다",
            example: "Pass auf die Kinder auf!",
            exampleKo: "아이들을 돌봐!"
        }]
    },
    // sich verabreden mit + Dat.
    20638: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "sich verabreden mit + Dat.",
            meaningKo: "~와/과 약속하다",
            example: "Ich verabrede mich mit meiner Freundin.",
            exampleKo: "나는 여자친구와 약속한다."
        }]
    },
    // sich befreien von + Dat.
    20730: {
        type: "verb", isReflexive: true,
        patterns: [{
            prep: "von", case: "Dat",
            formula: "sich befreien von + Dat.",
            meaningKo: "~에서 해방되다",
            example: "Er befreit sich von der Angst.",
            exampleKo: "그는 두려움에서 해방된다."
        }]
    },
    // sorgen für + Akk.
    20646: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "für", case: "Akk",
            formula: "sorgen für + Akk.",
            meaningKo: "~를/을 돌보다/~를 위해 신경쓰다",
            example: "Sie sorgt für ihre Kinder.",
            exampleKo: "그녀는 아이들을 돌본다."
        }]
    },
    // reden über + Akk.
    20451: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "über", case: "Akk",
            formula: "reden über + Akk.",
            meaningKo: "~에 대해 이야기하다",
            example: "Wir reden über die Zukunft.",
            exampleKo: "우리는 미래에 대해 이야기한다."
        }]
    },
    // telefonieren mit + Dat.
    20191: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "telefonieren mit + Dat.",
            meaningKo: "~와/과 전화하다",
            example: "Ich telefoniere mit meiner Mutter.",
            exampleKo: "나는 어머니와 전화한다."
        }]
    },
    // vergleichen mit + Dat.
    20153: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "vergleichen mit + Dat.",
            meaningKo: "~와/과 비교하다",
            example: "Vergleich die Preise mit dem Angebot.",
            exampleKo: "가격을 그 제안과 비교해 봐."
        }]
    },
    // vergleichen mit + Dat. (B1)
    3606: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "vergleichen mit + Dat.",
            meaningKo: "~와/과 비교하다",
            example: "Man kann die zwei Städte nicht vergleichen.",
            exampleKo: "두 도시를 비교할 수 없다."
        }]
    },
    // erzählen von + Dat.
    20134: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "von", case: "Dat",
            formula: "erzählen von + Dat.",
            meaningKo: "~에 대해 이야기하다",
            example: "Er erzählt von seiner Reise.",
            exampleKo: "그는 자신의 여행에 대해 이야기한다."
        }]
    },
    // danken für + Akk.
    20033: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "für", case: "Akk",
            formula: "danken für + Akk.",
            meaningKo: "~에 대해 감사하다",
            example: "Ich danke dir für die Hilfe.",
            exampleKo: "도움에 감사해."
        }]
    },
    // helfen bei + Dat.
    20100: {
        type: "verb", isReflexive: false,
        patterns: [{
            prep: "bei", case: "Dat",
            formula: "helfen bei + Dat.",
            meaningKo: "~를/을 도와주다",
            example: "Kannst du mir bei den Hausaufgaben helfen?",
            exampleKo: "숙제 좀 도와줄 수 있어?"
        }]
    },

    // ---------- 형용사 + 전치사 (Adjektiv + Präposition) ----------

    // abhängig von + Dat.
    3708: {
        type: "adjective", isReflexive: false,
        patterns: [{
            prep: "von", case: "Dat",
            formula: "abhängig von + Dat.",
            meaningKo: "~에 의존하는/~에 달린",
            example: "Das ist abhängig vom Wetter.",
            exampleKo: "그것은 날씨에 달려 있다."
        }]
    },
    // zufrieden mit + Dat.
    20597: {
        type: "adjective", isReflexive: false,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "zufrieden mit + Dat.",
            meaningKo: "~에 만족하는",
            example: "Ich bin zufrieden mit dem Ergebnis.",
            exampleKo: "나는 결과에 만족한다."
        }]
    },
    // neugierig auf + Akk.
    20852: {
        type: "adjective", isReflexive: false,
        patterns: [{
            prep: "auf", case: "Akk",
            formula: "neugierig auf + Akk.",
            meaningKo: "~에 대해 호기심 있는",
            example: "Ich bin neugierig auf das neue Buch.",
            exampleKo: "나는 새 책이 궁금하다."
        }]
    },
    // einverstanden mit + Dat.
    20747: {
        type: "adjective", isReflexive: false,
        patterns: [{
            prep: "mit", case: "Dat",
            formula: "einverstanden mit + Dat.",
            meaningKo: "~에 동의하는",
            example: "Bist du einverstanden mit dem Plan?",
            exampleKo: "너 그 계획에 동의해?"
        }]
    },

    // ---------- 순수 재귀동사 (Reflexivverb) ----------

    20108: { type: "reflexive", isReflexive: true, patterns: [] },  // sich duschen
    20168: { type: "reflexive", isReflexive: true, patterns: [] },  // sich schminken
    20184: { type: "reflexive", isReflexive: true, patterns: [] },  // sich bewegen
    20482: { type: "reflexive", isReflexive: true, patterns: [] },  // sich beeilen
    20309: { type: "reflexive", isReflexive: true, patterns: [] },  // sich erkälten
    20308: { type: "reflexive", isReflexive: true, patterns: [] },  // sich fühlen
    20374: { type: "reflexive", isReflexive: true, patterns: [] },  // sich ausruhen
    20610: { type: "reflexive", isReflexive: true, patterns: [] },  // sich ausziehen
    20691: { type: "reflexive", isReflexive: true, patterns: [] },  // sich verspäten
    20640: { type: "reflexive", isReflexive: true, patterns: [] },  // sich verletzen
    20812: { type: "reflexive", isReflexive: true, patterns: [] },  // sich verwählen
    20783: { type: "reflexive", isReflexive: true, patterns: [] },  // sich sonnen
    20014: { type: "reflexive", isReflexive: true, patterns: [] },  // sich vorstellen
};
