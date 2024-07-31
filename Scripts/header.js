import { changeLanguage, getLanguage } from './language-handler.js';
import { loadIndexChinese, loadIndexEnglish } from './index-language.js';
import { loadContactChinese, loadContactEnglish } from "./contact-language.js";
import { loadServicesChinese, loadServicesEnglish } from "./services-language.js";
import { loadTeamChinese, loadTeamEnglish } from './team-language.js';
import { loadNewsChinese, loadNewsEnglish } from './news-language.js';
import { loadTemplateChinese, loadTemplateEnglish } from './article-template-language.js';
import { loadIntellectualChinese, loadIntellectualEnglish } from './intellectual-language.js';
import { loadLitigationChinese, loadLitigationEnglish } from './litigation-language.js';
import { loadBusinessChinese, loadBusinessEnglish } from './business-language.js';
import { loadImmigrationChinese, loadImmigrationEnglish } from './immigration-language.js';
import { loadRealChinese, loadRealEnglish } from './real-language.js';
import { loadFamilyChinese, loadFamilyEnglish } from './family-language.js';

function openPage(pageUrl) {
    window.location.replace(pageUrl);
}

function openSidebar() {
    const hamMenu = document.querySelector('.menu');
    hamMenu.classList.toggle('active');

    const hamMenuOutside = document.querySelector('.menu-outside');
    hamMenuOutside.classList.toggle('active');
}

function closeSidebar() {
    const hamMenu = document.querySelector('.menu');
    hamMenu.classList.remove('active');

    const hamMenuOutside = document.querySelector('.menu-outside');
    hamMenuOutside.classList.remove('active');
}

//Get Html Elements
const homeLogo = document.querySelector('.header-left');
const homeLink = document.querySelector('.js-home-link');
const servicesLink = document.querySelector('.js-services-link');
const hamburgerLink = document.querySelector('.hamburger-img');
const menuOutsideLink = document.querySelector('.menu-outside');
const menuCloseBtn = document.querySelector('.js-menu-x-btn');
const newsLink = document.querySelector('.js-news-link');
const teamLink = document.querySelector('.js-team-link');
const contactLink = document.querySelector('.js-contact-link');
const sideHomeLink = document.querySelector('.js-side-home-link');
const sideServicesLink = document.querySelector('.js-side-services-link');
const sideNewsLink = document.querySelector('.js-side-news-link');
const sideTeamLink = document.querySelector('.js-side-team-link');
const sideContactLink = document.querySelector('.js-side-contact-link');
const languageContainer = document.querySelector('.language-container');
const check = document.querySelector('#check');
const englishBtn = document.querySelector('.english-txt');
const chineseBtn = document.querySelector('.chinese-txt');
const sidebarLanguageContainer = document.querySelector('.language-container-sidebar');
const sidebarCheck = document.querySelector('#check-sidebar');
const sidebarEnglishBtn = document.querySelector('.english-txt-sidebar');
const sidebarChineseBtn = document.querySelector('.chinese-txt-sidebar');

//Set Direct Links
homeLogo.addEventListener("click", ()=> {
    openPage('index.html');
});

homeLink.addEventListener("click", ()=> {
    openPage('index.html');
});

servicesLink.addEventListener("click", ()=> {
    openPage('services.html');
});

newsLink.addEventListener("click", ()=> {
    openPage('news.html');
});

teamLink.addEventListener("click", ()=> {
    openPage('team.html');
});

contactLink.addEventListener("click", ()=> {
    openPage('contact.html');
});

sideHomeLink.addEventListener("click", ()=> {
    openPage('index.html');
});

sideServicesLink.addEventListener("click", ()=> {
    openPage('services.html');
});

sideNewsLink.addEventListener("click", ()=> {
    openPage('news.html');
});

sideTeamLink.addEventListener("click", ()=> {
    openPage('team.html');
});

sideContactLink.addEventListener("click", ()=> {
    openPage('contact.html');
});

hamburgerLink.addEventListener("click", ()=> {
    openSidebar();
});

menuOutsideLink.addEventListener("click", ()=> {
    closeSidebar();
});

menuCloseBtn.addEventListener("click", ()=> {
    closeSidebar();
});

//Function to switch to Chinese
function loadHeaderChinese() {
    homeLink.innerHTML = '首页';
    servicesLink.innerHTML = '业务';
    newsLink.innerHTML = '消息';
    teamLink.innerHTML = '团队';
    contactLink.innerHTML = '接触';
    sideHomeLink.innerHTML = '首页';
    sideServicesLink.innerHTML = '业务';
    sideNewsLink.innerHTML = '消息';
    sideTeamLink.innerHTML = '团队';
    sideContactLink.innerHTML = '接触';
};

