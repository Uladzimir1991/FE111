let position = 0;
const sliderToShow = 1;
const sliderToScroll = 1;
const container = document.querySelector('.slider-container');
const sliderItems = document.querySelector('.slider');
const items = document.querySelectorAll('.slider-item');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const itemsCount = items.length;
const itemWidth = container.clientWidth / sliderToShow;
const movePosition = sliderToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    prev.addEventListener('click', () => {
        const itemsLeft = Math.abs(position) / itemWidth;

        position += itemsLeft >= sliderToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    next.addEventListener('click', () => {
        const itemsLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;

        position -= itemsLeft >= sliderToScroll ? movePosition : itemsLeft * itemWidth;

        setPosition();
        checkBtns();
    })

    const setPosition = _ => {
        sliderItems.style.transform = `translate(${position}px)`
    }

    const checkBtns = _ => {
        prev.disabled = position === 0;
        next.disabled = position <= -(itemsCount - sliderToShow) * itemWidth; 
    }

    checkBtns();