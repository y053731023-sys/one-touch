// 資料定義
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = [
    { name: 'spades', symbol: '♠', colorClass: 'black-suit', display: '黑桃' },
    { name: 'hearts', symbol: '♥', colorClass: 'red-suit', display: '紅心' },
    { name: 'clubs', symbol: '♣', colorClass: 'black-suit', display: '梅花' },
    { name: 'diamonds', symbol: '♦', colorClass: 'red-suit', display: '方塊' }
];

const pokerDeck = [];
for (let suit of suits) {
    for (let val of values) {
        pokerDeck.push({ type: 'poker', value: val, suit: suit, display: `${suit.display}${val}` });
    }
}

const flagData = [
    { name: 'Taiwan', code: 'tw', url: 'https://flagcdn.com/w320/tw.png', display: '台灣' },
    { name: 'Japan', code: 'jp', url: 'https://flagcdn.com/w320/jp.png', display: '日本' },
    { name: 'USA', code: 'us', url: 'https://flagcdn.com/w320/us.png', display: '美國' },
    { name: 'UK', code: 'gb', url: 'https://flagcdn.com/w320/gb.png', display: '英國' },
    { name: 'South Korea', code: 'kr', url: 'https://flagcdn.com/w320/kr.png', display: '韓國' },
    { name: 'France', code: 'fr', url: 'https://flagcdn.com/w320/fr.png', display: '法國' },
    { name: 'Germany', code: 'de', url: 'https://flagcdn.com/w320/de.png', display: '德國' },
    { name: 'Italy', code: 'it', url: 'https://flagcdn.com/w320/it.png', display: '義大利' },
    { name: 'Canada', code: 'ca', url: 'https://flagcdn.com/w320/ca.png', display: '加拿大' },
    { name: 'Australia', code: 'au', url: 'https://flagcdn.com/w320/au.png', display: '澳洲' },
    { name: 'Brazil', code: 'br', url: 'https://flagcdn.com/w320/br.png', display: '巴西' },
    { name: 'Spain', code: 'es', url: 'https://flagcdn.com/w320/es.png', display: '西班牙' },
    { name: 'Switzerland', code: 'ch', url: 'https://flagcdn.com/w320/ch.png', display: '瑞士' },
    { name: 'Sweden', code: 'se', url: 'https://flagcdn.com/w320/se.png', display: '瑞典' },
    { name: 'New Zealand', code: 'nz', url: 'https://flagcdn.com/w320/nz.png', display: '紐西蘭' },
    { name: 'India', code: 'in', url: 'https://flagcdn.com/w320/in.png', display: '印度' },
    { name: 'Thailand', code: 'th', url: 'https://flagcdn.com/w320/th.png', display: '泰國' },
    { name: 'Singapore', code: 'sg', url: 'https://flagcdn.com/w320/sg.png', display: '新加坡' },
    { name: 'Malaysia', code: 'my', url: 'https://flagcdn.com/w320/my.png', display: '馬來西亞' },
    { name: 'Vietnam', code: 'vn', url: 'https://flagcdn.com/w320/vn.png', display: '越南' },
    { name: 'Argentina', code: 'ar', url: 'https://flagcdn.com/w320/ar.png', display: '阿根廷' },
    { name: 'Mexico', code: 'mx', url: 'https://flagcdn.com/w320/mx.png', display: '墨西哥' },
    { name: 'Netherlands', code: 'nl', url: 'https://flagcdn.com/w320/nl.png', display: '荷蘭' },
    { name: 'South Africa', code: 'za', url: 'https://flagcdn.com/w320/za.png', display: '南非' },
    { name: 'Egypt', code: 'eg', url: 'https://flagcdn.com/w320/eg.png', display: '埃及' }
];
const flagDeck = flagData.map(f => ({ type: 'flag', ...f }));

const landmarkData = [
    { name: 'Taipei 101', url: '圖片/台北101.webp', display: '台北 101' },
    { name: 'Big Ben', url: '圖片/大笨鐘.webp', display: '大笨鐘' },
    { name: 'Mount Fuji', url: '圖片/富士山.webp', display: '富士山' },
    { name: 'Eiffel Tower', url: '圖片/巴黎鐵塔.webp', display: '巴黎鐵塔' },
    { name: 'Moai', url: '圖片/復活節島石像.webp', display: '復活節島石像' },
    { name: 'Christ the Redeemer', url: '圖片/救世基督像.webp', display: '救世基督像' },
    { name: 'Burj Al Arab', url: '圖片/杜拜帆船飯店.webp', display: '杜拜帆船飯店' },
    { name: 'Leaning Tower of Pisa', url: '圖片/比薩斜塔.webp', display: '比薩斜塔' },
    { name: 'Uluru', url: '圖片/烏魯魯艾爾斯岩.webp', display: '烏魯魯艾爾斯岩' },
    { name: 'Colosseum', url: '圖片/羅馬競技場.webp', display: '羅馬競技場' },
    { name: 'Hagia Sophia', url: '圖片/聖索菲亞大教堂.webp', display: '聖索菲亞大教堂' },
    { name: 'Statue of Liberty', url: '圖片/自由女神.webp', display: '自由女神像' },
    { name: 'Great Wall of China', url: '圖片/萬里長城.webp', display: '萬里長城' },
    { name: 'Pyramids of Giza', url: '圖片/金字塔.webp', display: '金字塔' },
    { name: 'Machu Picchu', url: '圖片/馬丘比丘.webp', display: '馬丘比丘' },
    { name: 'Maldives', url: '圖片/馬爾地夫.webp', display: '馬爾地夫' },
    { name: 'Iceland Aurora', url: '圖片/冰島極光.webp', display: '冰島極光' },
    { name: 'Angkor Wat', url: '圖片/吳哥窟.webp', display: '吳哥窟' },
    { name: 'Chichen Itza', url: '圖片/墨西哥瑪雅古跡.webp', display: '墨西哥瑪雅古蹟' },
    { name: 'Great Barrier Reef', url: '圖片/大堡礁.webp', display: '大堡礁' },
    { name: 'Stonehenge', url: '圖片/巨石陣.webp', display: '巨石陣' },
    { name: 'Victoria Falls', url: '圖片/维多利亞瀑布.webp', display: '維多利亞瀑布' },
    { name: 'Grand Canyon', url: '圖片/美國大峽谷.webp', display: '美國大峽谷' },
    { name: 'Mount Everest', url: '圖片/聖母峰.webp', display: '聖母峰' },
    { name: 'Sydney Opera House', url: '圖片/雪梨歌劇院.webp', display: '雪梨歌劇院' }
];
const landmarkDeck = landmarkData.map(l => ({ type: 'landmark', ...l }));

