import { articlesDB } from "./articales-db.js";
import { getArticleName } from "./article-handler.js";
import { chineseArticlesDB } from "./chinese-articles-db.js";

export function loadTemplateChinese() {
    document.querySelector('.service-title h2').innerHTML = '吉张新闻';

    //Find Service
    let articleId = getArticleName();
    let article;

    chineseArticlesDB.forEach((curArticle) => {
        if (curArticle['article-id'] == articleId) {
            article = curArticle;
        };
    });

    //Get HTML Elements
    const articleDocument = document.querySelector('.article-template');

    articleDocument.innerHTML = `<h3 class="article-title">New Train Development in Busan, JZhang Stock Prices Rise</h3>
                    <div class="profile-div">
                        <img class="js-profile-pic profile-pic" src="ProfilePics/RaymondPFP.jpeg">
                        <div class="writer-info">
                            <p class="writer-name">Raymond Wong</p>
                            <div class="article-info">
                                <p class="read-time">7 min</p>
                                <p class="dot">&#8729;</p>
                                <p class="publish-date">July 7, 2024</p>
                            </div>
                        </div>
                    </div>`;
    const articleTitle = document.querySelector('.article-title');
    const profilePic = document.querySelector('.js-profile-pic');
    const writerName = document.querySelector('.writer-name')
    const readTime = document.querySelector('.read-time');
    const publishDate = document.querySelector('.publish-date');

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
}

export function loadTemplateEnglish() {
    document.querySelector('.service-title h2').innerHTML = 'JZHANG NEWS';

    
    //Find Service
    let articleId = getArticleName();
    let article;

    articlesDB.forEach((curArticle) => {
        if (curArticle['article-id'] == articleId) {
            article = curArticle;
        };
    });

    //Get HTML Elements
    const articleDocument = document.querySelector('.article-template');
    articleDocument.innerHTML = `<h3 class="article-title">New Train Development in Busan, JZhang Stock Prices Rise</h3>
                    <div class="profile-div">
                        <img class="js-profile-pic profile-pic" src="ProfilePics/RaymondPFP.jpeg">
                        <div class="writer-info">
                            <p class="writer-name">Raymond Wong</p>
                            <div class="article-info">
                                <p class="read-time">7 min</p>
                                <p class="dot">&#8729;</p>
                                <p class="publish-date">July 7, 2024</p>
                            </div>
                        </div>
                    </div>`;
    const articleTitle = document.querySelector('.article-title');
    const profilePic = document.querySelector('.js-profile-pic');
    const writerName = document.querySelector('.writer-name')
    const readTime = document.querySelector('.read-time');
    const publishDate = document.querySelector('.publish-date');

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
}
