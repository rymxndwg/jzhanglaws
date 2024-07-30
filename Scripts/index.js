import { articlesDB } from './articales-db.js';
import {changeArticleName} from './article-handler.js';
import { getLanguage } from './language-handler.js';
import { loadIndexChinese, loadIndexEnglish } from './index-language.js';

function openPage(pageUrl) {
    window.location.replace(pageUrl);
}

function openService(articleName) {
    changeArticleName(articleName);
    openPage('article-template.html');
}

//Get HTML Elements
const newsFeed = document.querySelector('.latest-news-body');

//Create News Feed
let curHTML = ``;

for (let i=0; i<2; i++) {
    let curArticle = articlesDB[i];

    curHTML += `<div class="news-card">
                    <h3 class="news-title">${curArticle['article-title']}</h3>
                    <div class="article-stats">
                        <p class="read-time">${curArticle['read-time']}</p>
                        <p class="dot">&#8729;</p>
                        <p class="publish-date">${curArticle['publish-date']}</p>
                    </div>
                <p class="news-text">${curArticle['article-mini']}...</p>
                    <p class="news-read-more" data-article-id="${curArticle['article-id']}">Read More &#8594</p>
                </div>`;
};

//Set Feed
newsFeed.innerHTML += curHTML;

//Set All Buttons
document.querySelectorAll('.news-read-more').forEach((card) => {
    card.addEventListener('click', () => {
        const curArticleId = card.dataset.articleId;
        openService(curArticleId);
    });
})

//Set Initial Language
if (getLanguage() == 'English') {
    loadIndexEnglish();
} else {
    loadIndexChinese();
}