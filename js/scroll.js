let isScrolling = false;

let avatarEl = document.querySelector('#avatar');
let textEl = document.querySelector('#avatarText');
let avatarBlockEl = document.querySelector('#avatarSection');
avatarBlockEl.style.marginTop = '0';

let scrollTop = pageYOffset;

addEventListener('scroll', scrolling, false);

// function throttleScroll(e) {
//     if (isScrolling == false) {
//         window.requestAnimationFrame(function() {
//             scrolling(e);
//             isScrolling = false;
//         });
//     }
//     isScrolling = true;
// }

function scrolling (e) {
    let getAvatarBlockElMargin = avatarBlockEl.style.marginTop.substring(0, (avatarBlockEl.style.marginTop.length - 2));
    if (pageYOffset > scrollTop && pageYOffset < 130) {
        if (avatarEl.height > 40 && avatarEl.width > 40) {
            let newHeight = avatarEl.height - 1;
            let newWidth = avatarEl.width - 1;

            avatarEl.style.height = newHeight + 'px';
            avatarEl.style.width = newWidth + 'px';
        }

        if (avatarBlockEl.style.marginTop.substring(0, (avatarBlockEl.style.marginTop.length - 2)) > -40) {
            let newMargin = avatarBlockEl.style.marginTop.substring(0, (avatarBlockEl.style.marginTop.length - 2)) - 1;
            avatarBlockEl.style.marginTop = newMargin + 'px';
        }

        console.log(pageYOffset + 'down');
    } else if (pageYOffset < scrollTop && pageYOffset <= 130) {
        if (avatarEl.height < 120 && avatarEl.width < 120) {
            let newHeight = avatarEl.height + 1;
            let newWidth = avatarEl.width + 1;

            avatarEl.style.height = newHeight + 'px';
            avatarEl.style.width = newWidth + 'px';
        }

        if (getAvatarBlockElMargin < 0) {
            let newMargin = +getAvatarBlockElMargin + 1;
            avatarBlockEl.style.marginTop = newMargin + 'px';
        }

        console.log(pageYOffset + 'up');
    }
    scrollTop = pageYOffset;


}