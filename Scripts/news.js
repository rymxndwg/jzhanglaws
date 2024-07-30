import { articlesDB } from './articales-db.js';
import {changeArticleName} from './article-handler.js';
import { loadNewsChinese, loadNewsEnglish } from "./news-language.js";
import {getLanguage} from "./language-handler.js"

function openPage(pageUrl) {
    window.location.replace(pageUrl);
}

function openService(articleName) {
    changeArticleName(articleName);
    openPage('article-template.html');
}

//Create News Feed
let curHTML = ``;

articlesDB.forEach((curArticle) => {    
    curHTML += `<div class="news-card" data-article-id="${curArticle['article-id']}">
                    <div class="card-info-sec">
                        <h3 class="news-title">${curArticle['article-title']}</h3>
                        <div class="article-stats">
                            <p class="read-time">${curArticle['read-time']}</p>
                            <p class="dot">&#8729;</p>
                            <p class="publish-date">${curArticle['publish-date']}</p>
                        </div>
                        <p class="news-text">${curArticle['article-mini']}</p>
                    </div>
                    <div class="card-img-sec">
                        <img class="card-img" src="${curArticle['article-cover']}">
                    </div>
                </div>`;
});

//Get HTML Elements
const newsDocument = document.querySelector('.service-body');

//Set Feed
newsDocument.innerHTML += curHTML;

//Set All Buttons
document.querySelectorAll('.news-card').forEach((card) => {
    card.addEventListener('click', () => {
        const curArticleId = card.dataset.articleId;
        openService(curArticleId);
    });
})

//Set Initial Language
if (getLanguage() == 'English') {
    loadNewsEnglish();
} else {
    loadNewsChinese();
}