const beautyData = [
    { name: '20歲／黑髮／長直髮／豐滿胸型／運動服', url: '美女圖片/20歲／黑髮／長直髮／豐滿胸型／運動服.webp', display: '20歲／黑髮／長直髮／豐滿胸型／運動服' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_02_07', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_02_07.webp', display: 'ChatGPT Image 2026年9月14日 上午10_02_07' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_03_38', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_03_38.webp', display: 'ChatGPT Image 2026年9月14日 上午10_03_38' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_14_01', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_14_01.webp', display: 'ChatGPT Image 2026年9月14日 上午10_14_01' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_22_45', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_22_45.webp', display: 'ChatGPT Image 2026年9月14日 上午10_22_45' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_26_52', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_26_52.webp', display: 'ChatGPT Image 2026年9月14日 上午10_26_52' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_32_33', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_32_33.webp', display: 'ChatGPT Image 2026年9月14日 上午10_32_33' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_35_17', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_35_17.webp', display: 'ChatGPT Image 2026年9月14日 上午10_35_17' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_37_58', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_37_58.webp', display: 'ChatGPT Image 2026年9月14日 上午10_37_58' },
    { name: 'ChatGPT Image 2026年9月14日 上午10_41_01', url: '美女圖片/ChatGPT Image 2026年9月14日 上午10_41_01.webp', display: 'ChatGPT Image 2026年9月14日 上午10_41_01' },
    { name: 'ChatGPT Image 2026年9月14日 上午11_02_52', url: '美女圖片/ChatGPT Image 2026年9月14日 上午11_02_52.webp', display: 'ChatGPT Image 2026年9月14日 上午11_02_52' },
    { name: 'ChatGPT Image 2026年9月14日 上午11_05_22', url: '美女圖片/ChatGPT Image 2026年9月14日 上午11_05_22.webp', display: 'ChatGPT Image 2026年9月14日 上午11_05_22' },
    { name: 'ChatGPT Image 2026年9月14日 上午11_07_04', url: '美女圖片/ChatGPT Image 2026年9月14日 上午11_07_04.webp', display: 'ChatGPT Image 2026年9月14日 上午11_07_04' },
    { name: 'ChatGPT Image 2026年9月14日 下午05_43_06', url: '美女圖片/ChatGPT Image 2026年9月14日 下午05_43_06.webp', display: 'ChatGPT Image 2026年9月14日 下午05_43_06' },
    { name: 'ChatGPT Image 2026年9月14日 下午05_45_19', url: '美女圖片/ChatGPT Image 2026年9月14日 下午05_45_19.webp', display: 'ChatGPT Image 2026年9月14日 下午05_45_19' },
    { name: 'ChatGPT Image 2026年9月14日 下午05_51_07', url: '美女圖片/ChatGPT Image 2026年9月14日 下午05_51_07.webp', display: 'ChatGPT Image 2026年9月14日 下午05_51_07' },
    { name: 'ChatGPT Image 2026年9月14日 下午05_56_16', url: '美女圖片/ChatGPT Image 2026年9月14日 下午05_56_16.webp', display: 'ChatGPT Image 2026年9月14日 下午05_56_16' },
    { name: 'ChatGPT Image 2026年9月14日 下午09_34_30', url: '美女圖片/ChatGPT Image 2026年9月14日 下午09_34_30.webp', display: 'ChatGPT Image 2026年9月14日 下午09_34_30' },
    { name: 'ChatGPT Image 2026年9月14日 下午09_42_30', url: '美女圖片/ChatGPT Image 2026年9月14日 下午09_42_30.webp', display: 'ChatGPT Image 2026年9月14日 下午09_42_30' },
    { name: 'Codex 圖像 2026年9月15日 上午11_08_40', url: '美女圖片/Codex 圖像 2026年9月15日 上午11_08_40.webp', display: 'Codex 圖像 2026年9月15日 上午11_08_40' },
    { name: 'Codex 圖像 2026年9月15日 下午06_51_27', url: '美女圖片/Codex 圖像 2026年9月15日 下午06_51_27.webp', display: 'Codex 圖像 2026年9月15日 下午06_51_27' },
    { name: 'Codex 圖像 2026年9月15日 下午06_55_58', url: '美女圖片/Codex 圖像 2026年9月15日 下午06_55_58.webp', display: 'Codex 圖像 2026年9月15日 下午06_55_58' },
    { name: 'Codex 圖像 2026年9月15日 下午07_50_55', url: '美女圖片/Codex 圖像 2026年9月15日 下午07_50_55.webp', display: 'Codex 圖像 2026年9月15日 下午07_50_55' },
    { name: 'Codex 圖像 2026年9月15日 下午07_53_03', url: '美女圖片/Codex 圖像 2026年9月15日 下午07_53_03.webp', display: 'Codex 圖像 2026年9月15日 下午07_53_03' },
    { name: 'Codex 圖像 2026年9月15日 下午08_55_55', url: '美女圖片/Codex 圖像 2026年9月15日 下午08_55_55.webp', display: 'Codex 圖像 2026年9月15日 下午08_55_55' },
    { name: 'Codex 圖像 2026年9月15日 下午09_17_13', url: '美女圖片/Codex 圖像 2026年9月15日 下午09_17_13.webp', display: 'Codex 圖像 2026年9月15日 下午09_17_13' },
    { name: 'Codex 圖像 2026年9月15日 下午10_29_39', url: '美女圖片/Codex 圖像 2026年9月15日 下午10_29_39.webp', display: 'Codex 圖像 2026年9月15日 下午10_29_39' },
    { name: 'Codex 圖像 2026年9月15日 下午10_45_22', url: '美女圖片/Codex 圖像 2026年9月15日 下午10_45_22.webp', display: 'Codex 圖像 2026年9月15日 下午10_45_22' },
    { name: 'Codex 圖像 2026年9月15日 下午10_48_26', url: '美女圖片/Codex 圖像 2026年9月15日 下午10_48_26.webp', display: 'Codex 圖像 2026年9月15日 下午10_48_26' },
    { name: 'Codex 圖像 2026年9月16日 上午10_31_24', url: '美女圖片/Codex 圖像 2026年9月16日 上午10_31_24.webp', display: 'Codex 圖像 2026年9月16日 上午10_31_24' },
    { name: 'Codex 圖像 2026年9月16日 上午10_41_50', url: '美女圖片/Codex 圖像 2026年9月16日 上午10_41_50.webp', display: 'Codex 圖像 2026年9月16日 上午10_41_50' },
    { name: 'Codex 圖像 2026年9月16日 上午11_11_35', url: '美女圖片/Codex 圖像 2026年9月16日 上午11_11_35.webp', display: 'Codex 圖像 2026年9月16日 上午11_11_35' },
    { name: 'Codex 圖像 2026年9月16日 上午11_18_07', url: '美女圖片/Codex 圖像 2026年9月16日 上午11_18_07.webp', display: 'Codex 圖像 2026年9月16日 上午11_18_07' },
    { name: 'Codex 圖像 2026年9月16日 下午06_43_09', url: '美女圖片/Codex 圖像 2026年9月16日 下午06_43_09.webp', display: 'Codex 圖像 2026年9月16日 下午06_43_09' },
    { name: 'Codex 圖像 2026年9月16日 下午11_09_40', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_09_40.webp', display: 'Codex 圖像 2026年9月16日 下午11_09_40' },
    { name: 'Codex 圖像 2026年9月16日 下午11_09_44', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_09_44.webp', display: 'Codex 圖像 2026年9月16日 下午11_09_44' },
    { name: 'Codex 圖像 2026年9月16日 下午11_15_26', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_15_26.webp', display: 'Codex 圖像 2026年9月16日 下午11_15_26' },
    { name: 'Codex 圖像 2026年9月16日 下午11_21_39', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_21_39.webp', display: 'Codex 圖像 2026年9月16日 下午11_21_39' },
    { name: 'Codex 圖像 2026年9月16日 下午11_24_07', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_24_07.webp', display: 'Codex 圖像 2026年9月16日 下午11_24_07' },
    { name: 'Codex 圖像 2026年9月16日 下午11_25_54', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_25_54.webp', display: 'Codex 圖像 2026年9月16日 下午11_25_54' },
    { name: 'Codex 圖像 2026年9月16日 下午11_31_01', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_31_01.webp', display: 'Codex 圖像 2026年9月16日 下午11_31_01' },
    { name: 'Codex 圖像 2026年9月16日 下午11_32_46', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_32_46.webp', display: 'Codex 圖像 2026年9月16日 下午11_32_46' },
    { name: 'Codex 圖像 2026年9月16日 下午11_34_03', url: '美女圖片/Codex 圖像 2026年9月16日 下午11_34_03.webp', display: 'Codex 圖像 2026年9月16日 下午11_34_03' },
    { name: 'Codex 圖像 2026年9月16日 下午12_17_55', url: '美女圖片/Codex 圖像 2026年9月16日 下午12_17_55.webp', display: 'Codex 圖像 2026年9月16日 下午12_17_55' },
    { name: 'Codex 圖像 2026年9月16日 下午12_51_23', url: '美女圖片/Codex 圖像 2026年9月16日 下午12_51_23.webp', display: 'Codex 圖像 2026年9月16日 下午12_51_23' },
    { name: 'Codex 圖像 2026年9月16日 下午12_54_43', url: '美女圖片/Codex 圖像 2026年9月16日 下午12_54_43.webp', display: 'Codex 圖像 2026年9月16日 下午12_54_43' },
    { name: 'e22e7a60-aa46-45b4-b01e-672790c0b5c0', url: '美女圖片/e22e7a60-aa46-45b4-b01e-672790c0b5c0.webp', display: 'e22e7a60-aa46-45b4-b01e-672790c0b5c0' },
    { name: '短髮x直髮x亞洲人x金髮x平胸x休閒穿著', url: '美女圖片/短髮x直髮x亞洲人x金髮x平胸x休閒穿著.webp', display: '短髮x直髮x亞洲人x金髮x平胸x休閒穿著' },
    { name: '短髮x直髮x亞洲人x金髮x平胸x比基尼', url: '美女圖片/短髮x直髮x亞洲人x金髮x平胸x比基尼.webp', display: '短髮x直髮x亞洲人x金髮x平胸x比基尼' },
    { name: '短髮x直髮x亞洲人x金髮x豐滿胸型x休閒穿著', url: '美女圖片/短髮x直髮x亞洲人x金髮x豐滿胸型x休閒穿著.webp', display: '短髮x直髮x亞洲人x金髮x豐滿胸型x休閒穿著' },
    { name: '短髮x直髮x亞洲人x黑髮x平胸x休閒穿著', url: '美女圖片/短髮x直髮x亞洲人x黑髮x平胸x休閒穿著.webp', display: '短髮x直髮x亞洲人x黑髮x平胸x休閒穿著' },
    { name: '短髮x直髮x亞洲人x黑髮x平胸x比基尼', url: '美女圖片/短髮x直髮x亞洲人x黑髮x平胸x比基尼.webp', display: '短髮x直髮x亞洲人x黑髮x平胸x比基尼' },
    { name: '短髮x直髮x歐美人x金髮x平胸x休閒穿著', url: '美女圖片/短髮x直髮x歐美人x金髮x平胸x休閒穿著.webp', display: '短髮x直髮x歐美人x金髮x平胸x休閒穿著' },
    { name: '短髮x直髮x歐美人x金髮x平胸x比基尼', url: '美女圖片/短髮x直髮x歐美人x金髮x平胸x比基尼.webp', display: '短髮x直髮x歐美人x金髮x平胸x比基尼' },
    { name: '短髮x直髮x歐美人x黑髮x平胸x休閒穿著', url: '美女圖片/短髮x直髮x歐美人x黑髮x平胸x休閒穿著.webp', display: '短髮x直髮x歐美人x黑髮x平胸x休閒穿著' },
    { name: '短髮x直髮x歐美人×金髮×豐滿胸型×比基尼', url: '美女圖片/短髮x直髮x歐美人×金髮×豐滿胸型×比基尼.webp', display: '短髮x直髮x歐美人×金髮×豐滿胸型×比基尼' },
    { name: '短髮x直髮x歐美人×黑髮×豐滿胸型×比基尼', url: '美女圖片/短髮x直髮x歐美人×黑髮×豐滿胸型×比基尼.webp', display: '短髮x直髮x歐美人×黑髮×豐滿胸型×比基尼' },
    { name: '科技風', url: '美女圖片/科技風.webp', display: '科技風' },
    { name: '長髮x捲髮x亞洲人x黑髮x平胸x比基尼', url: '美女圖片/長髮x捲髮x亞洲人x黑髮x平胸x比基尼.webp', display: '長髮x捲髮x亞洲人x黑髮x平胸x比基尼' },
    { name: '長髮x捲髮x歐美人x黑髮x平胸x休閒穿著', url: '美女圖片/長髮x捲髮x歐美人x黑髮x平胸x休閒穿著.webp', display: '長髮x捲髮x歐美人x黑髮x平胸x休閒穿著' },
    { name: '長髮x直髮x亞洲人 × 黑髮 × 豐滿胸型 × 比基尼', url: '美女圖片/長髮x直髮x亞洲人 × 黑髮 × 豐滿胸型 × 比基尼.webp', display: '長髮x直髮x亞洲人 × 黑髮 × 豐滿胸型 × 比基尼' },
    { name: '長髮x直髮x亞洲人x金髮x平胸x休閒穿著', url: '美女圖片/長髮x直髮x亞洲人x金髮x平胸x休閒穿著.webp', display: '長髮x直髮x亞洲人x金髮x平胸x休閒穿著' },
    { name: '長髮x直髮x亞洲人x金髮x平胸x比基尼', url: '美女圖片/長髮x直髮x亞洲人x金髮x平胸x比基尼.webp', display: '長髮x直髮x亞洲人x金髮x平胸x比基尼' },
    { name: '長髮x直髮x亞洲人x黑髮x平胸x比基尼', url: '美女圖片/長髮x直髮x亞洲人x黑髮x平胸x比基尼.webp', display: '長髮x直髮x亞洲人x黑髮x平胸x比基尼' },
    { name: '長髮x直髮x亞洲人×金髮×豐滿胸型×比基尼', url: '美女圖片/長髮x直髮x亞洲人×金髮×豐滿胸型×比基尼.webp', display: '長髮x直髮x亞洲人×金髮×豐滿胸型×比基尼' },
    { name: '長髮x直髮x歐美人x金髮x平胸x比基尼', url: '美女圖片/長髮x直髮x歐美人x金髮x平胸x比基尼.webp', display: '長髮x直髮x歐美人x金髮x平胸x比基尼' },
    { name: '長髮x直髮x歐美人x黑髮x平胸x比基尼', url: '美女圖片/長髮x直髮x歐美人x黑髮x平胸x比基尼.webp', display: '長髮x直髮x歐美人x黑髮x平胸x比基尼' },
    { name: '長髮x直髮x歐美人×金髮×豐滿胸型×比基尼', url: '美女圖片/長髮x直髮x歐美人×金髮×豐滿胸型×比基尼.webp', display: '長髮x直髮x歐美人×金髮×豐滿胸型×比基尼' }
];
const beautyDeck = beautyData.map(b => ({ type: 'beauty', ...b }));

let customData = [];
let customDeck = [];

let deck = [];

// DOM 元素
const carousel = document.getElementById('carousel');

// 狀態
let secretChosenCard = null;
let viewTimer = null;
let currentlyVisibleCard = null;
let currentlyVisibleCardElement = null;
let isDraggingCarousel = false;
let hasDragged = false;
let isRecordingActive = false;
let hasRecorded = false;
let mechanism2Timer = null;
let mechanism2Ready = false;
let swipeSequence = 0;
let firstSwipeDirection = null;
let touchStartX = 0;
let touchEndX = 0;
let touchStartIndex = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            currentlyVisibleCardElement = entry.target;
            const index = parseInt(entry.target.dataset.index);
            currentlyVisibleCard = deck[index];
            
            clearTimeout(viewTimer);
            if (isRecordingActive && !hasRecorded) {
                viewTimer = setTimeout(() => {
                    secretChosenCard = currentlyVisibleCard;
                    hasRecorded = true;
                    isRecordingActive = false;
                    if (navigator.vibrate) navigator.vibrate([10, 50, 10]);
                    console.log("背景紀錄觀眾的牌:", secretChosenCard.display);
                }, 5000);
            }
            
            // 第二機制：觀眾打亂後停在某張牌3秒
            clearTimeout(mechanism2Timer);
            if (hasRecorded && !mechanism2Ready && !isRecordingActive && secretChosenCard) {
                mechanism2Timer = setTimeout(() => {
                    mechanism2Ready = true;
                    swipeSequence = 0;
                    firstSwipeDirection = null;
                    if (navigator.vibrate) navigator.vibrate(20);
                    console.log("第二機制已啟動，等待首次滑動");
                }, 3000);
            }
        } else {
            if (entry.target === currentlyVisibleCardElement) {
                clearTimeout(viewTimer);
                clearTimeout(mechanism2Timer);
            }
        }
    });
}, { threshold: 0.6 });

// 綁定隱藏觸發區事件
const secretTrigger = document.getElementById('secret-trigger');
if (secretTrigger) {
    secretTrigger.addEventListener('click', (e) => {
        e.stopPropagation(); // 避免觸發到其他事件
        isRecordingActive = true;
        hasRecorded = false;
        secretChosenCard = null;
        clearTimeout(mechanism2Timer);
        mechanism2Ready = false;
        swipeSequence = 0;
        firstSwipeDirection = null;
        if (navigator.vibrate) navigator.vibrate(20); // 短震動提示開啟紀錄
        console.log("已開啟背景紀錄模式");
        
        // 如果當下已經有牌在畫面上，重新啟動計時
        clearTimeout(viewTimer);
        if (currentlyVisibleCard) {
            viewTimer = setTimeout(() => {
                secretChosenCard = currentlyVisibleCard;
                hasRecorded = true;
                isRecordingActive = false;
                if (navigator.vibrate) navigator.vibrate([10, 50, 10]);
                console.log("背景紀錄觀眾的牌:", secretChosenCard.display);
            }, 5000);
        }
    });
}

let chosenCard = null;
let wrongCard = null;
let longPressTimer = null;
let isModalOpen = false;
let isMouseDown = false; // 用於桌機滑鼠長按判定

// 1. 初始化 Carousel
function initCarousel() {
    deck.forEach((card, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.dataset.index = index;
        
        const cardEl = document.createElement('div');
        cardEl.className = 'card flipped';
        cardEl.style.transform = "rotateY(0deg)";
        
        const front = document.createElement('div');
        renderCardFront(front, card);
        
        cardEl.appendChild(front);
        item.appendChild(cardEl);
        
        item.addEventListener('click', (e) => {
            if (hasDragged) return;
            if (secretChosenCard && currentlyVisibleCard && currentlyVisibleCard !== secretChosenCard) {
                if (navigator.vibrate) navigator.vibrate([50]);
                cardEl.classList.add('magic-change');
                
                const targetSecretCard = secretChosenCard;
                const clickedCardIndex = parseInt(item.dataset.index);
                const originalCard = deck[clickedCardIndex];

                setTimeout(() => {
                    renderCardFront(front, targetSecretCard);
                    
                    // 找到原本觀眾那張牌的 DOM，把它變成這張點錯的牌，避免出現兩張一樣的牌
                    const secretIndex = deck.findIndex(c => c === targetSecretCard);
                    if (secretIndex !== -1) {
                        const originalSecretDom = carousel.children[secretIndex].querySelector('.card-front');
                        if (originalSecretDom) {
                            renderCardFront(originalSecretDom, originalCard);
                        }
                        // 更新陣列資料
                        deck[clickedCardIndex] = targetSecretCard;
                        deck[secretIndex] = originalCard;
                    }

                    // 變牌後清除紀錄，結束所有機制
                    secretChosenCard = null;
                    currentlyVisibleCard = targetSecretCard;
                }, 300);
            }
        });

        observer.observe(item);
        carousel.appendChild(item);
    });
}

// 實作桌機拖曳滾動 (Drag to scroll)
let startScrollX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDraggingCarousel = true;
    hasDragged = false;
    startScrollX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    touchStartX = e.pageX;
    if (currentlyVisibleCardElement) {
        touchStartIndex = parseInt(currentlyVisibleCardElement.dataset.index);
    }
});
carousel.addEventListener('mouseleave', () => {
    isDraggingCarousel = false;
});
carousel.addEventListener('mouseup', (e) => {
    isDraggingCarousel = false;
    touchEndX = e.pageX;
    handleSwipe(touchStartX, touchEndX, touchStartIndex);
});
carousel.addEventListener('mousemove', (e) => {
    if (!isDraggingCarousel) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    if (Math.abs(x - startScrollX) > 5) hasDragged = true;
    const walk = (x - startScrollX) * 2; // 滾動速度
    carousel.scrollLeft = scrollLeft - walk;
});

// 手機滑動支援 (Touch events)
carousel.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].clientX;
    if (currentlyVisibleCardElement) {
        touchStartIndex = parseInt(currentlyVisibleCardElement.dataset.index);
    }
}, { passive: true });

