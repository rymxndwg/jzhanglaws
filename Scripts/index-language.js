import { articlesDB } from "./articales-db.js";
import { chineseArticlesDB } from "./chinese-articles-db.js";
import {changeArticleName} from './article-handler.js';

function openPage(pageUrl) {
    window.location.replace(pageUrl);
}

function openArticle(articleName) {
    changeArticleName(articleName);
    openPage('article-template.html');
}

export function loadIndexChinese() {
    document.querySelector('.hero-top-text').innerHTML = '壹合律师事务所';
    document.querySelector('.hero-mid-text').innerHTML = '"满足您的法律需求"';
    document.querySelector('.hero-bottom-text').innerHTML = '一次一个案例';

    document.querySelector('.about-us-title h2').innerHTML = '关于我们';
    document.querySelector('.about-us-text p:nth-child(1)').innerHTML = '壹合律师事务所是一家坐落于美国纽约市的精品律师事务所。以服务世界华人为目标。每年，我们不仅帮助大量的世界华人定居美国，而且会持续帮助客户在美国安居乐业。';
    document.querySelector('.about-us-text p:nth-child(2)').innerHTML = '壹合律师事务所是一家坐落于美国纽约市的精品律师事务所。以服务世界华人为目标。每年，我们不仅帮助大量的世界华人定居美国，而且会持续帮助客户在美国安居乐业。';
    document.querySelector('.about-us-text p:nth-child(3)').innerHTML = '壹合律师事务所是一家坐落于美国纽约市的精品律师事务所。以服务世界华人为目标。每年，我们不仅帮助大量的世界华人定居美国，而且会持续帮助客户在美国安居乐业。';
    document.querySelector('.about-us-text p:nth-child(4)').innerHTML = '壹合律师事务所是一家坐落于美国纽约市的精品律师事务所。以服务世界华人为目标。每年，我们不仅帮助大量的世界华人定居美国，而且会持续帮助客户在美国安居乐业。';
    document.querySelector('.about-us-text p:nth-child(5)').innerHTML = '壹合律师事务所是一家坐落于美国纽约市的精品律师事务所。以服务世界华人为目标。每年，我们不仅帮助大量的世界华人定居美国，而且会持续帮助客户在美国安居乐业。';

    document.querySelector('.latest-news-title h2').innerHTML = '最新消息';

    let curHTML = ``;
    for (let i=0; i<2; i++) {
        let curArticle = chineseArticlesDB[i];
    
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

    document.querySelector('.latest-news-body').innerHTML = curHTML;

    //Set All Buttons
    document.querySelectorAll('.news-read-more').forEach((card) => {
        card.addEventListener('click', () => {
            const curArticleId = card.dataset.articleId;
            openArticle(curArticleId);
        });
    })


    document.querySelector('.contact-us-title h2').innerHTML = '联系我们';
    document.querySelector('.contact-form div:nth-child(2) p').innerHTML = '电子邮件 *';
    document.querySelector('.contact-form div:nth-child(2) input').placeholder = '电子邮件';
    document.querySelector('.contact-form div:nth-child(3) p').innerHTML = '姓名 *';
    document.querySelector('.contact-form div:nth-child(3) input').placeholder = '姓名';
    document.querySelector('.contact-form div:nth-child(4) p').innerHTML = '号码 *';
    document.querySelector('.contact-form div:nth-child(4) input').placeholder = '号码';
    document.querySelector('.contact-form div:nth-child(5) p').innerHTML = '信息 (选修)';
    document.querySelector('.contact-form div:nth-child(5) textarea').placeholder = '信息';
    document.querySelector('.contact-form div:nth-child(6) button').innerHTML = '发送';

    document.querySelector('.location-hours p:nth-child(1)').innerHTML = '小时';
    document.querySelector('.location-hours p:nth-child(2)').innerHTML = '周一至周五 9:00am - 5:30pm';
    document.querySelector('.location-info p:nth-child(1)').innerHTML = '地点';
}

export function loadIndexEnglish() {
    document.querySelector('.hero-top-text').innerHTML = 'J. Zhang And Associates, P.C.';
    document.querySelector('.hero-mid-text').innerHTML = '"Fulfilling Your Legal Needs"';
    document.querySelector('.hero-bottom-text').innerHTML = 'One Case at a Time';

    document.querySelector('.about-us-title h2').innerHTML = 'ABOUT US';
    document.querySelector('.about-us-text p:nth-child(1)').innerHTML = 'J. Zhang and Associates, P.C. (the "J. Zhang Law Firm") is a New York-based law firm. Since its founding, J. Zhang Law Firm has been dedicated to providing comprehensive and professional legal services to its clients all over the world.';
    document.querySelector('.about-us-text p:nth-child(2)').innerHTML = 'We strive to understand our clients, which means we assist our clients by crafting strategies to solve their problems and cases based on what they need.';
    document.querySelector('.about-us-text p:nth-child(3)').innerHTML = "We pride ourselves in providing our clients' solutions and legal advice in the area of immigration law, domestic and family law, corporation and business law, real estate transactions, civil and commercial litigations, and intellectual property.";
    document.querySelector('.about-us-text p:nth-child(4)').innerHTML = 'We believe that the development of our Law Firm is closely aligned with our clients. Our customer service thrives because of our legal services, and our law firm grows because of our clients.';
    document.querySelector('.about-us-text p:nth-child(5)').innerHTML = 'We and our customers complement each other and develop together. We are looking forward to sharing our professional expertise and building long-term mutually beneficial relationships with you!';

    document.querySelector('.latest-news-title h2').innerHTML = 'LATEST NEWS';

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

    document.querySelector('.latest-news-body').innerHTML = curHTML;

    //Set All Buttons
    document.querySelectorAll('.news-read-more').forEach((card) => {
        card.addEventListener('click', () => {
            const curArticleId = card.dataset.articleId;
            openArticle(curArticleId);
        });
    })


    document.querySelector('.contact-us-title h2').innerHTML = 'CONTACT US';
    document.querySelector('.contact-form div:nth-child(2) p').innerHTML = 'Email *';
    document.querySelector('.contact-form div:nth-child(2) input').placeholder = 'Email';
    document.querySelector('.contact-form div:nth-child(3) p').innerHTML = 'Name *';
    document.querySelector('.contact-form div:nth-child(3) input').placeholder = 'Name';
    document.querySelector('.contact-form div:nth-child(4) p').innerHTML = 'Phone *';
    document.querySelector('.contact-form div:nth-child(4) input').placeholder = 'Phone';
    document.querySelector('.contact-form div:nth-child(5) p').innerHTML = 'Message (Optional)';
    document.querySelector('.contact-form div:nth-child(5) textarea').placeholder = 'Message';
    document.querySelector('.contact-form div:nth-child(6) button').innerHTML = 'Send';

    document.querySelector('.location-hours p:nth-child(1)').innerHTML = 'Hours';
    document.querySelector('.location-hours p:nth-child(2)').innerHTML = 'Mon - Fri  9:00am - 5:30pm';
    document.querySelector('.location-info p:nth-child(1)').innerHTML = 'Location';
}
