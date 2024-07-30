let curArticleName = 'Train in Busan'

export function changeArticleName(inputName) {
    curArticleName = inputName;
    localStorage.setItem('curArticleName', JSON.stringify(curArticleName));
}

export function getArticleName() {
    curArticleName = JSON.parse(localStorage.getItem('curArticleName')) || '';
    return curArticleName;
}
