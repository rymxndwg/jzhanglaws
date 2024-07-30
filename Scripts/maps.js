import { getLanguage } from './language-handler.js';

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
const languageContainer = document.querySelector('.language-container');
const englishBtn = document.querySelector('.english-txt');
const chineseBtn = document.querySelector('.chinese-txt');
const sidebarLanguageContainer = document.querySelector('.language-container-sidebar');
const sidebarEnglishBtn = document.querySelector('.english-txt-sidebar');
const sidebarChineseBtn = document.querySelector('.chinese-txt-sidebar');


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

        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Manhattan';
        }
        else {
            curLocationText.innerHTML = '曼哈顿';
        }

        rightDot.innerHTML = activeDotHtml;
        midDot.innerHTML = inactiveDotHtml;
        leftDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.remove('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.toggle('active');
    } else if (curLocation == 'mid') {
        curLocation = 'left';

        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Flushing';
        }
        else {
            curLocationText.innerHTML = '法拉盛';
        }

        leftDot.innerHTML = activeDotHtml;
        midDot.innerHTML = inactiveDotHtml;
        rightDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.toggle('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.remove('active');
    } else {
        curLocation = 'mid';

        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Tangram';
        }
        else {
            curLocationText.innerHTML = '七巧板';
        }

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

    if (getLanguage() == 'English') {
        curLocationText.innerHTML = 'Flushing';
    }
    else {
        curLocationText.innerHTML = '法拉盛';
    }

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

    if (getLanguage() == 'English') {
        curLocationText.innerHTML = 'Tangram';
    }
    else {
        curLocationText.innerHTML = '七巧板';
    }

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

    if (getLanguage() == 'English') {
        curLocationText.innerHTML = 'Manhattan';
    }
    else {
        curLocationText.innerHTML = '曼哈顿';
    }

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

        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Tangram';
        }
        else {
            curLocationText.innerHTML = '七巧板';
        }
    

        midDot.innerHTML = activeDotHtml;
        leftDot.innerHTML = inactiveDotHtml;
        rightDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.remove('active');
        tangramMap.classList.toggle('active');
        manhattanMap.classList.remove('active');
    } else if (curLocation == 'mid') {
        curLocation = 'right';

        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Manhattan';
        }
        else {
            curLocationText.innerHTML = '曼哈顿';
        }

        rightDot.innerHTML = activeDotHtml;
        leftDot.innerHTML = inactiveDotHtml;
        midDot.innerHTML = inactiveDotHtml;

        flushingMap.classList.remove('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.toggle('active');
    } else {
        curLocation = 'left';

        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Flushing';
        }
        else {
            curLocationText.innerHTML = '法拉盛';
        }

        leftDot.innerHTML = activeDotHtml;
        rightDot.innerHTML = inactiveDotHtml;
        midDot.innerHTML = inactiveDotHtml;
        
        flushingMap.classList.toggle('active');
        tangramMap.classList.remove('active');
        manhattanMap.classList.remove('active');
    }
});


function languageController() {
    if (curLocation == 'Flushing') {
        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Flushing';
        }
        else {
            curLocationText.innerHTML = '法拉盛';
        }
    } else if (curLocation == 'Manhattan') {
        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Manhattan';
        }
        else {
            curLocationText.innerHTML = '曼哈顿';
        }
    } else {
        if (getLanguage() == 'English') {
            curLocationText.innerHTML = 'Tangram';
        }
        else {
            curLocationText.innerHTML = '七巧板';
        }    
    }
}

languageContainer.addEventListener("change", (event)=> {
    languageController();
});

englishBtn.addEventListener("click", ()=> {
    languageController();
});

chineseBtn.addEventListener("click", ()=> {
    languageController();
});

sidebarLanguageContainer.addEventListener("change", (event)=> {
    languageController();
});


sidebarEnglishBtn.addEventListener("click", ()=> {
    languageController();
});

sidebarChineseBtn.addEventListener("click", ()=> {
    languageController();
});
