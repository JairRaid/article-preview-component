const shareEl = document.querySelector(".share-container");
const shareBtn = document.querySelector(".icon-container.one");
const shareBtn2 = document.querySelector(".icon-container.two");
let shareHeight = 0;
let isVisible = true;
shareHeight = shareEl.offsetHeight;

const initialisation = () => {
    if (window.innerWidth <= 768) {
        if (isVisible) {
            shareEl.style.bottom = `-${shareHeight}px`;
            shareEl.style.display = "none";
            isVisible = false;
        }
    }

    if (window.innerWidth > 768) {
        shareEl.style.bottom = "90px";
        shareEl.style.right = "-72px";
        shareEl.style.display = "none";
        shareEl.style.opacity = "0";
        isVisible = false;
    }
}

initialisation();

window.onload = initialisation;
window.onresize = setShareLinksPosition;

shareBtn.addEventListener("click", (e) => {
    if (!isVisible) {
        showShareLinks();
    } else {
        hideShareLinks();
    }
});

shareBtn2.addEventListener("click", (e) => {
    if (isVisible) {
        hideShareLinks();
    }
});

function showShareLinks() {
    if (window.innerWidth <= 768) {
        shareEl.style.display = "flex";
        anime({
            targets: shareEl,
            bottom: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        });
        isVisible = true;
        console.log(isVisible);
    }
    if (window.innerWidth > 768) {
        shareEl.style.display = "flex";
        anime({
            targets: shareEl,
            opacity: 1,
            duration: 300,
            easing: 'easeInOutQuad'
        });
        setTimeout(() => {

            isVisible = true;
            //            console.log(isVisible);
        }, 300);
    }
}

function hideShareLinks() {
    if (window.innerWidth <= 768) {
        anime({
            targets: shareEl,
            bottom: -76,
            duration: 300,
            easing: 'easeInOutQuad'
        });

        isVisible = false;
        //        console.log(isVisible);
    }
    if (window.innerWidth > 768) {
        anime({
            targets: shareEl,
            opacity: 0,
            duration: 300,
            easing: 'easeInOutQuad'
        });
        setTimeout(() => {
            shareEl.style.display = "none";
            isVisible = false;
            //            console.log(isVisible);
        }, 300);

    }
}

function setShareLinksPosition() {
    if (window.innerWidth > 768) {

        if (isVisible) {
            shareEl.style.bottom = "90px";
            shareEl.style.right = "-72px";
        } else {
            shareEl.style.opacity = "0";
            shareEl.style.bottom = "90px";
            shareEl.style.right = "-72px";
            shareEl.style.display = "none";
        }
    }
    if (window.innerWidth <= 768) {
        //        console.log(isVisible);
        shareEl.style.opacity = "1";
        if (isVisible) {
            shareEl.style.bottom = 0;
            shareEl.style.right = 0;
        } else {
            shareEl.style.right = 0;
            shareEl.style.bottom = '-76px';
        }
    }
}
