let avatarEl = document.querySelector('#avatar');
let pageHeight = document.body.scrollHeight + 239,
    windowHeight = window.innerHeight,
    maxScroll = pageHeight - windowHeight,
    minScroll = 0,
    minHeight = 40,
    maxHeight = 120,
    dScroll = maxScroll - minScroll,
    dHeight = maxHeight - minHeight;
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    let currentSize = maxHeight - (dHeight * currentScroll) / dScroll;

    avatarEl.style.height = avatarEl.style.width = currentSize + 'px';
})