carousel.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe(touchStartX, touchEndX, touchStartIndex);
});

function handleSwipe(startX, endX, startIndex) {
    if (!mechanism2Ready) return;
    
    let diff = endX - startX;
    let threshold = 30; // 30px swipe threshold
    
    let swipeDirection = null;
    if (diff > threshold) swipeDirection = 'right';
    else if (diff < -threshold) swipeDirection = 'left';
    
    if (!swipeDirection) return;
    
    if (swipeSequence === 0) {
        firstSwipeDirection = swipeDirection;
        swipeSequence = 1;
        console.log(`第一段滑動 (${swipeDirection}) 觸發，等待反向滑動`);
    } else if (swipeSequence === 1) {
        if (swipeDirection !== firstSwipeDirection) {
            swipeSequence = 2;
            console.log(`反向滑動 (${swipeDirection}) 觸發，啟動變牌`);
            executeMechanism2(startIndex, swipeDirection);
        } else {
            console.log(`同向滑動 (${swipeDirection})，繼續等待反向滑動`);
        }
    }
}

function executeMechanism2(startIndex, finalSwipeDirection) {
    let targetIndex = (finalSwipeDirection === 'left') ? startIndex + 4 : startIndex - 4;
    
    if (targetIndex >= deck.length) {
        targetIndex = deck.length - 1;
    } else if (targetIndex < 0) {
        targetIndex = 0;
    }
    
    let targetCardEl = carousel.children[targetIndex];
    if (targetCardEl && secretChosenCard) {
        let front = targetCardEl.querySelector('.card-front');
        let secretIndex = deck.findIndex(c => c === secretChosenCard);
        let originalTargetCard = deck[targetIndex];
        
        if (secretIndex !== -1 && secretIndex !== targetIndex) {
            let originalSecretDom = carousel.children[secretIndex].querySelector('.card-front');
            if (originalSecretDom) {
                renderCardFront(originalSecretDom, originalTargetCard);
            }
            deck[secretIndex] = originalTargetCard;
        }
        
        renderCardFront(front, secretChosenCard);
        deck[targetIndex] = secretChosenCard;
        
        if (navigator.vibrate) navigator.vibrate([30, 30, 30]);
        let dirName = (finalSwipeDirection === 'left') ? '左' : '右';
        console.log(`已將觀眾的牌放置於第 ${targetIndex} 張 (${dirName}滑的第四張)`);
        
        mechanism2Ready = false;
        swipeSequence = 0;
        firstSwipeDirection = null;
        // 保留觀眾牌紀錄，允許第一機制（點擊變牌）繼續使用
    }
}



