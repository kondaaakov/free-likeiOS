let avatarEl = document.querySelector('#avatar');
let pageHeight = document.body.scrollHeight,
    windowHeight = window.innerHeight,
    maxScroll = pageHeight - windowHeight,
    minScroll = 0,
    minHeight = 40,
    maxHeight = 120,
    dScroll = maxScroll - minScroll,
    dHeight = maxHeight - minHeight;

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    console.log(currentScroll);
    // if (avatarEl.clientHeight > minHeight) {
        let currentSize = maxHeight - (dHeight * currentScroll) / dScroll;

        avatarEl.style.height = currentSize + 'px';
        avatarEl.style.width = currentSize + 'px';
    // }
})

console.log("Высота страницы: " + pageHeight);
console.log("Высота окна: " + windowHeight);
console.log("Максимальный скролл: " + maxScroll);