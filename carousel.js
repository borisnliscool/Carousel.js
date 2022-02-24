class Carousel {
    constructor(images = Array(), container = document.body, nextBtnText = "Next", prevBtnText = "Previous") {
        this.images = images;
        this.container = container;
        this.nextBtnText = nextBtnText;
        this.prevBtnText = prevBtnText;
        this.cooldown = Date.now();
        this.slideUpdateCallback = function () {};
        let slides = Array();
        let carouselInner;
        if (images.length === 0) {
            return;
        }
        this.carousel = document.createElement("div");
        this.carousel.classList.add("carousel");
        carouselInner = document.createElement("div");
        carouselInner.classList.add("carousel-inner");
        this.carousel.appendChild(carouselInner);
        images.forEach(function (image) {
            let slide = document.createElement("img");
            slide.classList.add(slides.length === 0 ? "carousel-active" : "carousel-inactive");
            slide.src = image;
            slides.push(slide);
            carouselInner.appendChild(slide);
        });
        this.carouselButtons = document.createElement("div");
        this.carouselButtons.classList.add("carousel-buttons");
        this.prevBtn = document.createElement("button");
        this.prevBtn.classList.add("carousel-previous");
        this.prevBtn.innerHTML = prevBtnText;
        this.carouselButtons.appendChild(this.prevBtn);
        this.nextBtn = document.createElement("button");
        this.nextBtn.classList.add("carousel-next");
        this.nextBtn.innerHTML = nextBtnText;
        this.carouselButtons.appendChild(this.nextBtn);
        this.nextBtn.addEventListener("click", this.nextSlide.bind(this));
        this.prevBtn.addEventListener("click", this.previousSlide.bind(this));
        this.carousel.appendChild(this.carouselButtons);
        this.container.appendChild(this.carousel);
        this.carouselInner = carouselInner;
    }
    nextSlide() {
        const current = this.carouselInner.querySelector(".carousel-active");
        const next = current.nextElementSibling || this.carouselInner.firstElementChild;
        current.classList.remove("carousel-active");
        current.classList.add("carousel-inactive");
        next.classList.remove("carousel-inactive");
        next.classList.add("carousel-active");
        this.cooldown = Date.now();
        this.slideUpdateCallback(next);
    }
    previousSlide() {
        const current = this.carouselInner.querySelector(".carousel-active");
        const prev = current.previousElementSibling || this.carouselInner.lastElementChild;
        current.classList.remove("carousel-active");
        current.classList.add("carousel-inactive");
        prev.classList.remove("carousel-inactive");
        prev.classList.add("carousel-active");
        this.cooldown = Date.now();
        this.slideUpdateCallback(prev);
    }
    setAutomaticSlideUpdate(interval, callback = function () {}, direction = 1) {
        let self = this;
        setInterval(function () {
            if (Date.now() - self.cooldown > (interval * 2) - 100) {
                direction === -1 ? self.previousSlide() : self.nextSlide();
                callback();
            }
        }, interval);
    }
    setNextBtnText(text) {
        this.nextBtnText = text;
        this.nextBtn.innerHTML = this.nextBtnText;
    }
    setPrevBtnText(text) {
        this.prevBtnText = text;
        this.prevBtn.innerHTML = this.prevBtnText;
    }
    setNextBtnCallback(callback) {
        this.nextBtn.addEventListener("click", callback);
    }
    setPrevBtnCallback(callback) {
        this.prevBtn.addEventListener("click", callback);
    }
    setSlideUpdateCallback(callback) {
        this.slideUpdateCallback = callback;
    }
}