function getCardImageUrl(suitSymbol, val) {
    const SUIT_MAP = { '♠': 'S', '♥': 'H', '♣': 'C', '♦': 'D' };
    const v = val === '10' ? '0' : val;
    return `https://deckofcardsapi.com/static/img/${v}${SUIT_MAP[suitSymbol]}.png`;
}

function renderCardFront(element, card) {
    element.className = 'card-front';
    element.innerHTML = '';
    element.style.backgroundColor = 'white';
    
    if (card.type === 'poker' || card.type === 'beauty' || card.type === 'landmark' || (card.type === 'custom' && card.url)) {
        let url = card.type === 'poker' ? getCardImageUrl(card.suit.symbol, card.value) : card.url;
        element.style.backgroundImage = `url("${url}")`;
        element.style.backgroundSize = card.type === 'poker' ? '100% 100%' : 'cover';
        element.style.backgroundPosition = card.type === 'beauty' ? 'center top' : 'center';
        element.style.backgroundRepeat = 'no-repeat';
        
        if (card.type === 'landmark') {
            element.style.flexDirection = 'column';
            element.style.justifyContent = 'flex-end';
            
            const label = document.createElement('div');
            label.textContent = card.display;
            label.style.fontSize = '28px';
            label.style.fontWeight = '700';
            label.style.color = '#fff';
            label.style.textAlign = 'center';
            label.style.width = '100%';
            label.style.padding = '20px 10px 15px 10px';
            label.style.background = 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)';
            label.style.textShadow = '2px 2px 4px rgba(0,0,0,0.8)';
            label.style.wordBreak = 'break-word';
            label.style.letterSpacing = '2px';
            label.style.borderBottomLeftRadius = 'inherit';
            label.style.borderBottomRightRadius = 'inherit';
            
            element.appendChild(label);
        } else {
            element.style.flexDirection = 'row';
        }
    } else if (card.type === 'custom' && !card.url) {
        element.style.backgroundImage = 'none';
        element.style.flexDirection = 'column';
        element.style.justifyContent = 'center';
        element.style.alignItems = 'center';

        const label = document.createElement('div');
        label.textContent = card.display || '請先上傳圖片';
        label.style.fontSize = '20px';
        label.style.fontWeight = '600';
        label.style.color = '#888';
        label.style.textAlign = 'center';
        label.style.padding = '0 20px';
        element.appendChild(label);
    } else if (card.type === 'flag') {
        element.style.backgroundImage = 'none';
        element.style.flexDirection = 'column';
        
        const img = document.createElement('img');
        img.src = card.url || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        img.style.width = '85%';
        img.style.aspectRatio = '3 / 2'; 
        img.style.objectFit = 'cover';
        img.style.border = '1px solid #ddd';
        img.style.borderRadius = '6px';
        img.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        img.style.marginBottom = '24px';
        
        element.appendChild(img);
        
        const label = document.createElement('div');
        label.textContent = card.display;
        label.style.fontSize = '32px';
        label.style.fontWeight = '600';
        label.style.color = '#333';
        label.style.letterSpacing = '4px';
        label.style.textAlign = 'center';
        label.style.padding = '0 10px';
        label.style.wordBreak = 'break-word';
        
        element.appendChild(label);
    }
}