//Function to switch to English
function loadHeaderEnglish() {
    homeLink.innerHTML = 'Home';
    servicesLink.innerHTML = 'Services';
    newsLink.innerHTML = 'News';
    teamLink.innerHTML = 'Our Team';
    contactLink.innerHTML = 'Contact Us';
    sideHomeLink.innerHTML = 'Home';
    sideServicesLink.innerHTML = 'Services';
    sideNewsLink.innerHTML = 'News';
    sideTeamLink.innerHTML = 'Our Team';
    sideContactLink.innerHTML = 'Contact Us';
};

//Initial Header Load
if (getLanguage() == 'English') {
    loadHeaderEnglish();
    check.checked = false;
    sidebarCheck.checked = false;
} else {
    loadHeaderChinese();
    check.checked = true;
    sidebarCheck.checked = true;
}

function languageController(curLanguage) {
    //Get Page Name
    let curPathName = window.location.pathname;
    //Use 12 if on github url, else use 1 for Local Server
    curPathName = curPathName.slice(12, -5);

    if (curLanguage == 'Chinese') {
        loadHeaderChinese();

        if (curPathName == '') {
            loadIndexChinese();
        } else if (curPathName == 'business') {
            loadBusinessChinese();
        } else if (curPathName == 'contact') {
            loadContactChinese();
        } else if (curPathName == 'family') {
            loadFamilyChinese();
        } else if (curPathName == 'immigration') {
            loadImmigrationChinese();
        } else if (curPathName == 'intellectual') {
            loadIntellectualChinese();
        } else if (curPathName == 'litigation') {
            loadLitigationChinese();
        } else if (curPathName == 'news') {
            loadNewsChinese();
        } else if (curPathName == 'real-estate') {
            loadRealChinese();
        } else if (curPathName == 'services') {
            loadServicesChinese();
        } else if (curPathName == 'team') {
            loadTeamChinese();
        } else {
            loadTemplateChinese();
        }
    } else {
        loadHeaderEnglish();

        if (curPathName == '') {
            loadIndexEnglish();
        } else if (curPathName == 'business') {
            loadBusinessEnglish();
        } else if (curPathName == 'contact') {
            loadContactEnglish();
        } else if (curPathName == 'family') {
            loadFamilyEnglish();
        } else if (curPathName == 'immigration') {
            loadImmigrationEnglish();
        } else if (curPathName == 'intellectual') {
            loadIntellectualEnglish();
        } else if (curPathName == 'litigation') {
            loadLitigationEnglish();
        } else if (curPathName == 'news') {
            loadNewsEnglish();
        } else if (curPathName == 'real-estate') {
            loadRealEnglish();
        } else if (curPathName == 'services') {
            loadServicesEnglish();
        } else if (curPathName == 'team') {
            loadTeamEnglish();
        } else {
            loadTemplateEnglish();
        }
    }
}

function universalController() {
    let curLanguage = '';
    if (check.checked) {
        curLanguage = 'English';
    } else {
        curLanguage = 'Chinese';
    }

    //Set the Language
    changeLanguage(curLanguage);

    check.checked = !check.checked;
    sidebarCheck.checked = check.checked;

    languageController(curLanguage);
}

function sidebarUniversalController() {
    let curLanguage = '';
    if (check.checked) {
        curLanguage = 'English';
    } else {
        curLanguage = 'Chinese';
    }

    //Set the Language
    changeLanguage(curLanguage);

    sidebarCheck.checked = !sidebarCheck.checked;
    check.checked = sidebarCheck.checked;

    languageController(curLanguage);
}

languageContainer.addEventListener("change", (event)=> {
    let curLanguage = '';
    if (event.target.checked) {  //Set to Chinese
        curLanguage = 'Chinese';
    } else { //Set to English
        curLanguage = 'English';
    }

    //Set the Language
    changeLanguage(curLanguage);

    sidebarCheck.checked = event.target.checked;

    languageController(curLanguage);
});

englishBtn.addEventListener("click", ()=> {
    universalController();
});

chineseBtn.addEventListener("click", ()=> {
    universalController();
});

sidebarLanguageContainer.addEventListener("change", (event)=> {
    let curLanguage = '';
    if (event.target.checked) {  //Set to Chinese
        curLanguage = 'Chinese';
    } else { //Set to English
        curLanguage = 'English';
    }

    //Set the Language
    changeLanguage(curLanguage);

    check.checked = event.target.checked;

    languageController(curLanguage);
});


sidebarEnglishBtn.addEventListener("click", ()=> {
    sidebarUniversalController();
});

sidebarChineseBtn.addEventListener("click", ()=> {
    sidebarUniversalController();
});
