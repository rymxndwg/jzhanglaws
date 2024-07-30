let curLanguage = 'English';

export function changeLanguage(inputLanguage) {
    curLanguage = inputLanguage;
    localStorage.setItem('curLanguage', JSON.stringify(curLanguage));
}

export function getLanguage() {
    curLanguage = JSON.parse(localStorage.getItem('curLanguage')) || 'English';
    return curLanguage;
}
