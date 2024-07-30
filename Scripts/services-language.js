export function loadServicesChinese() {
    document.querySelector('.our-services-title h2').innerHTML = '我们的服务';
    document.querySelector('.our-services-text p:nth-child(1)').innerHTML = 'J.Zhang律师事务所专注于移民、诉讼、家庭法、房地产、公司业务和知识产权';
    document.querySelector('.our-services-text p:nth-child(2)').innerHTML = '每项业务的发展都是基于客户最需要的，每当他们在人生的某些重要时刻做出正确的决定时。';
    document.querySelector('.our-services-text p:nth-child(3)').innerHTML = '在我们的执业过程中，我们建立了一套细致、严谨、完整的工作体系，能够为客户提供最优质的法律服务，并提供良好、合理的费率。';

    document.querySelector('.our-services-title h2').innerHTML = '服务';

    // Find the stylesheet
    const styleSheet = document.styleSheets[2];

    // Iterate through rules to find the one you want to change
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.selectorText === '.intellectual-property-card::before, .litigation-card::before, .business-card::before, .immigration-card::before, .real-estate-card::before, .family-card::before') {
            rule.style.content = '"知识产权"';
        } else if (rule.selectorText === '.litigation-card::before') {
            rule.style.content = '"诉讼"';
        } else if (rule.selectorText === '.business-card::before') {
            rule.style.content = '"商务法"';
        } else if (rule.selectorText === '.immigration-card::before') {
            rule.style.content = '"移民"';
        } else if (rule.selectorText === '.real-estate-card::before') {
            rule.style.content = '"房地产"';
        } else if (rule.selectorText === '.family-card::before') {
            rule.style.content = '"家庭法 / 遗嘱"';
        }
    }

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

    document.querySelector('.location-hours-text').innerHTML = '小时';
    document.querySelector('.location-second-div p:nth-child(1)').innerHTML = '周一至周五 9:00am - 5:30pm';
    document.querySelector('.location-see-more').innerHTML = '查看更多 &#8594';
}

export function loadServicesEnglish() {
    document.querySelector('.our-services-title h2').innerHTML = 'OUR SERVICES';
    document.querySelector('.our-services-text p:nth-child(1)').innerHTML = 'J. Zhang Law Firm specializes in Immigration, Litigation, Family Law, Real Estate, Corporate Business and Intellectual Property.';
    document.querySelector('.our-services-text p:nth-child(2)').innerHTML = 'The development of each business is based on what our clients mostly needed  whenever they have to make the right decision during certain important moments in their lives.';
    document.querySelector('.our-services-text p:nth-child(3)').innerHTML = 'Throughout our practice, we have established a set of meticulous, rigorous, and complete working system, so we can provide our clients with our highest quality legal services while offering them with a good and reasonable rate.';

    document.querySelector('.our-services-title h2').innerHTML = 'SERVICES';

    // Find the stylesheet
    const styleSheet = document.styleSheets[2];

    // Iterate through rules to find the one you want to change
    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.selectorText === '.intellectual-property-card::before, .litigation-card::before, .business-card::before, .immigration-card::before, .real-estate-card::before, .family-card::before') {
            rule.style.content = '"Intellectual Property"';
        } else if (rule.selectorText === '.litigation-card::before') {
            rule.style.content = '"Litigation"';
        } else if (rule.selectorText === '.business-card::before') {
            rule.style.content = '"Business Law"';
        } else if (rule.selectorText === '.immigration-card::before') {
            rule.style.content = '"Immigration"';
        } else if (rule.selectorText === '.real-estate-card::before') {
            rule.style.content = '"Real Estate"';
        } else if (rule.selectorText === '.family-card::before') {
            rule.style.content = '"Family Law / Wills"';
        }
    }

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

    document.querySelector('.location-hours-text').innerHTML = 'Hours';
    document.querySelector('.location-second-div p:nth-child(1)').innerHTML = 'Mon - Fri  9:00am - 5:30pm';
    document.querySelector('.location-see-more').innerHTML = 'See More &#8594';
}
