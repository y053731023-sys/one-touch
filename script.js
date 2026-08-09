// 資料定義
const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = [
    { name: 'spades', symbol: '♠', colorClass: 'black-suit', display: '黑桃' },
    { name: 'hearts', symbol: '♥', colorClass: 'red-suit', display: '紅心' },
    { name: 'clubs', symbol: '♣', colorClass: 'black-suit', display: '梅花' },
    { name: 'diamonds', symbol: '♦', colorClass: 'red-suit', display: '方塊' }
];

const deck = [];
for (let suit of suits) {
    for (let val of values) {
        deck.push({ value: val, suit: suit });
    }
}
deck.sort(() => Math.random() - 0.5);

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
                    console.log("背景紀錄觀眾的牌:", secretChosenCard.suit.display, secretChosenCard.value);
                }, 3000);
            }
        } else {
            if (entry.target === currentlyVisibleCardElement) {
                clearTimeout(viewTimer);
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
                console.log("背景紀錄觀眾的牌:", secretChosenCard.suit.display, secretChosenCard.value);
            }, 3000);
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

                    // 變牌後清除紀錄，點其他牌就不會再變了
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
});
carousel.addEventListener('mouseleave', () => {
    isDraggingCarousel = false;
});
carousel.addEventListener('mouseup', () => {
    isDraggingCarousel = false;
});
carousel.addEventListener('mousemove', (e) => {
    if (!isDraggingCarousel) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    if (Math.abs(x - startScrollX) > 5) hasDragged = true;
    const walk = (x - startScrollX) * 2; // 滾動速度
    carousel.scrollLeft = scrollLeft - walk;
});



function getCardImageUrl(suitSymbol, val) {
    const SUIT_MAP = { '♠': 'S', '♥': 'H', '♣': 'C', '♦': 'D' };
    const v = val === '10' ? '0' : val;
    return `https://deckofcardsapi.com/static/img/${v}${SUIT_MAP[suitSymbol]}.png`;
}

function renderCardFront(element, card) {
    element.className = 'card-front';
    element.style.backgroundImage = `url(${getCardImageUrl(card.suit.symbol, card.value)})`;
    element.innerHTML = '';
}


// 啟動應用程式
initCarousel();
