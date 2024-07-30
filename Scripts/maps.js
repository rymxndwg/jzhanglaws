//Get HTML Elements
const flushingMap = document.querySelector('.flushing-map');
const tangramMap = document.querySelector('.tangram-map');
const manhattanMap = document.querySelector('.manhattan-map');
const leftArrow = document.querySelector('.left-arrow');
const leftDot = document.querySelector('.left-dot');
const midDot = document.querySelector('.mid-dot');
const rightDot = document.querySelector('.right-dot');
const rightArrow = document.querySelector('.right-arrow');
const curLocationText = document.querySelector('.cur-location');

//Set Initial Elements
tangramMap.classList.toggle('active');

//Set Variables
let curLocation = 'mid';
const activeDotHtml = '&#9702;';
const inactiveDotHtml = '&#183;';

//Event when left arrow is clicked
leftArrow.addEventListener('click', ()=> {
    if (curLocation == 'left') {
        curLocation = 'right';

        curLocationText.innerHTML = 'Manhattan';

        rightDot.innerHTML = activeDotHtml;
        midDot.innerHTML = inactiveDotHtml;
        leftDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.remove('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.toggle('active');
    } else if (curLocation == 'mid') {
        curLocation = 'left';

        curLocationText.innerHTML = 'Flushing';

        leftDot.innerHTML = activeDotHtml;
        midDot.innerHTML = inactiveDotHtml;
        rightDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.toggle('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.remove('active');
    } else {
        curLocation = 'mid';

        curLocationText.innerHTML = 'Tangram';

        midDot.innerHTML = activeDotHtml;
        leftDot.innerHTML = inactiveDotHtml;
        rightDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.remove('active');
        tangramMap.classList.toggle('active');
        manhattanMap.classList.remove('active');
    }
});

//Event when left dot is clicked
leftDot.addEventListener('click', ()=> {
    curLocation = 'left';

    curLocationText.innerHTML = 'Flushing';

    leftDot.innerHTML = activeDotHtml;
    midDot.innerHTML = inactiveDotHtml;
    rightDot.innerHTML = inactiveDotHtml;

    flushingMap.classList.toggle('active');
    tangramMap.classList.remove('active');
    manhattanMap.classList.remove('active');
});

//Event when mid dot is clicked
midDot.addEventListener('click', ()=> {
    curLocation = 'mid';

    curLocationText.innerHTML = 'Tangram';

    midDot.innerHTML = activeDotHtml;
    leftDot.innerHTML = inactiveDotHtml;
    rightDot.innerHTML = inactiveDotHtml;

    flushingMap.classList.remove('active');
    tangramMap.classList.toggle('active');
    manhattanMap.classList.remove('active');
});

//Event when right dot is clicked
rightDot.addEventListener('click', ()=> {
    curLocation = 'right';

    curLocationText.innerHTML = 'Manhattan';

    rightDot.innerHTML = activeDotHtml;
    leftDot.innerHTML = inactiveDotHtml;
    midDot.innerHTML = inactiveDotHtml;

    flushingMap.classList.remove('active');
    tangramMap.classList.remove('active');
    manhattanMap.classList.toggle('active');
});

//Event when right arrow is clicked
rightArrow.addEventListener('click', ()=> {
    if (curLocation == 'left') {
        curLocation = 'mid';

        curLocationText.innerHTML = 'Tangram';

        midDot.innerHTML = activeDotHtml;
        leftDot.innerHTML = inactiveDotHtml;
        rightDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.remove('active');
        tangramMap.classList.toggle('active');
        manhattanMap.classList.remove('active');
    } else if (curLocation == 'mid') {
        curLocation = 'right';

        curLocationText.innerHTML = 'Manhattan';

        rightDot.innerHTML = activeDotHtml;
        leftDot.innerHTML = inactiveDotHtml;
        midDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.remove('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.toggle('active');
    } else {
        curLocation = 'left';

        curLocationText.innerHTML = 'Flushing';

        leftDot.innerHTML = activeDotHtml;
        rightDot.innerHTML = inactiveDotHtml;
        midDot.innerHTML = inactiveDotHtml;
        
        flushingMap.classList.toggle('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.remove('active');
    }
});

