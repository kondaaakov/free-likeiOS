let avatarEl = document.querySelector('#avatar');
let avatarText = document.querySelector('#avatarText');

let pageHeight = document.body.scrollHeight + 219,
    windowHeight = window.innerHeight,
    maxScroll = pageHeight - windowHeight,
    minScroll = 0,
    minHeight = 40,
    maxHeight = 120,
    minMargin = 0,
    maxMargin = -40,
    minOpacity = 0,
    maxOpacity = 1,
    dScroll = maxScroll - minScroll,
    dHeight = maxHeight - minHeight;
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    console.log(currentScroll);
    let currentSize = maxHeight - (dHeight * currentScroll) / dScroll;
    avatarEl.style.height = avatarEl.style.width = currentSize + 'px';

    let currentMargin = ((maxMargin - minMargin) * currentScroll) / dScroll + minMargin;
    avatarEl.style.marginTop = currentMargin + 'px';

    let currentOpacity = maxOpacity - ((maxOpacity - minOpacity) * currentScroll) / dScroll;
    avatarText.style.opacity = currentOpacity;
})