function loadDeckTheme(theme) {
    let baseDeck;
    if (theme === 'theme-flags') {
        baseDeck = [...flagDeck];
    } else if (theme === 'theme-landmarks') {
        baseDeck = [...landmarkDeck];
    } else if (theme === 'theme-beauties') {
        baseDeck = [...beautyDeck];
    } else if (theme === 'theme-custom') {
        baseDeck = [...customDeck];
        if (baseDeck.length === 0) {
            baseDeck = [{ type: 'custom', url: '', display: '請先上傳圖片' }];
        }
    } else {
        baseDeck = [...pokerDeck];
    }
    baseDeck.sort(() => Math.random() - 0.5);
    
    // 建立大量重複的牌組以產生「無限循環」的效果
    deck = [];
    const repeatCount = (theme === 'theme-flags' || theme === 'theme-landmarks' || theme === 'theme-custom' || theme === 'theme-beauties') ? 4 : 3;
    for (let i = 0; i < repeatCount; i++) {
        deck.push(...baseDeck.map(c => ({...c})));
    }
    
    carousel.innerHTML = '';
    if (typeof observer !== 'undefined') {
        observer.disconnect();
    }
    
    initCarousel();
    
    secretChosenCard = null;
    currentlyVisibleCard = null;
    isRecordingActive = false;
    hasRecorded = false;
    clearTimeout(mechanism2Timer);
    mechanism2Ready = false;
    swipeSequence = 0;
    firstSwipeDirection = null;
    
    setTimeout(() => {
        const middleIndex = Math.floor(deck.length / 2);
        if (carousel.children[middleIndex]) {
            carousel.children[middleIndex].scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
        }
    }, 0);
}

