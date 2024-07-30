import { loadServicesChinese, loadServicesEnglish } from "./services-language.js";
import {getLanguage} from "./language-handler.js"

function openPage(pageUrl) {
    window.location.replace(pageUrl);
}

const intellectualLink = document.querySelector('.intellectual-property-card');
const litigationLink = document.querySelector('.litigation-card')
const businessLink = document.querySelector('.business-card')
const immigrationLink = document.querySelector('.immigration-card')
const realEstateLink = document.querySelector('.real-estate-card')
const familyLink = document.querySelector('.family-card')

intellectualLink.addEventListener("click", ()=> {
    openPage('intellectual.html');
});

litigationLink.addEventListener("click", ()=> {
    openPage('litigation.html');
});

businessLink.addEventListener("click", ()=> {
    openPage('business.html');
});

immigrationLink.addEventListener("click", ()=> {
    openPage('immigration.html');
});

realEstateLink.addEventListener("click", ()=> {
    openPage('real-estate.html');
});

familyLink.addEventListener("click", ()=> {
    openPage('family.html');
});

//Set Initial Language
if (getLanguage() == 'English') {
    loadServicesEnglish();
} else {
    loadServicesChinese();
}