import {getArticleName} from './article-handler.js';
import { articlesDB } from './articales-db.js';
import {getLanguage} from "./language-handler.js"
import { loadTemplateChinese, loadTemplateEnglish } from './article-template-language.js';

//Find Service
let articleId = getArticleName();
let article;

articlesDB.forEach((curArticle) => {
    if (curArticle['article-id'] == articleId) {
        article = curArticle;
    };
});

//Get HTML Elements
const articleTitle = document.querySelector('.article-title');
const profilePic = document.querySelector('.js-profile-pic');
const writerName = document.querySelector('.writer-name')
const readTime = document.querySelector('.read-time');
const publishDate = document.querySelector('.publish-date');
const articleDocument = document.querySelector('.article-template');

//Set HTMl Elements
articleTitle.innerHTML = article['article-title'];
profilePic.src = article['profile-pic'];
writerName.innerHTML = article['writer-name'];
readTime.innerHTML = article['read-time'];
publishDate.innerHTML = article['publish-date'];

//Get Data
let keys = Object.keys(article);

//Create Article
let curHTML = ``;

for (let i=8; i<Object.keys(article).length; i++) {
    if (keys[i][0] == 'p') {
        curHTML += `<p>${article[keys[i]]}</p>`;
    } else if (keys[i][0] == 'h') {
        curHTML += `<p class="chapter-head">${article[keys[i]]}</p>`;
    } else {
        curHTML += `<img class="article-img" src="${article[keys[i]]}">`;
    }
}

articleDocument.innerHTML += curHTML;

//Set Initial Language
if (getLanguage() == 'English') {
    loadTemplateEnglish();
} else {
    loadTemplateChinese();
}