// 後台設定邏輯
const settingsBtn = document.getElementById('settings-btn');
const settingsModal = document.getElementById('settings-modal');
const btnCloseSettings = document.getElementById('btn-close-settings');
const themeSelect = document.getElementById('theme-select');

if (settingsBtn) {
    let lastTap = 0;
    // 支援手機與電腦的雙擊判斷
    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 500 && tapLength > 0) {
            settingsModal.classList.add('show');
            lastTap = 0; // 重置
        } else {
            lastTap = currentTime;
        }
    });

    // 保留原本的 dblclick 備用
    settingsBtn.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        settingsModal.classList.add('show');
    });
}

if (btnCloseSettings) {
    btnCloseSettings.addEventListener('click', (e) => {
        e.stopPropagation();
        settingsModal.classList.remove('show');
    });
}

const customImageSettings = document.getElementById('custom-image-settings');
const customImageInput = document.getElementById('custom-image-input');
const btnUploadCustom = document.getElementById('btn-upload-custom');
const customImageCount = document.getElementById('custom-image-count');

// --- 自訂圖片處理 (支援壓縮與 DataURL，確保全瀏覽器相容) ---
function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const MAX_SIZE = 1600;
                let width = img.width;
                let height = img.height;
                if (width > MAX_SIZE || height > MAX_SIZE) {
                    if (width > height) {
                        height = Math.round((height * MAX_SIZE) / width);
                        width = MAX_SIZE;
                    } else {
                        width = Math.round((width * MAX_SIZE) / height);
                        height = MAX_SIZE;
                    }
                    const canvas = document.createElement('canvas');
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL('image/jpeg', 0.88));
                } else {
                    resolve(e.target.result);
                }
            };
            img.onerror = () => resolve(e.target.result);
            img.src = e.target.result;
        };
        reader.onerror = (e) => reject(e);
        reader.readAsDataURL(file);
    });
}

