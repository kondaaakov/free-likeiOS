document.addEventListener('touchstart', (event) => {
    let elem = 0;

    if (event.target.className === 'btn_icon_delete') {
        event.path.forEach((el) => {
            if (el.className === 'edit_block_el') elem = el;
        })

        console.log(elem.childNodes);
        elem.childNodes.forEach((el) => {
            if (el.nodeName === 'BUTTON') el.classList.toggle('hidden');
            // console.log(el.className);
        })
    }
})
