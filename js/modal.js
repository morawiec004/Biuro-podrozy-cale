function onClickGalleryImage(src) {
    const modal = document.getElementById("modal");
    modal.style.display = "block";

    console.log("src: ", src);
    const modalImage = document.getElementById("modalImg");
    modalImage.src = src;
}

function onClickExit() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function onClickRight() {
    const gallery = document.getElementsByClassName("galleryImage");
    const modalImage = document.getElementById("modalImg");
    const modalImageSrc = modalImage.getAttribute("src");

    console.log(modalImage);
    console.log(modalImageSrc);
    console.log(gallery);

    let index;
    for (let i = 0; i < gallery.length; i++) {
        console.log(gallery[i].getAttribute("src"));
        if (modalImageSrc.includes(gallery[i].getAttribute("src"))) {
            index = i;
        }
    }
    
    if (index === gallery.length - 1) {
        index = 0;
    } else{
        index += 1;
    }
    
    modalImage.src = gallery[index].src;
}

function onClickLeft() {
    const gallery = document.getElementsByClassName('galleryImage');
    const modalImage = document.getElementById('modalImg');
    const modalImageSrc = modalImage.getAttribute('src');

    console.log(modalImage);
    console.log(modalImageSrc);
    console.log(gallery);

    let index;
    for (let i = 0; i < gallery.length; i++) {
        console.log(gallery[i].getAttribute('src'));
        if (modalImageSrc.includes(gallery[i].getAttribute('src'))) {
            index = i;
        }
    }

    if (index === 0) {
        index = gallery.length - 1;
    } else{
        index -= 1;
    }

    modalImage.src = gallery[index].src;
}