// --- IndexedDB for Custom Images ---
const DB_NAME = 'MagicTrickDB';
const DB_VERSION = 1;
const STORE_NAME = 'customImages';
let db = null;
let inMemoryCustomList = [];

function initDB() {
    return new Promise((resolve) => {
        if (!window.indexedDB) {
            console.warn("當前環境不支援 IndexedDB，使用記憶體儲存");
            return resolve(null);
        }
        try {
            const request = indexedDB.open(DB_NAME, DB_VERSION);
            request.onerror = (e) => {
                console.error("IndexedDB 開啟失敗:", e);
                resolve(null);
            };
            request.onsuccess = (e) => {
                db = e.target.result;
                resolve(db);
            };
            request.onupgradeneeded = (e) => {
                db = e.target.result;
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
                }
            };
        } catch (err) {
            console.error("IndexedDB 初始化例外:", err);
            resolve(null);
        }
    });
}

async function addCustomImagesToDB(files) {
    for (const file of files) {
        try {
            const dataUrl = await readFileAsDataURL(file);
            const fileName = file.name || "自訂圖片";
            if (!db) {
                inMemoryCustomList.push({
                    id: Date.now() + Math.random(),
                    dataUrl: dataUrl,
                    name: fileName
                });
                continue;
            }
            await new Promise((resolve, reject) => {
                const tx = db.transaction([STORE_NAME], 'readwrite');
                const store = tx.objectStore(STORE_NAME);
                store.add({ dataUrl: dataUrl, name: fileName });
                tx.oncomplete = () => resolve();
                tx.onerror = (e) => reject(e.target.error);
            });
        } catch (err) {
            console.error("儲存圖片失敗:", file.name, err);
        }
    }
}

function deleteCustomImageFromDB(id) {
    return new Promise((resolve) => {
        if (!db) {
            inMemoryCustomList = inMemoryCustomList.filter(item => item.id !== id);
            return resolve();
        }
        try {
            const tx = db.transaction([STORE_NAME], 'readwrite');
            const store = tx.objectStore(STORE_NAME);
            store.delete(id);
            tx.oncomplete = () => resolve();
            tx.onerror = (e) => {
                console.error("刪除圖片失敗:", e);
                resolve();
            };
        } catch (err) {
            console.error("刪除圖片例外:", err);
            resolve();
        }
    });
}

function loadCustomImagesFromDB() {
    return new Promise((resolve) => {
        if (!db) return resolve(inMemoryCustomList);
        try {
            const tx = db.transaction([STORE_NAME], 'readonly');
            const store = tx.objectStore(STORE_NAME);
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result || []);
            request.onerror = (e) => {
                console.error("讀取自訂圖片失敗:", e);
                resolve(inMemoryCustomList);
            };
        } catch (err) {
            console.error("讀取自訂圖片例外:", err);
            resolve(inMemoryCustomList);
        }
    });
}

async function reloadCustomImages() {
    const records = await loadCustomImagesFromDB();
    processCustomFiles(records || []);
    if (themeSelect && themeSelect.value === 'theme-custom') {
        loadDeckTheme('theme-custom');
    }
}

function processCustomFiles(records) {
    customData = [];
    
    const customImageList = document.getElementById('custom-image-list');
    if (customImageList) customImageList.innerHTML = '';

    records.forEach((record) => {
        const id = record.id;
        let url = record.dataUrl;
        if (!url && record.file) {
            try {
                url = URL.createObjectURL(record.file);
            } catch (e) {
                console.error("createObjectURL 失敗:", e);
            }
        }
        if (!url) return;
        
        let rawName = record.name || (record.file && record.file.name) || "圖片";
        let displayName = rawName.replace(/\.[^/.]+$/, "");
        if (displayName.length > 8) {
            displayName = displayName.substring(0, 8) + '...';
        }
        customData.push({
            id: id,
            name: rawName,
            url: url,
            display: displayName
        });

        if (customImageList) {
            const thumbWrap = document.createElement('div');
            thumbWrap.style.position = 'relative';
            thumbWrap.style.width = '100%';
            thumbWrap.style.aspectRatio = '1 / 1';
            
            const img = document.createElement('img');
            img.src = url;
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '4px';
            
            const delBtn = document.createElement('button');
            delBtn.innerHTML = '&times;';
            delBtn.style.position = 'absolute';
            delBtn.style.top = '2px';
            delBtn.style.right = '2px';
            delBtn.style.background = 'rgba(255,0,0,0.8)';
            delBtn.style.color = 'white';
            delBtn.style.border = 'none';
            delBtn.style.borderRadius = '50%';
            delBtn.style.width = '20px';
            delBtn.style.height = '20px';
            delBtn.style.lineHeight = '20px';
            delBtn.style.textAlign = 'center';
            delBtn.style.cursor = 'pointer';
            delBtn.style.fontSize = '14px';
            delBtn.style.padding = '0';
            
            delBtn.onclick = async (e) => {
                e.stopPropagation();
                await deleteCustomImageFromDB(id);
                await reloadCustomImages();
            };
            
            thumbWrap.appendChild(img);
            thumbWrap.appendChild(delBtn);
            customImageList.appendChild(thumbWrap);
        }
    });
    
    customDeck = customData.map(c => ({ type: 'custom', ...c }));
    if (customImageCount) {
        customImageCount.innerHTML = `目前已上傳: ${customData.length} 張`;
    }
}

if (customImageInput) {
    customImageInput.addEventListener('change', async (e) => {
        try {
            const files = Array.from(e.target.files || []);
            if (files.length === 0) return;
            
            if (customImageCount) {
                customImageCount.innerHTML = `處理中，請稍候...`;
            }
            
            await addCustomImagesToDB(files);
            await reloadCustomImages();
        } catch (err) {
            console.error("上傳發生錯誤:", err);
            alert("圖片讀取或儲存失敗：" + (err.message || err));
        } finally {
            customImageInput.value = '';
        }
    });
}

// 背景偷偷預載圖片，消除切換主題時的讀取感
function preloadImages() {
    // 延遲 1 秒再開始預載，確保不會卡到初始網頁的載入
    setTimeout(() => {
        const allImages = [...beautyData, ...landmarkData];
        allImages.forEach(card => {
            const img = new Image();
            img.src = card.url;
        });
    }, 1000);
}

async function initializeApp() {
    try {
        await initDB();
        const records = await loadCustomImagesFromDB();
        processCustomFiles(records || []);
    } catch (e) {
        console.error("IndexedDB error:", e);
    }

    if (themeSelect) {
        const savedTheme = localStorage.getItem('magic-theme') || 'theme-poker';
        document.body.className = savedTheme;
        themeSelect.value = savedTheme;
        
        if (savedTheme === 'theme-custom' && customImageSettings) {
            customImageSettings.style.display = 'block';
        }

        loadDeckTheme(savedTheme);

        themeSelect.addEventListener('change', (e) => {
            const newTheme = e.target.value;
            document.body.className = newTheme;
            localStorage.setItem('magic-theme', newTheme);
            
            if (customImageSettings) {
                customImageSettings.style.display = newTheme === 'theme-custom' ? 'block' : 'none';
            }
            
            loadDeckTheme(newTheme);
        });
    } else {
        loadDeckTheme('theme-poker');
    }
    
    // 啟動背景預載
    preloadImages();
}

initializeApp();
